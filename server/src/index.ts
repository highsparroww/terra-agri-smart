import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// --- Routes ---

// 1. Analyze (Deterministic Logic)
app.post("/api/analyze", (req, res) => {
    const { lat, lng } = req.body;

    if (!lat || !lng) {
        return res.status(400).json({ error: "Latitude and Longitude are required" });
    }

    const latitude = parseFloat(lat);
    const longitude = parseFloat(lng);

    // Deterministic logic based on coordinates
    const hash = (latitude + longitude) * 1000;
    const soilTypes = ["Loamy Soil", "Black Soil", "Red Soil", "Alluvial Soil", "Clay Soil"];
    const soilIndex = Math.floor(Math.abs(Math.sin(hash)) * soilTypes.length);

    const moisture = Math.floor(Math.abs(Math.cos(hash)) * 60) + 20; // 20-80%
    const temp = Math.floor(Math.abs(Math.sin(hash * 2)) * 15) + 20; // 20-35°C
    const rain = Math.floor(Math.abs(Math.cos(hash * 3)) * 1000) + 500; // 500-1500mm

    const results = {
        soilType: soilTypes[soilIndex],
        moisture: `Moderate (${moisture}%)`,
        temperature: `${temp}-${temp + 5}°C`,
        rainfall: `${rain}-${rain + 200}mm annually`,
        recommendations: [
            {
                crop: ["Rice", "Wheat", "Sugarcane", "Cotton", "Maize"][soilIndex],
                suitability: Math.floor(Math.random() * 15) + 80,
                expectedYield: `${Math.floor(Math.random() * 3) + 4}-${Math.floor(Math.random() * 3) + 7} tons/hectare`,
                roi: `₹${Math.floor(Math.random() * 50) + 50},000/hectare`,
                season: ["Monsoon (June-Oct)", "Winter (Nov-Mar)", "Year-round"][Math.floor(Math.random() * 3)],
            },
            {
                crop: ["Pulses", "Mustard", "Jute", "Tea", "Coffee"][(soilIndex + 1) % 5],
                suitability: Math.floor(Math.random() * 15) + 70,
                expectedYield: `${Math.floor(Math.random() * 2) + 2}-${Math.floor(Math.random() * 2) + 4} tons/hectare`,
                roi: `₹${Math.floor(Math.random() * 40) + 40},000/hectare`,
                season: "Winter (Nov-Mar)",
            },
            {
                crop: ["Vegetables", "Fruits", "Spices", "Rubber", "Coconut"][(soilIndex + 2) % 5],
                suitability: Math.floor(Math.random() * 15) + 60,
                expectedYield: `${Math.floor(Math.random() * 5) + 10}-${Math.floor(Math.random() * 5) + 20} tons/hectare`,
                roi: `₹${Math.floor(Math.random() * 80) + 80},000/hectare`,
                season: "Year-round",
            },
        ],
    };

    res.json(results);
});

// 2. Invest (Listings)
app.get("/api/invest", async (req, res) => {
    try {
        const listings = await prisma.listing.findMany();
        res.json(listings);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch listings" });
    }
});

app.post("/api/invest/contact", async (req, res) => {
    const { message, details } = req.body;
    try {
        await prisma.inquiry.create({
            data: {
                type: "contact_seller",
                message: message || "Interested in property",
                details: JSON.stringify(details),
            },
        });
        res.json({ success: true, message: "Inquiry sent successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to send inquiry" });
    }
});

// 3. Policies
app.get("/api/policies", async (req, res) => {
    try {
        const policies = await prisma.policy.findMany();
        res.json(policies);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch policies" });
    }
});

// 4. Chat (AgriBot)
app.post("/api/chat", (req, res) => {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: "Message is required" });

    const userMsg = message.toLowerCase();
    let botResponse = "I'm not sure about that. Try asking about weather, crops, soil, prices, or policies.";

    if (userMsg.includes("weather") || userMsg.includes("rain") || userMsg.includes("climate")) {
        botResponse = "Current weather analysis indicates optimal conditions for sowing. Rainfall is expected to be normal this season.";
    } else if (userMsg.includes("soil") || userMsg.includes("land")) {
        botResponse = "Soil health is critical. We recommend regular testing. Our Analyze tool can help you understand your soil composition based on location.";
    } else if (userMsg.includes("crop") || userMsg.includes("plant") || userMsg.includes("grow")) {
        botResponse = "Crop selection depends on your region. Popular high-yield crops this season include Wheat, Rice, and Sugarcane. Use the Analyze tool for specific recommendations.";
    } else if (userMsg.includes("price") || userMsg.includes("cost") || userMsg.includes("rate")) {
        botResponse = "Market prices are fluctuating. Wheat is currently trading at ₹2100/quintal. Check the Invest page for land prices.";
    } else if (userMsg.includes("subsidy") || userMsg.includes("policy") || userMsg.includes("scheme")) {
        botResponse = "There are several active subsidies like PM-KISAN. Visit our Policies page for a comprehensive list.";
    } else if (userMsg.includes("loan") || userMsg.includes("credit") || userMsg.includes("finance")) {
        botResponse = "Kisan Credit Card schemes offer loans at low interest rates. Check the Policies page for details.";
    } else if (userMsg.includes("hello") || userMsg.includes("hi")) {
        botResponse = "Hello! How can I assist you with your farming needs today?";
    }

    res.json({ response: botResponse });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

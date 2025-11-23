import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Seed Listings
    const listings = [
        {
            location: "Punjab, India",
            price: 1200000,
            area: 5.5,
            soilType: "Alluvial Soil",
            description: "High-yield wheat farmland with canal irrigation access.",
            imageUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop"
        },
        {
            location: "Maharashtra, India",
            price: 850000,
            area: 3.2,
            soilType: "Black Soil",
            description: "Perfect for cotton and sugarcane cultivation.",
            imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop"
        },
        {
            location: "Kerala, India",
            price: 2500000,
            area: 2.0,
            soilType: "Laterite Soil",
            description: "Ideal for spice and rubber plantations.",
            imageUrl: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=1000&auto=format&fit=crop"
        }
    ];

    for (const listing of listings) {
        await prisma.listing.create({ data: listing });
    }

    // Seed Policies
    const policies = [
        {
            title: "PM-KISAN",
            category: "Financial Aid",
            description: "Income support of ₹6,000 per year to all landholding farmer families.",
            eligibility: "All landholding farmers",
            link: "https://pmkisan.gov.in"
        },
        {
            title: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
            category: "Insurance",
            description: "Crop insurance scheme to provide financial support to farmers suffering crop loss/damage.",
            eligibility: "Farmers growing notified crops",
            link: "https://pmfby.gov.in"
        },
        {
            title: "Kisan Credit Card (KCC)",
            category: "Credit",
            description: "Provides adequate and timely credit support from the banking system.",
            eligibility: "All farmers, tenant farmers, sharecroppers",
            link: "https://myscheme.gov.in/schemes/kcc"
        }
    ];

    for (const policy of policies) {
        await prisma.policy.create({ data: policy });
    }

    console.log('Database seeded successfully');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

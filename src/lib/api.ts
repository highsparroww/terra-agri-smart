const API_URL = "http://localhost:3000/api";

export const api = {
    analyze: async (lat: string, lng: string) => {
        const response = await fetch(`${API_URL}/analyze`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ lat, lng }),
        });
        if (!response.ok) throw new Error("Analysis failed");
        return response.json();
    },

    getListings: async () => {
        const response = await fetch(`${API_URL}/invest`);
        if (!response.ok) throw new Error("Failed to fetch listings");
        return response.json();
    },

    contactSeller: async (message: string, details: any) => {
        const response = await fetch(`${API_URL}/invest/contact`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message, details }),
        });
        if (!response.ok) throw new Error("Failed to contact seller");
        return response.json();
    },

    getPolicies: async () => {
        const response = await fetch(`${API_URL}/policies`);
        if (!response.ok) throw new Error("Failed to fetch policies");
        return response.json();
    },

    chat: async (message: string) => {
        const response = await fetch(`${API_URL}/chat`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message }),
        });
        if (!response.ok) throw new Error("Chat failed");
        return response.json();
    },
};

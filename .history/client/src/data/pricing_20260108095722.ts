import type { IPricing } from "../types";

export const pricingData: IPricing[] = [
    {
        name: "Starter",
        price: 99,
        period: "one-time",
        credits: 100,
        features: [
            "10 Premium AI Thumbnails",
            "Best for starters",
            "Access to all AI models",
            "No watermark on downloads",
            "High-quality",
            "Commercial usage allowed",
            "Credits never expire"
        ],
        mostPopular: false
    },
    {
        name: "Pro",
        price: 299,
        period: "one-time",
        credits: 400,
        features: [
            "40 Premium AI Thumbnails",
            "Best for intermediate",
            "Access to all AI models",
            "No watermark on downloads",
            "High-quality",
            "Commercial usage allowed",
            "Credits never expire"
        ],
        mostPopular: true
    },
    {
        name: "Ultra",
        price: 999,
        period: "one-time",
        credits: 1500,
        features: [
            "150 Premium AI Thumbnails",
            "Best for professionals",
            "Access to all AI models",
            "No watermark on downloads",
            "High-quality",
            "Commercial usage allowed",
            "Credits never expire"
        ],
        mostPopular: false
    }
];

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
    const plans = [
        {
            name: "Starter",
            price: "Free",
            description: "Essential tools for small farms",
            features: ["Basic Land Analysis", "Market Price Trends", "Community Support", "5 Land Records"],
        },
        {
            name: "Pro",
            price: "₹999/mo",
            description: "Advanced insights for growing businesses",
            features: ["Advanced Soil Analysis", "Crop Disease Detection", "Priority Support", "Unlimited Land Records", "Export Reports"],
            popular: true,
        },
        {
            name: "Enterprise",
            price: "Custom",
            description: "Full-scale solutions for large organizations",
            features: ["API Access", "Custom Integrations", "Dedicated Account Manager", "SLA Support", "Multi-user Access"],
        },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-display font-bold text-foreground mb-4">Simple, Transparent Pricing</h1>
                        <p className="text-xl text-muted-foreground">Choose the plan that fits your agricultural needs.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {plans.map((plan) => (
                            <div key={plan.name} className={`relative rounded-2xl p-8 border ${plan.popular ? 'border-primary bg-primary/5' : 'border-border bg-card'} shadow-lg flex flex-col`}>
                                {plan.popular && (
                                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                                        MOST POPULAR
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                                <div className="text-3xl font-bold text-primary mb-4">{plan.price}</div>
                                <p className="text-muted-foreground mb-6">{plan.description}</p>
                                <ul className="space-y-3 mb-8 flex-grow">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                                            <Check className="h-4 w-4 text-primary" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Button className={`w-full ${plan.popular ? '' : 'variant-outline'}`}>
                                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Pricing;

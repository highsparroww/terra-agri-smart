import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Building2, BarChart3, ShieldCheck, Users } from "lucide-react";

const Enterprise = () => {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">Enterprise Solutions</h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Empowering large-scale agricultural operations with data-driven intelligence and custom integrations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="bg-primary/10 p-3 rounded-lg h-fit">
                                    <BarChart3 className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Advanced Analytics</h3>
                                    <p className="text-muted-foreground">Custom dashboards and reporting tools tailored to your organization's KPIs.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-primary/10 p-3 rounded-lg h-fit">
                                    <ShieldCheck className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Enterprise Security</h3>
                                    <p className="text-muted-foreground">Bank-grade security, SSO integration, and role-based access control.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-primary/10 p-3 rounded-lg h-fit">
                                    <Users className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Dedicated Support</h3>
                                    <p className="text-muted-foreground">24/7 priority support and a dedicated account manager for your success.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
                            <h3 className="text-2xl font-bold mb-6">Contact Sales</h3>
                            <form className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <input type="text" placeholder="First Name" className="w-full p-3 rounded-md border border-input bg-background" />
                                    <input type="text" placeholder="Last Name" className="w-full p-3 rounded-md border border-input bg-background" />
                                </div>
                                <input type="email" placeholder="Work Email" className="w-full p-3 rounded-md border border-input bg-background" />
                                <input type="text" placeholder="Company Name" className="w-full p-3 rounded-md border border-input bg-background" />
                                <textarea placeholder="How can we help?" rows={4} className="w-full p-3 rounded-md border border-input bg-background"></textarea>
                                <Button className="w-full size-lg">Request Demo</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Enterprise;

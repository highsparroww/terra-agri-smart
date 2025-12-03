import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CaseStudies = () => {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-display font-bold text-foreground mb-4">Success Stories</h1>
                        <p className="text-xl text-muted-foreground">See how farmers and organizations are growing with TerraCrop.</p>
                    </div>

                    <div className="space-y-12">
                        <div className="flex flex-col md:flex-row gap-8 items-center bg-card border border-border rounded-2xl p-8">
                            <div className="w-full md:w-1/2">
                                <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop" alt="Case Study 1" className="rounded-xl w-full h-64 object-cover" />
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="text-primary font-bold mb-2">PUNJAB, INDIA</div>
                                <h2 className="text-2xl font-bold mb-4">Increasing Wheat Yield by 40%</h2>
                                <p className="text-muted-foreground mb-6">
                                    By utilizing TerraCrop's soil analysis and weather prediction tools, a cooperative of 50 farmers in Punjab optimized their sowing schedule and fertilizer usage, resulting in a record-breaking harvest.
                                </p>
                                <div className="grid grid-cols-3 gap-4 border-t border-border pt-4">
                                    <div>
                                        <div className="text-2xl font-bold text-foreground">40%</div>
                                        <div className="text-xs text-muted-foreground">Yield Increase</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-foreground">20%</div>
                                        <div className="text-xs text-muted-foreground">Cost Reduction</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-foreground">50+</div>
                                        <div className="text-xs text-muted-foreground">Farmers Impacted</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row-reverse gap-8 items-center bg-card border border-border rounded-2xl p-8">
                            <div className="w-full md:w-1/2">
                                <img src="https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=1000&auto=format&fit=crop" alt="Case Study 2" className="rounded-xl w-full h-64 object-cover" />
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="text-primary font-bold mb-2">KERALA, INDIA</div>
                                <h2 className="text-2xl font-bold mb-4">Sustainable Spice Plantation</h2>
                                <p className="text-muted-foreground mb-6">
                                    A large spice estate in Kerala adopted TerraCrop's enterprise solutions to monitor soil moisture and automate irrigation, significantly reducing water usage while maintaining premium crop quality.
                                </p>
                                <div className="grid grid-cols-3 gap-4 border-t border-border pt-4">
                                    <div>
                                        <div className="text-2xl font-bold text-foreground">35%</div>
                                        <div className="text-xs text-muted-foreground">Water Saved</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-foreground">Zero</div>
                                        <div className="text-xs text-muted-foreground">Crop Loss</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-foreground">24/7</div>
                                        <div className="text-xs text-muted-foreground">Monitoring</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CaseStudies;

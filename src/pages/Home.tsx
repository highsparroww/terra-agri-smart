import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Sprout, Leaf, BarChart3, Factory, ArrowRight, CheckCircle2, Droplets, Scan, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="font-inter text-foreground bg-background min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="w-full border-b border-white/10 bg-background/80 backdrop-blur-xl sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto h-20 flex items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Sprout className="text-white h-5 w-5" />
            </div>
            <h2 className="font-display font-bold text-2xl tracking-tight text-foreground">TerraCrop</h2>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#features" className="hover:text-primary transition-colors">Solutions</a>
            <a href="#how-it-works" className="hover:text-primary transition-colors">How it Works</a>
            <a href="#about" className="hover:text-primary transition-colors">Company</a>
            <Link to="/analyze">
              <Button variant="default" className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 border border-primary/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                AI-Powered Agriculture Intelligence
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight font-display text-foreground leading-[1.1]">
                Cultivating the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow">Future of Farming</span>
              </h1>
              <p className="mt-8 text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Empower your agricultural decisions with enterprise-grade AI. From soil analysis to yield forecasting, TerraCrop delivers the insights you need to grow smarter.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link to="/analyze">
                  <Button className="h-14 px-8 text-lg rounded-full shadow-glow hover:shadow-strong transition-all duration-300 bg-primary hover:bg-primary/90">
                    Start Free Analysis <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="h-14 px-8 text-lg rounded-full border-2 hover:bg-muted/50">
                    View Demo
                  </Button>
                </Link>
              </div>

              <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-muted-foreground text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>99% Accuracy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Real-time Data</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full max-w-xl lg:max-w-none relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/20 glass group">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop"
                  alt="Futuristic Smart Farm"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay Data Points */}
                <div className="absolute bottom-8 left-8 right-8 z-20">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/10">
                      <p className="text-xs text-primary-foreground/80 mb-1">Soil Moisture</p>
                      <div className="flex items-end gap-2">
                        <span className="text-2xl font-bold text-white">62%</span>
                        <span className="text-xs text-emerald-400 mb-1">↑ Optimal</span>
                      </div>
                    </div>
                    <div className="bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/10">
                      <p className="text-xs text-primary-foreground/80 mb-1">N-P-K Levels</p>
                      <div className="flex items-end gap-2">
                        <span className="text-2xl font-bold text-white">Balanced</span>
                        <span className="text-xs text-emerald-400 mb-1">✓ Good</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -bottom-10 -left-10 glass p-4 rounded-2xl shadow-lg animate-bounce duration-[3000ms]">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-foreground">
                    <Leaf className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Crop Health</p>
                    <p className="font-bold text-foreground">Excellent</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-muted/30 relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">Our Solutions</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6">Comprehensive Intelligence for Modern Agriculture</h3>
            <p className="text-lg text-muted-foreground">
              Leverage cutting-edge technology to optimize every aspect of your farming operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Sprout,
                title: "AI Crop Prediction",
                desc: "Advanced algorithms analyze historical data and current conditions to recommend the most profitable crops."
              },
              {
                icon: Leaf,
                title: "Soil & Land Analysis",
                desc: "Deep dive into soil composition, moisture levels, and nutrient requirements for optimal growth."
              },
              {
                icon: BarChart3,
                title: "Yield Forecasting",
                desc: "Predict harvest outcomes with high precision using predictive modeling and weather patterns."
              },
              {
                icon: Scan,
                title: "Drone Surveillance",
                desc: "Integrate drone imagery for real-time field monitoring, pest detection, and health assessment."
              },
              {
                icon: Droplets,
                title: "Smart Irrigation",
                desc: "Automated water management systems that optimize usage based on real-time soil moisture data."
              },
              {
                icon: Factory,
                title: "Marketplace & Investment",
                desc: "Connect with investors and access a global marketplace for agricultural products and land."
              }
            ].map((feature, index) => (
              <Card key={index} className="group hover:shadow-strong transition-all duration-500 border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
                <CardHeader>
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="mt-6 text-xl font-display">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </CardContent>
                <div className="h-1 w-0 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500 ease-out" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-4xl font-bold font-display text-foreground mb-6">From Data to Decision in Three Steps</h2>
              <p className="text-lg text-muted-foreground mb-12">
                Our platform simplifies complex agricultural data into actionable insights.
              </p>

              <div className="space-y-12">
                {[
                  { step: "01", title: "Connect & Collect", desc: "Upload soil data, connect IoT sensors, or input farm details manually." },
                  { step: "02", title: "Analyze & Process", desc: "Our AI engine processes millions of data points to identify patterns and opportunities." },
                  { step: "03", title: "Act & Optimize", desc: "Receive tailored recommendations and execute strategies to maximize yield." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="text-4xl font-bold text-muted-foreground/20 group-hover:text-primary transition-colors font-display">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-gradient-accent opacity-20 blur-3xl rounded-full" />
              <img
                src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=1000&auto=format&fit=crop"
                alt="Smart Farming Drone"
                className="relative rounded-2xl shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Trust */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Active Farmers", value: "10,000+" },
              { label: "Acres Analyzed", value: "2M+" },
              { label: "Data Points", value: "500M+" },
              { label: "Countries Served", value: "15+" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-bold font-display mb-2">{stat.value}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-muted/30">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto bg-card rounded-3xl p-12 shadow-xl border border-border">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-6">Ready to Transform Your Farm?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Join thousands of modern farmers using TerraCrop to build a sustainable and profitable future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/analyze">
                <Button className="h-12 px-8 text-lg rounded-xl bg-primary hover:bg-primary/90">Get Started Now</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="h-12 px-8 text-lg rounded-xl">Contact Sales</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Sprout className="text-white h-5 w-5" />
                </div>
                <h2 className="font-display font-bold text-xl">TerraCrop</h2>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Empowering agriculture with artificial intelligence and data-driven insights for a sustainable future.
              </p>
            </div>

            {[
              { header: "Platform", links: ["Features", "Pricing", "Enterprise", "Case Studies"] },
              { header: "Company", links: ["About Us", "Careers", "Blog", "Contact"] },
              { header: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookie Policy"] }
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-bold text-foreground mb-6">{col.header}</h4>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  {col.links.map((link, j) => (
                    <li key={j}><a href="#" className="hover:text-primary transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} TerraCrop Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
              <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
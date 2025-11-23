import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Sprout, Leaf, BarChart3, Factory } from "lucide-react";

export default function HomePage() {
  return (
    <div className="font-inter text-foreground">
      {/* Navbar */}
      <nav className="w-full border-b bg-background/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto h-16 flex items-center justify-between px-6">
          <h2 className="font-bold text-2xl text-primary">TerraCrop</h2>
          <div className="flex items-center gap-6 text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition">Features</a>
            <a href="#about" className="hover:text-foreground transition">About</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full py-28 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight font-poppins text-foreground">
            AI-Powered Agriculture, Made Simple
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            TerraCrop helps farmers and investors make smarter decisions with AI-driven land analysis,
            crop recommendations, and real-time insights.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button className="px-8 py-6 text-lg rounded-xl shadow-glow hover:shadow-strong transition-all duration-300">Start Analysis</Button>
            <Button variant="outline" className="px-8 py-6 text-lg rounded-xl hover:bg-muted">Explore Platform</Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center font-poppins text-foreground">Platform Features</h2>
          <p className="text-center text-muted-foreground mt-4 max-w-xl mx-auto">
            Powerful tools to help you maximize agricultural productivity and profitability.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            {/* Feature Card 1 */}
            <Card className="hover:shadow-medium transition-all duration-300 border-border bg-card">
              <CardHeader>
                <Sprout className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">AI Crop Prediction</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Get smart, data-backed recommendations for profitable crop choices.
              </CardContent>
            </Card>

            {/* Feature Card 2 */}
            <Card className="hover:shadow-medium transition-all duration-300 border-border bg-card">
              <CardHeader>
                <Leaf className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">Soil & Land Insights</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Analyze soil quality, climate suitability, and water requirements.
              </CardContent>
            </Card>

            {/* Feature Card 3 */}
            <Card className="hover:shadow-medium transition-all duration-300 border-border bg-card">
              <CardHeader>
                <BarChart3 className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">Smart Yield Forecasts</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Predict future crop output using AI models and market conditions.
              </CardContent>
            </Card>

            {/* Feature Card 4 */}
            <Card className="hover:shadow-medium transition-all duration-300 border-border bg-card">
              <CardHeader>
                <Factory className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">Agri Investment Insights</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Discover profitable farmland investment opportunities and risk scores.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center font-poppins text-foreground">About TerraCrop</h2>
          <p className="mt-6 text-lg max-w-3xl mx-auto text-center text-muted-foreground">
            TerraCrop is an AI-powered platform transforming the agricultural landscape by providing
            farmers and investors with accurate, real-time insights. Our mission is to empower decision-making
            through advanced analytics, sustainability-focused tools, and highly accessible technology.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold font-poppins text-foreground">Get in Touch</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Have questions or need support? Our team is here to help.
          </p>
          <Button className="mt-8 px-10 py-6 text-lg rounded-xl shadow-glow hover:shadow-strong transition-all duration-300">Contact Us</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-border bg-muted text-center">
        <p className="text-muted-foreground">© {new Date().getFullYear()} TerraCrop. All rights reserved.</p>
      </footer>
    </div>
  );
}
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Target, Users, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Leveraging cutting-edge artificial intelligence and machine learning to provide accurate, data-driven agricultural insights.",
    },
    {
      icon: Target,
      title: "Precision Agriculture",
      description: "Helping farmers make informed decisions through precise land analysis, crop recommendations, and market intelligence.",
    },
    {
      icon: Users,
      title: "Farmer-Centric Approach",
      description: "Designed with farmers and investors in mind, making complex agricultural data accessible and actionable.",
    },
    {
      icon: Zap,
      title: "Sustainable Growth",
      description: "Promoting sustainable farming practices while maximizing economic returns for agricultural stakeholders.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
          <div className="container mx-auto max-w-4xl text-center space-y-6">
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-foreground">
              About <span className="text-primary">TerraCrop</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Empowering farmers and investors with intelligent agricultural solutions through the power of AI and data analytics.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <Card className="border-border shadow-strong bg-gradient-card">
              <CardContent className="p-8 sm:p-12">
                <div className="max-w-3xl mx-auto space-y-6">
                  <h2 className="font-display text-3xl font-bold text-foreground text-center">
                    Our Mission
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed text-center">
                    TerraCrop was founded with a singular vision: to bridge the gap between traditional agriculture and modern technology. We believe that every farmer and investor deserves access to sophisticated agricultural intelligence that was once available only to large corporations.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed text-center">
                    By combining satellite imagery, soil science, climate data, and market analytics with advanced AI algorithms, we're democratizing agricultural decision-making and helping stakeholders maximize their returns while promoting sustainable farming practices.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-4 mb-12">
              <h2 className="font-display text-4xl font-bold text-foreground">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide our mission to transform agriculture
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="border-border shadow-medium hover:shadow-strong transition-all bg-gradient-card">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-gradient-accent p-3 shadow-soft">
                        <value.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="space-y-2 flex-1">
                        <h3 className="font-display text-xl font-semibold text-foreground">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-4 mb-12">
              <h2 className="font-display text-4xl font-bold text-foreground">
                Powered by Advanced Technology
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our platform integrates multiple data sources and cutting-edge AI to deliver actionable insights
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-border bg-gradient-card shadow-medium">
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    Satellite & GIS Data
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Real-time satellite imagery and geographic information systems for precise land analysis.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-gradient-card shadow-medium">
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    Machine Learning
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Advanced algorithms that learn from millions of data points to provide accurate predictions.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-gradient-card shadow-medium">
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    Market Intelligence
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Live market data integration for ROI calculations and crop profitability analysis.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-accent">
          <div className="container mx-auto max-w-4xl text-center space-y-6">
            <h2 className="font-display text-4xl font-bold text-primary-foreground">
              Join Our Mission
            </h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              We're a team of agricultural scientists, data engineers, and AI specialists passionate about revolutionizing agriculture. Together, we're building the future of farming.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;

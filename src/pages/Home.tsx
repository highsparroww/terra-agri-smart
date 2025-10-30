import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  TrendingUp, 
  Search, 
  FileText, 
  Users, 
  Sprout,
  BarChart3,
  Shield
} from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import StatCard from "@/components/StatCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  const features = [
    {
      icon: MapPin,
      title: "Land Suitability Detection",
      description: "AI-powered analysis of soil, climate, and terrain to identify the best crops for your land.",
    },
    {
      icon: TrendingUp,
      title: "Crop ROI Recommendations",
      description: "Get data-driven insights on the most profitable crops based on market trends and yield predictions.",
    },
    {
      icon: Search,
      title: "Investment Opportunities",
      description: "Discover available agricultural land with detailed analysis for smart investment decisions.",
    },
    {
      icon: FileText,
      title: "Government Policy Hub",
      description: "Access all agricultural schemes, subsidies, and policies in one comprehensive dashboard.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sprout className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Agricultural Intelligence</span>
            </div>
            
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Cultivating Intelligence,
              <br />
              <span className="text-primary">Growing Prosperity</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              TerraCrop empowers farmers and investors with data-driven insights for smarter agricultural decisions. Analyze land, discover opportunities, and maximize returns.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/analyze">
                <Button size="lg" className="gap-2 shadow-medium hover:shadow-glow transition-all duration-300">
                  <MapPin className="h-5 w-5" />
                  Analyze Your Land
                </Button>
              </Link>
              <Link to="/invest">
                <Button size="lg" variant="outline" className="gap-2">
                  <Search className="h-5 w-5" />
                  Explore Investments
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              icon={Users}
              value="50K+"
              label="Active Farmers"
              trend="↑ 23% this month"
            />
            <StatCard
              icon={BarChart3}
              value="2.3M"
              label="Acres Analyzed"
              trend="↑ 45% this quarter"
            />
            <StatCard
              icon={TrendingUp}
              value="$850M"
              label="Investment Value"
              trend="↑ 18% this year"
            />
            <StatCard
              icon={Shield}
              value="150+"
              label="Government Schemes"
              trend="Updated daily"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
              Powerful Features for Modern Agriculture
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Leverage cutting-edge AI and data analytics to make informed decisions about your agricultural investments and operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-accent">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-display text-4xl font-bold text-primary-foreground">
              Ready to Transform Your Agricultural Journey?
            </h2>
            <p className="text-lg text-primary-foreground/90">
              Join thousands of farmers and investors making smarter decisions with TerraCrop's AI-powered insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/analyze">
                <Button size="lg" variant="secondary" className="gap-2 shadow-medium">
                  Get Started Free
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="gap-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

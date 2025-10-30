import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, ExternalLink, Search, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Policies = () => {
  const [filters, setFilters] = useState({
    state: "",
    category: "",
    cropType: "",
    searchTerm: "",
  });

  const policies = [
    {
      id: 1,
      title: "PM-KISAN Scheme",
      category: "Subsidy",
      state: "All India",
      description: "Direct income support of ₹6,000 per year to all farmer families with cultivable land.",
      eligibility: "Small and marginal farmers",
      benefits: "₹6,000/year in 3 installments",
      link: "https://pmkisan.gov.in/",
      status: "Active",
    },
    {
      id: 2,
      title: "Pradhan Mantri Fasal Bima Yojana",
      category: "Insurance",
      state: "All India",
      description: "Comprehensive crop insurance covering pre-sowing to post-harvest losses.",
      eligibility: "All farmers",
      benefits: "Up to 90% premium subsidy",
      link: "https://pmfby.gov.in/",
      status: "Active",
    },
    {
      id: 3,
      title: "Kisan Credit Card Scheme",
      category: "Loan",
      state: "All India",
      description: "Short-term credit for agriculture and allied activities at subsidized interest rates.",
      eligibility: "Farmers with land holdings",
      benefits: "Credit up to ₹3 lakhs at 4% interest",
      link: "https://www.india.gov.in/",
      status: "Active",
    },
    {
      id: 4,
      title: "National Agriculture Market (e-NAM)",
      category: "Marketing",
      state: "All India",
      description: "Online trading platform for agricultural commodities at transparent prices.",
      eligibility: "All farmers",
      benefits: "Better price discovery, reduced intermediaries",
      link: "https://www.enam.gov.in/",
      status: "Active",
    },
    {
      id: 5,
      title: "Soil Health Card Scheme",
      category: "Support",
      state: "All India",
      description: "Free soil testing and health cards with fertilizer recommendations.",
      eligibility: "All farmers",
      benefits: "Free soil testing, nutrient management advice",
      link: "https://soilhealth.dac.gov.in/",
      status: "Active",
    },
    {
      id: 6,
      title: "Paramparagat Krishi Vikas Yojana",
      category: "Organic Farming",
      state: "All India",
      description: "Promotion of organic farming through cluster approach and PGS certification.",
      eligibility: "Farmers adopting organic practices",
      benefits: "₹50,000/hectare for 3 years",
      link: "https://www.india.gov.in/",
      status: "Active",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-4 mb-12">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
              Government Policies & Schemes
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive database of active agricultural schemes, subsidies, and policies to support your farming operations.
            </p>
          </div>

          {/* Filters */}
          <Card className="mb-8 border-border shadow-medium">
            <CardHeader>
              <CardTitle className="font-display flex items-center gap-2">
                <Filter className="h-5 w-5 text-primary" />
                Filter Policies
              </CardTitle>
              <CardDescription>
                Find relevant schemes based on your requirements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label>State</Label>
                  <Select value={filters.state} onValueChange={(value) => setFilters({ ...filters, state: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All India</SelectItem>
                      <SelectItem value="punjab">Punjab</SelectItem>
                      <SelectItem value="maharashtra">Maharashtra</SelectItem>
                      <SelectItem value="karnataka">Karnataka</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Category</Label>
                  <Select value={filters.category} onValueChange={(value) => setFilters({ ...filters, category: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="subsidy">Subsidy</SelectItem>
                      <SelectItem value="insurance">Insurance</SelectItem>
                      <SelectItem value="loan">Loan</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Crop Type</Label>
                  <Select value={filters.cropType} onValueChange={(value) => setFilters({ ...filters, cropType: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select crop" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Crops</SelectItem>
                      <SelectItem value="wheat">Wheat</SelectItem>
                      <SelectItem value="rice">Rice</SelectItem>
                      <SelectItem value="cotton">Cotton</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Search</Label>
                  <Input
                    placeholder="Search schemes..."
                    value={filters.searchTerm}
                    onChange={(e) => setFilters({ ...filters, searchTerm: e.target.value })}
                  />
                </div>
              </div>

              <Button className="mt-4 w-full md:w-auto gap-2">
                <Search className="h-4 w-4" />
                Apply Filters
              </Button>
            </CardContent>
          </Card>

          {/* Policy Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {policies.map((policy) => (
              <Card key={policy.id} className="border-border shadow-medium hover:shadow-strong transition-all bg-gradient-card">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <FileText className="h-5 w-5 text-primary flex-shrink-0" />
                        <CardTitle className="font-display text-lg">
                          {policy.title}
                        </CardTitle>
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        <Badge className="bg-primary/10 text-primary border-primary/20">
                          {policy.category}
                        </Badge>
                        <Badge variant="secondary">{policy.state}</Badge>
                        <Badge className="bg-accent/10 text-accent border-accent/20">
                          {policy.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {policy.description}
                  </p>

                  <div className="space-y-3 p-4 rounded-lg bg-muted/30">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-1">
                        Eligibility
                      </p>
                      <p className="text-sm text-foreground">{policy.eligibility}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-1">
                        Key Benefits
                      </p>
                      <p className="text-sm font-medium text-primary">{policy.benefits}</p>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full gap-2" asChild>
                    <a href={policy.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Visit Official Portal
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Info Section */}
          <Card className="mt-8 border-primary/20 bg-gradient-accent">
            <CardContent className="p-6 text-center">
              <p className="text-primary-foreground font-medium">
                Can't find what you're looking for? Our AgriBot assistant can help you discover relevant schemes and policies.
              </p>
              <Button variant="secondary" className="mt-4" asChild>
                <a href="/contact">Ask AgriBot</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Policies;

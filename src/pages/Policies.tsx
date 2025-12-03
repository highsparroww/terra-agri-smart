import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, ExternalLink, Search, Filter, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { api } from "@/lib/api";
import { toast } from "sonner";

interface Policy {
  id: number;
  title: string;
  category: string;
  description: string;
  eligibility: string;
  deadline?: string;
  link?: string;
  // UI specific fields (derived or defaulted)
  state?: string;
  benefits?: string;
  status?: string;
}

const Policies = () => {
  const [policies, setPolicies] = useState<Policy[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    state: "",
    category: "",
    cropType: "",
    searchTerm: "",
  });

  useEffect(() => {
    const fetchPolicies = async () => {
      try {
        const data = await api.getPolicies();
        // Map API data to UI format and add defaults for missing fields
        const mappedPolicies = data.map((item: any) => ({
          ...item,
          state: "All India", // Default
          benefits: "Financial Aid / Support", // Default
          status: "Active", // Default
        }));
        setPolicies(mappedPolicies);
      } catch (error) {
        toast.error("Failed to load policies");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPolicies();
  }, []);

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
          {loading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {policies.filter(policy => {
                const stateMatch = !filters.state || filters.state === "all" || policy.state?.toLowerCase().includes(filters.state.toLowerCase()) || policy.state === "All India";
                const categoryMatch = !filters.category || policy.category.toLowerCase() === filters.category.toLowerCase();
                // Crop type logic: if filter is set, check if policy description or title mentions it, or if it applies to all crops
                const cropMatch = !filters.cropType || filters.cropType === "all" ||
                  policy.description.toLowerCase().includes(filters.cropType.toLowerCase()) ||
                  policy.title.toLowerCase().includes(filters.cropType.toLowerCase()) ||
                  policy.eligibility.toLowerCase().includes("all farmers");

                const searchMatch = !filters.searchTerm ||
                  policy.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
                  policy.description.toLowerCase().includes(filters.searchTerm.toLowerCase());

                return stateMatch && categoryMatch && cropMatch && searchMatch;
              }).map((policy) => (
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
              {policies.filter(policy => {
                const stateMatch = !filters.state || filters.state === "all" || policy.state?.toLowerCase().includes(filters.state.toLowerCase()) || policy.state === "All India";
                const categoryMatch = !filters.category || policy.category.toLowerCase() === filters.category.toLowerCase();
                const cropMatch = !filters.cropType || filters.cropType === "all" ||
                  policy.description.toLowerCase().includes(filters.cropType.toLowerCase()) ||
                  policy.title.toLowerCase().includes(filters.cropType.toLowerCase()) ||
                  policy.eligibility.toLowerCase().includes("all farmers");
                const searchMatch = !filters.searchTerm ||
                  policy.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
                  policy.description.toLowerCase().includes(filters.searchTerm.toLowerCase());
                return stateMatch && categoryMatch && cropMatch && searchMatch;
              }).length === 0 && (
                  <div className="col-span-1 lg:col-span-2 text-center py-12">
                    <p className="text-muted-foreground text-lg">No policies found matching your criteria.</p>
                    <Button
                      variant="link"
                      onClick={() => setFilters({ state: "", category: "", cropType: "", searchTerm: "" })}
                      className="mt-2"
                    >
                      Clear Filters
                    </Button>
                  </div>
                )}
            </div>
          )}

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


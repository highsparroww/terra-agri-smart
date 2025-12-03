import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, TrendingUp, Droplets, DollarSign, Search, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { api } from "@/lib/api";

interface Listing {
  id: number;
  location: string;
  price: number;
  area: number;
  soilType: string;
  description: string;
  imageUrl: string;
  // UI specific fields (derived or defaulted)
  waterSource?: string;
  roi?: string;
  bestFor?: string[];
  verified?: boolean;
}

const Invest = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    region: "",
    soilType: "",
    minArea: "",
    maxPrice: "",
  });

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const data = await api.getListings();
        // Map API data to UI format and add defaults for missing fields
        const mappedListings = data.map((item: any) => ({
          ...item,
          waterSource: "Borewell / Canal", // Default
          roi: "15-20% annually", // Default
          bestFor: ["Wheat", "Rice", "Pulses"], // Default
          verified: true, // Default
        }));
        setListings(mappedListings);
      } catch (error) {
        toast.error("Failed to load investment opportunities");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-4 mb-12">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
              Investment Opportunities
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover verified agricultural land with high ROI potential. Filter by location, soil type, and investment range.
            </p>
          </div>

          {/* Filters */}
          <Card className="mb-8 border-border shadow-medium">
            <CardHeader>
              <CardTitle className="font-display flex items-center gap-2">
                <Search className="h-5 w-5 text-primary" />
                Filter Opportunities
              </CardTitle>
              <CardDescription>
                Refine your search based on your investment criteria
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label>Region</Label>
                  <Select value={filters.region} onValueChange={(value) => setFilters({ ...filters, region: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="punjab">Punjab</SelectItem>
                      <SelectItem value="maharashtra">Maharashtra</SelectItem>
                      <SelectItem value="karnataka">Karnataka</SelectItem>
                      <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Soil Type</Label>
                  <Select value={filters.soilType} onValueChange={(value) => setFilters({ ...filters, soilType: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select soil type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="loamy">Loamy Soil</SelectItem>
                      <SelectItem value="black">Black Soil</SelectItem>
                      <SelectItem value="red">Red Soil</SelectItem>
                      <SelectItem value="laterite">Laterite Soil</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Min Area (acres)</Label>
                  <Input
                    type="number"
                    placeholder="e.g., 5"
                    value={filters.minArea}
                    onChange={(e) => setFilters({ ...filters, minArea: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Max Price (₹)</Label>
                  <Input
                    type="number"
                    placeholder="e.g., 50,00,000"
                    value={filters.maxPrice}
                    onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                  />
                </div>
              </div>

              <Button className="mt-4 w-full md:w-auto gap-2">
                <Search className="h-4 w-4" />
                Apply Filters
              </Button>
            </CardContent>
          </Card>

          {/* Investment Cards */}
          {loading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {listings.filter(opportunity => {
                const regionMatch = !filters.region || opportunity.location.toLowerCase().includes(filters.region.toLowerCase());
                const soilMatch = !filters.soilType || opportunity.soilType.toLowerCase().includes(filters.soilType.toLowerCase());
                const minAreaMatch = !filters.minArea || opportunity.area >= parseFloat(filters.minArea);
                const maxPriceMatch = !filters.maxPrice || opportunity.price <= parseInt(filters.maxPrice);

                return regionMatch && soilMatch && minAreaMatch && maxPriceMatch;
              }).map((opportunity) => (
                <Card key={opportunity.id} className="border-border shadow-medium hover:shadow-strong transition-all bg-gradient-card">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-1 flex-1">
                        <div className="flex items-center gap-2">
                          <CardTitle className="font-display text-xl">
                            {opportunity.location}
                          </CardTitle>
                          {opportunity.verified && (
                            <Badge className="bg-primary/10 text-primary border-primary/20">
                              Verified
                            </Badge>
                          )}
                        </div>
                        <CardDescription className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {opportunity.area} acres
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Soil Type</p>
                        <p className="text-sm font-medium text-foreground flex items-center gap-2">
                          <Droplets className="h-4 w-4 text-primary" />
                          {opportunity.soilType}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Water Source</p>
                        <p className="text-sm font-medium text-foreground">
                          {opportunity.waterSource}
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Investment</p>
                          <p className="font-display text-lg font-bold text-foreground flex items-center gap-2">
                            <DollarSign className="h-5 w-5 text-primary" />
                            {formatPrice(opportunity.price)}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Expected ROI</p>
                          <p className="font-display text-lg font-bold text-primary flex items-center gap-2">
                            <TrendingUp className="h-5 w-5" />
                            {opportunity.roi}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground mb-2">Best Suited For</p>
                      <div className="flex flex-wrap gap-2">
                        {opportunity.bestFor?.map((crop, index) => (
                          <Badge key={index} variant="secondary">
                            {crop}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button className="flex-1" onClick={() => toast.info("Viewing details for " + opportunity.location)}>View Details</Button>
                      <Button
                        variant="outline"
                        className="flex-1"
                        onClick={async () => {
                          try {
                            await api.contactSeller("Interested in " + opportunity.location, opportunity);
                            toast.success("Seller contact details sent to your email!");
                          } catch (e) {
                            toast.error("Failed to contact seller");
                          }
                        }}
                      >
                        Contact Seller
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
              {listings.filter(opportunity => {
                const regionMatch = !filters.region || opportunity.location.toLowerCase().includes(filters.region.toLowerCase());
                const soilMatch = !filters.soilType || opportunity.soilType.toLowerCase().includes(filters.soilType.toLowerCase());
                const minAreaMatch = !filters.minArea || opportunity.area >= parseFloat(filters.minArea);
                const maxPriceMatch = !filters.maxPrice || opportunity.price <= parseInt(filters.maxPrice);
                return regionMatch && soilMatch && minAreaMatch && maxPriceMatch;
              }).length === 0 && (
                  <div className="col-span-1 lg:col-span-2 text-center py-12">
                    <p className="text-muted-foreground text-lg">No investment opportunities found matching your criteria.</p>
                    <Button
                      variant="link"
                      onClick={() => setFilters({ region: "", soilType: "", minArea: "", maxPrice: "" })}
                      className="mt-2"
                    >
                      Clear Filters
                    </Button>
                  </div>
                )}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Invest;


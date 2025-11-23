import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { MapPin, TrendingUp, Droplets, ThermometerSun, Sprout, RotateCcw } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { api } from "@/lib/api";

const Analyze = () => {
  const [coordinates, setCoordinates] = useState({ lat: "", lng: "" });
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleAnalyze = async () => {
    if (!coordinates.lat || !coordinates.lng) {
      toast.error("Please enter valid coordinates");
      return;
    }

    const lat = parseFloat(coordinates.lat);
    const lng = parseFloat(coordinates.lng);

    if (isNaN(lat) || lat < -90 || lat > 90) {
      toast.error("Latitude must be between -90 and 90");
      return;
    }

    if (isNaN(lng) || lng < -180 || lng > 180) {
      toast.error("Longitude must be between -180 and 180");
      return;
    }

    setAnalyzing(true);

    try {
      const data = await api.analyze(coordinates.lat, coordinates.lng);
      setResults(data);
      toast.success("Analysis complete!");
    } catch (error) {
      toast.error("Failed to analyze land. Please try again.");
    } finally {
      setAnalyzing(false);
    }
  };

  const handleReset = () => {
    setResults(null);
    setCoordinates({ lat: "", lng: "" });
    toast.info("Analysis reset");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
              Land Suitability Analysis
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get AI-powered insights about your land's potential with detailed crop recommendations and ROI projections.
            </p>
          </div>

          {/* Input Section */}
          <Card className="mb-8 border-border shadow-medium">
            <CardHeader>
              <CardTitle className="font-display">Enter Land Coordinates</CardTitle>
              <CardDescription>
                Provide the latitude and longitude of your land for detailed analysis
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="latitude">Latitude</Label>
                  <Input
                    id="latitude"
                    type="number"
                    placeholder="e.g., 28.7041"
                    value={coordinates.lat}
                    onChange={(e) => setCoordinates({ ...coordinates, lat: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="longitude">Longitude</Label>
                  <Input
                    id="longitude"
                    type="number"
                    placeholder="e.g., 77.1025"
                    value={coordinates.lng}
                    onChange={(e) => setCoordinates({ ...coordinates, lng: e.target.value })}
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={handleAnalyze}
                  disabled={analyzing}
                  className="flex-1 gap-2"
                  size="lg"
                >
                  <MapPin className="h-5 w-5" />
                  {analyzing ? "Analyzing..." : "Analyze Land"}
                </Button>
                {results && (
                  <Button
                    onClick={handleReset}
                    variant="outline"
                    size="lg"
                    className="gap-2"
                  >
                    <RotateCcw className="h-5 w-5" />
                    Reset
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Results Section */}
          {results && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Environmental Factors */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="border-border bg-gradient-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-primary/10 p-3">
                        <Sprout className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Soil Type</p>
                        <p className="font-display font-semibold text-foreground">{results.soilType}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border bg-gradient-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-primary/10 p-3">
                        <Droplets className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Moisture</p>
                        <p className="font-display font-semibold text-foreground">{results.moisture}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border bg-gradient-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-primary/10 p-3">
                        <ThermometerSun className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Temperature</p>
                        <p className="font-display font-semibold text-foreground">{results.temperature}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border bg-gradient-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-primary/10 p-3">
                        <Droplets className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Rainfall</p>
                        <p className="font-display font-semibold text-foreground">{results.rainfall}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Crop Recommendations */}
              <Card className="border-border shadow-medium">
                <CardHeader>
                  <CardTitle className="font-display flex items-center gap-2">
                    <TrendingUp className="h-6 w-6 text-primary" />
                    Top Crop Recommendations
                  </CardTitle>
                  <CardDescription>
                    Based on soil analysis, climate data, and market trends
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {results.recommendations.map((rec: any, index: number) => (
                      <Card key={index} className="border-border bg-gradient-card hover:shadow-soft transition-all">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="space-y-2 flex-1">
                              <div className="flex items-center gap-3">
                                <h3 className="font-display text-xl font-semibold text-foreground">
                                  {rec.crop}
                                </h3>
                                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10">
                                  <span className="text-sm font-medium text-primary">
                                    {rec.suitability}% Match
                                  </span>
                                </div>
                              </div>
                              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                                <div>
                                  <p className="text-xs text-muted-foreground">Expected Yield</p>
                                  <p className="text-sm font-medium text-foreground">{rec.expectedYield}</p>
                                </div>
                                <div>
                                  <p className="text-xs text-muted-foreground">Est. ROI</p>
                                  <p className="text-sm font-medium text-primary">{rec.roi}</p>
                                </div>
                                <div>
                                  <p className="text-xs text-muted-foreground">Best Season</p>
                                  <p className="text-sm font-medium text-foreground">{rec.season}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Analyze;

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Clock } from "lucide-react";

const Careers = () => {
    const jobs = [
        {
            title: "Senior Full Stack Engineer",
            department: "Engineering",
            location: "Remote / Bangalore",
            type: "Full-time",
        },
        {
            title: "Agricultural Data Scientist",
            department: "Data Science",
            location: "Hybrid / Pune",
            type: "Full-time",
        },
        {
            title: "Product Designer",
            department: "Design",
            location: "Remote",
            type: "Full-time",
        },
        {
            title: "Customer Success Manager",
            department: "Sales",
            location: "Mumbai",
            type: "Full-time",
        },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-display font-bold text-foreground mb-4">Join Our Mission</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Help us revolutionize agriculture with technology. We're looking for passionate individuals to build the future of farming.
                        </p>
                    </div>

                    <div className="grid gap-6 max-w-4xl mx-auto">
                        {jobs.map((job) => (
                            <div key={job.title} className="bg-card border border-border rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:shadow-md transition-shadow">
                                <div>
                                    <h3 className="text-xl font-bold text-foreground mb-2">{job.title}</h3>
                                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                        <span className="bg-primary/10 text-primary px-2 py-1 rounded">{job.department}</span>
                                        <div className="flex items-center gap-1">
                                            <MapPin className="h-4 w-4" />
                                            {job.location}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="h-4 w-4" />
                                            {job.type}
                                        </div>
                                    </div>
                                </div>
                                <Button variant="outline">Apply Now</Button>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Careers;

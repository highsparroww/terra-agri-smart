import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, User } from "lucide-react";

const Blog = () => {
    const posts = [
        {
            title: "The Future of Smart Farming in India",
            excerpt: "How IoT and AI are transforming the agricultural landscape for smallholder farmers.",
            author: "Dr. Aditi Sharma",
            date: "Nov 15, 2025",
            image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop",
        },
        {
            title: "Sustainable Soil Management Practices",
            excerpt: "Top 5 techniques to improve soil health and increase crop yield naturally.",
            author: "Rajesh Kumar",
            date: "Nov 10, 2025",
            image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop",
        },
        {
            title: "Understanding Government Subsidies 2025",
            excerpt: "A comprehensive guide to the latest agricultural schemes and how to apply.",
            author: "Priya Singh",
            date: "Nov 05, 2025",
            image: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=1000&auto=format&fit=crop",
        },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-display font-bold text-foreground mb-4">TerraCrop Blog</h1>
                        <p className="text-xl text-muted-foreground">Insights, updates, and stories from the world of agri-tech.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <article key={post.title} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-3 w-3" />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <User className="h-3 w-3" />
                                            {post.author}
                                        </div>
                                    </div>
                                    <h2 className="text-xl font-bold text-foreground mb-2 hover:text-primary cursor-pointer">{post.title}</h2>
                                    <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                                    <a href="#" className="text-primary font-medium text-sm hover:underline">Read More →</a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Blog;

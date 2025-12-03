import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLocation } from "react-router-dom";

const Legal = () => {
    const location = useLocation();
    const path = location.pathname;

    let title = "Legal";
    let content = <p>Content not found.</p>;

    if (path === "/privacy") {
        title = "Privacy Policy";
        content = (
            <div className="space-y-6 text-muted-foreground">
                <p>Last updated: November 24, 2025</p>
                <p>At TerraCrop, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
                <h3 className="text-xl font-bold text-foreground">1. Information We Collect</h3>
                <p>We collect information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website or otherwise when you contact us.</p>
                <h3 className="text-xl font-bold text-foreground">2. Use of Your Information</h3>
                <p>We use the information we collect or receive:
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>To facilitate account creation and logon process.</li>
                        <li>To send you marketing and promotional communications.</li>
                        <li>To send administrative information to you.</li>
                    </ul>
                </p>
            </div>
        );
    } else if (path === "/terms") {
        title = "Terms of Service";
        content = (
            <div className="space-y-6 text-muted-foreground">
                <p>Last updated: November 24, 2025</p>
                <h3 className="text-xl font-bold text-foreground">1. Agreement to Terms</h3>
                <p>These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and TerraCrop ("we," "us" or "our"), concerning your access to and use of the TerraCrop website.</p>
                <h3 className="text-xl font-bold text-foreground">2. Intellectual Property Rights</h3>
                <p>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us.</p>
            </div>
        );
    } else if (path === "/cookies") {
        title = "Cookie Policy";
        content = (
            <div className="space-y-6 text-muted-foreground">
                <p>Last updated: November 24, 2025</p>
                <h3 className="text-xl font-bold text-foreground">1. What are cookies?</h3>
                <p>Cookies are simple text files that are stored on your computer or mobile device by a website's server. Each cookie is unique to your web browser. It will contain some anonymous information such as a unique identifier, website's domain name, and some digits and numbers.</p>
                <h3 className="text-xl font-bold text-foreground">2. How do we use cookies?</h3>
                <p>We use cookies to:
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Make our website work as you'd expect.</li>
                        <li>Remember your settings during and between visits.</li>
                        <li>Improve the speed/security of the site.</li>
                        <li>Allow you to share pages with social networks like Facebook.</li>
                    </ul>
                </p>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-display font-bold text-foreground mb-8">{title}</h1>
                    <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
                        {content}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Legal;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageSquare, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<Array<{ role: string; message: string }>>([
    { role: "bot", message: "Hello! I'm AgriBot, your agricultural assistant. How can I help you today?" },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    setChatHistory([
      ...chatHistory,
      { role: "user", message: chatMessage },
      { 
        role: "bot", 
        message: "Thank you for your question! Our AI-powered system is processing your inquiry. For complex questions, please use the contact form or connect with our support team." 
      },
    ]);
    setChatMessage("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-4 mb-12">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions? Our team and AgriBot are here to help. Reach out to us or chat with our AI assistant.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-border shadow-medium bg-gradient-card">
                <CardHeader>
                  <CardTitle className="font-display">Contact Information</CardTitle>
                  <CardDescription>
                    Reach out through any of these channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Email</p>
                      <p className="text-sm text-muted-foreground">info@terracrop.com</p>
                      <p className="text-sm text-muted-foreground">support@terracrop.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Phone</p>
                      <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-sm text-muted-foreground">Mon-Fri, 9AM-6PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Address</p>
                      <p className="text-sm text-muted-foreground">
                        Agricultural Innovation Hub
                        <br />
                        Silicon Valley, CA 94025
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* AgriBot Card */}
              <Card className="border-primary/20 bg-gradient-accent shadow-medium">
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary-foreground" />
                    <h3 className="font-display font-semibold text-primary-foreground">
                      Chat with AgriBot
                    </h3>
                  </div>
                  <p className="text-sm text-primary-foreground/90">
                    Get instant answers about crops, policies, and agricultural best practices from our AI assistant.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-border shadow-medium bg-gradient-card">
                <CardHeader>
                  <CardTitle className="font-display">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="How can we help you?"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full gap-2">
                      <Send className="h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* AgriBot Chat Interface */}
              <Card className="mt-6 border-border shadow-medium bg-gradient-card">
                <CardHeader>
                  <CardTitle className="font-display flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    Chat with AgriBot
                  </CardTitle>
                  <CardDescription>
                    Ask questions about crops, soil, policies, or farming techniques
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="h-64 overflow-y-auto space-y-3 p-4 rounded-lg bg-muted/30">
                    {chatHistory.map((chat, index) => (
                      <div
                        key={index}
                        className={`flex ${chat.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] p-3 rounded-lg ${
                            chat.role === "user"
                              ? "bg-primary text-primary-foreground"
                              : "bg-card border border-border"
                          }`}
                        >
                          <p className="text-sm">{chat.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleChatSubmit} className="flex gap-2">
                    <Input
                      placeholder="Type your question..."
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                    />
                    <Button type="submit" size="icon">
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

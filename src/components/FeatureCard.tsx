import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="group hover:shadow-medium transition-all duration-300 border-border bg-gradient-card hover:-translate-y-1">
      <CardContent className="p-6 space-y-4">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-accent shadow-soft group-hover:shadow-glow transition-all duration-300">
          <Icon className="h-6 w-6 text-primary-foreground" />
        </div>
        <h3 className="font-display font-semibold text-lg text-foreground">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;

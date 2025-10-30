import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  trend?: string;
}

const StatCard = ({ icon: Icon, value, label, trend }: StatCardProps) => {
  return (
    <Card className="border-border bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{label}</p>
            <p className="text-3xl font-display font-bold text-foreground">{value}</p>
            {trend && (
              <p className="text-xs text-primary font-medium">{trend}</p>
            )}
          </div>
          <div className="rounded-lg bg-primary/10 p-3">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;

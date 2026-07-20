"use client";

import { useState } from "react";
import { DollarSign, Users, BookOpen, Ticket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function EarningsCalculator() {
  const [followers, setFollowers] = useState(10000);
  const [conversion, setConversion] = useState(2);
  const [guidePrice, setGuidePrice] = useState(19);
  const [trips, setTrips] = useState(1);

  const guideBuyers = Math.round(followers * (conversion / 100));
  const guideRevenue = guideBuyers * guidePrice;
  const tripRevenue = trips * 12 * 150; // approx monthly trip attendees
  const total = guideRevenue + tripRevenue;

  return (
    <Card className="glass-card border-primary/10">
      <CardContent className="p-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" /> Followers / audience size
              </label>
              <Input
                type="number"
                value={followers}
                onChange={(e) => setFollowers(Number(e.target.value))}
                min={0}
                step={1000}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-teal-500" /> Conversion rate (%)
              </label>
              <Input
                type="number"
                value={conversion}
                onChange={(e) => setConversion(Number(e.target.value))}
                min={0}
                max={100}
                step={0.1}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-orange-500" /> Guide price ($)
              </label>
              <Input
                type="number"
                value={guidePrice}
                onChange={(e) => setGuidePrice(Number(e.target.value))}
                min={0}
                step={1}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Ticket className="h-4 w-4 text-primary" /> Group trips / month
              </label>
              <Input
                type="number"
                value={trips}
                onChange={(e) => setTrips(Number(e.target.value))}
                min={0}
                step={1}
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm text-muted-foreground mb-2">Estimated monthly earnings</p>
            <p className="text-5xl font-bold gradient-text mb-6">
              ${total.toLocaleString()}
            </p>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Guide sales</span>
                <span className="font-semibold">${guideRevenue.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Group trip revenue</span>
                <span className="font-semibold">${tripRevenue.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Potential guide buyers</span>
                <span className="font-semibold">{guideBuyers.toLocaleString()}</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-6">
              Estimates are illustrative and depend on audience engagement, niche, and promotion.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

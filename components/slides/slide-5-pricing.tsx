import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function PricingSlide() {
  return (
    <div className="container mx-auto py-8 md:py-12 px-4">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
          Pricing & Features
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Flexible plans for every productivity need
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
        <Card className="shadow-lg border-muted flex flex-col">
          <CardHeader className="p-4 md:p-6">
            <CardTitle className="text-xl md:text-2xl">Free</CardTitle>
            <div className="mt-4 flex items-baseline text-4xl md:text-5xl font-extrabold">
              $0
              <span className="ml-1 text-xl md:text-2xl font-medium text-muted-foreground">
                /mo
              </span>
            </div>
            <CardDescription className="mt-4 md:mt-5 text-sm md:text-base">
              Perfect for getting started with basic productivity tracking.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 md:p-6 flex-grow">
            <ul className="mt-4 md:mt-6 space-y-3 md:space-y-4">
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm md:text-base">Basic focus timer</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm md:text-base">
                  Daily productivity stats
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm md:text-base">
                  Basic virtual companion
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm md:text-base">
                  Limited marketplace access
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm md:text-base">
                  Ad-supported experience
                </span>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="p-4 md:p-6 pt-0 md:pt-0">
            <Button variant="outline" className="w-full text-sm md:text-base">
              Get Started
            </Button>
          </CardFooter>
        </Card>

        <Card className="shadow-lg border-primary relative flex flex-col">
          <div className="absolute -top-3 md:-top-4 left-0 right-0 flex justify-center">
            <Badge className="bg-primary hover:bg-primary text-xs md:text-sm">
              Most Popular
            </Badge>
          </div>
          <CardHeader className="p-4 md:p-6">
            <CardTitle className="text-xl md:text-2xl">Pro</CardTitle>
            <div className="mt-4 flex items-baseline text-4xl md:text-5xl font-extrabold">
              $9.99
              <span className="ml-1 text-xl md:text-2xl font-medium text-muted-foreground">
                /mo
              </span>
            </div>
            <CardDescription className="mt-4 md:mt-5 text-sm md:text-base">
              Enhanced productivity with advanced features and analytics.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 md:p-6 flex-grow">
            <ul className="mt-4 md:mt-6 space-y-3 md:space-y-4">
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm md:text-base">Everything in Free</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm md:text-base">
                  Advanced focus timer with distraction detection
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm md:text-base">
                  Detailed productivity analytics
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm md:text-base">
                  Full marketplace access
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm md:text-base">Ad-free experience</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm md:text-base">
                  Task management with Notion integration
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm md:text-base">
                  Calendar with external integrations
                </span>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="p-4 md:p-6 pt-0 md:pt-0">
            <Button className="w-full text-sm md:text-base">
              Subscribe Now
            </Button>
          </CardFooter>
        </Card>

        <Card className="shadow-lg border-muted flex flex-col">
          <CardHeader className="p-4 md:p-6">
            <CardTitle className="text-xl md:text-2xl">Teams</CardTitle>
            <div className="mt-4 flex items-baseline text-4xl md:text-5xl font-extrabold">
              $19.99
              <span className="ml-1 text-xl md:text-2xl font-medium text-muted-foreground">
                /mo
              </span>
            </div>
            <CardDescription className="mt-4 md:mt-5 text-sm md:text-base">
              Boost team productivity with collaborative features.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 md:p-6 flex-grow">
            <ul className="mt-4 md:mt-6 space-y-3 md:space-y-4">
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm md:text-base">Everything in Pro</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm md:text-base">
                  Team challenges & competitions
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm md:text-base">
                  Team analytics dashboard
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm md:text-base">
                  Shared focus sessions
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm md:text-base">
                  Admin controls & reporting
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm md:text-base">Priority support</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="p-4 md:p-6 pt-0 md:pt-0">
            <Button variant="outline" className="w-full text-sm md:text-base">
              Contact Sales
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <Card className="shadow-lg">
          <CardHeader className="p-4 md:p-6">
            <CardTitle className="text-xl md:text-2xl">Revenue Model</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 md:space-y-6 p-4 md:p-6">
            <div className="space-y-2">
              <h3 className="font-medium text-base md:text-lg">
                Subscription Revenue
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Primary revenue stream through tiered subscription plans
                targeting different user segments.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium text-base md:text-lg">
                In-App Purchases
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Premium characters, themes, and widgets available through our
                dual-currency system.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium text-base md:text-lg">
                Enterprise Solutions
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Custom implementations for organizations with team productivity
                needs.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium text-base md:text-lg">
                Freemium Conversion Strategy
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Free tier designed to showcase core value while encouraging
                upgrade to premium features.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader className="p-4 md:p-6">
            <CardTitle className="text-xl md:text-2xl">
              Market Expansion Strategy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 md:space-y-6 p-4 md:p-6">
            <div className="space-y-2">
              <h3 className="font-medium text-base md:text-lg">
                Phase 1: Initial Launch (Months 1-6)
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Focus on students and young professionals to validate
                product-market fit and refine features based on user feedback.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium text-base md:text-lg">
                Phase 2: Market Expansion (Months 7-12)
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Expand to freelancers and remote workers with market-specific
                pricing and features, leveraging lower CAC.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium text-base md:text-lg">
                Phase 3: Educational Partnerships (Year 2)
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Partner with universities and online learning platforms to reach
                students during exam periods.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium text-base md:text-lg">
                Phase 4: Enterprise Solutions (Year 3+)
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Develop team-focused features and target businesses looking to
                improve employee productivity.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

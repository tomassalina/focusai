"use client";

import { useState } from "react";
import DashboardSlide from "@/components/slides/slide-3-dashboard";
import ProblemSlide from "@/components/slides/slide-1-problem";
import SolutionSlide from "@/components/slides/slide-2-solution";
import MarketSlide from "@/components/slides/slide-4-market";
import PricingSlide from "@/components/slides/slide-5-pricing";
import TeamSlide from "@/components/slides/slide-6-team";
import ThanksSlide from "@/components/slides/slide-7-thanks";
import SlideController from "@/components/slides/slide-controller";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 7;

  const renderCurrentSlide = () => {
    switch (currentSlide) {
      case 1:
        return <ProblemSlide />;
      case 2:
        return <SolutionSlide />;
      case 3:
        return <DashboardSlide />;
      case 4:
        return <MarketSlide />;
      case 5:
        return <PricingSlide />;
      case 6:
        return <TeamSlide />;
      case 7:
        return <ThanksSlide />;
      default:
        return <ProblemSlide />;
    }
  };

  // Determinar si se debe mostrar el encabezado
  const showHeader = currentSlide !== 3;

  return (
    <div className="min-h-screen bg-background">
      {showHeader && (
        <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
          <div className="container h-16 flex flex-col sm:flex-row items-center justify-between gap-4 mx-auto px-4">
            <div className="flex items-center gap-4">
              <span className="text-xl font-bold text-primary">FocusAI</span>
              <span className="text-sm text-muted-foreground hidden md:block">
                Gamified productivity for the digital age
              </span>
            </div>
          </div>
        </header>
      )}

      <main className="flex-1">{renderCurrentSlide()}</main>

      <SlideController
        totalSlides={totalSlides}
        currentSlide={currentSlide}
        onSlideChange={setCurrentSlide}
      />
    </div>
  );
}

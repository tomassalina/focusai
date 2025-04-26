"use client";

import { useState, useEffect, useRef } from "react";
import Dashboard from "@/components/slides/slide-3-dashboard";
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
  const isManualChange = useRef(false);

  // Función para obtener el número de slide desde el hash
  const getSlideFromHash = () => {
    if (typeof window === "undefined") return 1;

    const hash = window.location.hash;
    if (hash.startsWith("#slide-")) {
      const slideNumber = Number.parseInt(hash.replace("#slide-", ""));
      if (
        !isNaN(slideNumber) &&
        slideNumber >= 1 &&
        slideNumber <= totalSlides
      ) {
        return slideNumber;
      }
    }
    return 1; // Slide por defecto si no hay hash válido
  };

  // Inicializar el slide basado en el hash al cargar
  useEffect(() => {
    const initialSlide = getSlideFromHash();
    setCurrentSlide(initialSlide);
  }, []);

  // Escuchar cambios en el hash
  useEffect(() => {
    const handleHashChange = () => {
      const slideFromHash = getSlideFromHash();
      if (slideFromHash !== currentSlide) {
        isManualChange.current = true;
        setCurrentSlide(slideFromHash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [currentSlide, totalSlides]);

  // Manejar cambios de slide desde la interfaz
  const handleSlideChange = (newSlide: number) => {
    setCurrentSlide(newSlide);
    window.location.hash = `slide-${newSlide}`;
  };

  const renderCurrentSlide = () => {
    switch (currentSlide) {
      case 1:
        return <ProblemSlide />;
      case 2:
        return <SolutionSlide />;
      case 3:
        return <Dashboard />;
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
          <div className="container mx-auto flex h-16 items-center justify-between">
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
        onSlideChange={handleSlideChange}
      />
    </div>
  );
}

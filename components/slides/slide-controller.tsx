"use client";

import { useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SlideControllerProps {
  totalSlides: number;
  currentSlide: number;
  onSlideChange: (slideIndex: number) => void;
}

export default function SlideController({
  totalSlides,
  currentSlide,
  onSlideChange,
}: SlideControllerProps) {
  const goToPrevSlide = () => {
    if (currentSlide > 1) {
      onSlideChange(currentSlide - 1);
    }
  };

  const goToNextSlide = () => {
    if (currentSlide < totalSlides) {
      onSlideChange(currentSlide + 1);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevSlide();
      } else if (e.key === "ArrowRight") {
        goToNextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 py-4 bg-gradient-to-t from-black/50 to-transparent backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-center gap-8">
        <Button
          variant="ghost"
          size="icon"
          onClick={goToPrevSlide}
          disabled={currentSlide === 1}
          className="text-white hover:bg-white/20"
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous slide</span>
        </Button>

        <div className="text-white font-medium">
          {currentSlide}/{totalSlides}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={goToNextSlide}
          disabled={currentSlide === totalSlides}
          className="text-white hover:bg-white/20"
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>
    </div>
  );
}

"use client";

import { Trophy, Diamond } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface CurrencyDisplayProps {
  coins: number;
  emeralds: number;
  onAddEmeralds?: () => void;
}

export default function CurrencyDisplay({
  coins,
  emeralds,
  onAddEmeralds,
}: CurrencyDisplayProps) {
  return (
    <div className="flex items-center gap-3">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex items-center gap-1 bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs md:text-base">
              <Trophy className="h-3 w-3 md:h4 md:h-4 text-amber-500" />
              <span className="font-medium">{coins}</span>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Focus Coins - Earned by completing focus sessions</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex items-center gap-1 bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-xs md:text-base">
              <Diamond className="h-3 w-3 md:h4 md:h-4 text-emerald-500" />
              <span className="font-medium">{emeralds}</span>
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 ml-1 hover:bg-emerald-200"
                onClick={onAddEmeralds}
              >
                +
              </Button>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Emeralds - Premium currency for special characters</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

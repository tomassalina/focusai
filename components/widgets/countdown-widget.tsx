"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarIcon, Clock, Edit2 } from "lucide-react";
import {
  format,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from "date-fns";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

interface CountdownWidgetProps {
  compact?: boolean;
}

export default function CountdownWidget({
  compact = false,
}: CountdownWidgetProps) {
  const [targetDate, setTargetDate] = useState<Date>(
    new Date(new Date().setMonth(new Date().getMonth() + 1))
  );
  const [eventName, setEventName] = useState("Project Deadline");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const days = differenceInDays(targetDate, new Date());
      const hours = differenceInHours(targetDate, new Date()) % 24;
      const minutes = differenceInMinutes(targetDate, new Date()) % 60;
      const seconds = differenceInSeconds(targetDate, new Date()) % 60;

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (compact) {
    return (
      <Card className="overflow-hidden">
        <CardContent className="p-4">
          <div className="flex flex-col">
            <div className="text-sm font-medium mb-1">{eventName}</div>
            <div className="text-xl font-bold">
              {timeLeft.days}d {timeLeft.hours}h
            </div>
            <div className="text-xs text-muted-foreground">
              {format(targetDate, "MMM d, yyyy")}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle>{isEditing ? "Edit Countdown" : "Countdown"}</CardTitle>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsEditing(!isEditing)}
          className="h-8 w-8"
        >
          <Edit2 className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        {isEditing ? (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="event-name">Event Name</Label>
              <Input
                id="event-name"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                placeholder="Enter event name"
              />
            </div>
            <div className="space-y-2">
              <Label>Target Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn("w-full justify-start text-left font-normal")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {format(targetDate, "PPP")}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={targetDate}
                    onSelect={(date) => date && setTargetDate(date)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <Button className="w-full" onClick={() => setIsEditing(false)}>
              Save Changes
            </Button>
          </div>
        ) : (
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg font-medium mb-4">{eventName}</h3>
            <div className="grid grid-cols-4 gap-2 w-full mb-4">
              <div className="flex flex-col items-center p-2 bg-muted/30 rounded-md">
                <span className="text-2xl font-bold">{timeLeft.days}</span>
                <span className="text-xs text-muted-foreground">Days</span>
              </div>
              <div className="flex flex-col items-center p-2 bg-muted/30 rounded-md">
                <span className="text-2xl font-bold">{timeLeft.hours}</span>
                <span className="text-xs text-muted-foreground">Hours</span>
              </div>
              <div className="flex flex-col items-center p-2 bg-muted/30 rounded-md">
                <span className="text-2xl font-bold">{timeLeft.minutes}</span>
                <span className="text-xs text-muted-foreground">Minutes</span>
              </div>
              <div className="flex flex-col items-center p-2 bg-muted/30 rounded-md">
                <span className="text-2xl font-bold">{timeLeft.seconds}</span>
                <span className="text-xs text-muted-foreground">Seconds</span>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              <Clock className="h-4 w-4 inline-block mr-1" />
              {format(targetDate, "EEEE, MMMM d, yyyy 'at' h:mm a")}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

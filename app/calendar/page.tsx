import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import Link from "next/link";

// Mock data for demonstration
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const currentMonth = "April 2023";

const events = [
  {
    id: 1,
    title: "Deep Work Session",
    time: "09:00 - 11:00",
    type: "focus",
    completed: true,
  },
  { id: 2, title: "Team Meeting", time: "11:30 - 12:30", type: "meeting" },
  { id: 3, title: "Lunch Break", time: "12:30 - 13:30", type: "break" },
  { id: 4, title: "Project Research", time: "14:00 - 16:00", type: "focus" },
  { id: 5, title: "Review Progress", time: "16:30 - 17:30", type: "review" },
];

export default function CalendarPage() {
  // Generate calendar grid
  const calendarDays = Array.from({ length: 35 }, (_, i) => {
    const day = i - 3; // Offset to start month on correct day
    return {
      date: day > 0 && day <= 30 ? day : null,
      hasEvent: [2, 5, 8, 12, 15, 19, 22, 26, 29].includes(day),
      isToday: day === 22,
    };
  });

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center mb-6">
        <Link href="/" className="mr-4">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="text-2xl font-bold">Calendar & Schedule</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>{currentMonth}</CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-1">
                {days.map((day) => (
                  <div
                    key={day}
                    className="text-center text-sm font-medium text-muted-foreground py-2"
                  >
                    {day}
                  </div>
                ))}

                {calendarDays.map((day, i) => (
                  <div
                    key={i}
                    className={`
                      h-14 p-1 relative border border-muted rounded-md
                      ${!day.date ? "bg-muted/20 text-muted-foreground" : ""}
                      ${day.isToday ? "bg-primary/10 border-primary" : ""}
                    `}
                  >
                    {day.date && (
                      <>
                        <span
                          className={`text-sm ${
                            day.isToday ? "font-bold" : ""
                          }`}
                        >
                          {day.date}
                        </span>
                        {day.hasEvent && (
                          <div className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-primary"></div>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Today&apos;s Schedule</CardTitle>
                <Button size="sm" variant="outline">
                  <Plus className="h-4 w-4 mr-1" /> Add
                </Button>
              </div>
              <CardDescription>Monday, April 22</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="flex items-start gap-3 p-3 rounded-lg border"
                  >
                    <div className="w-1 self-stretch rounded-full bg-primary"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium">{event.title}</h4>
                        <Badge
                          variant={event.completed ? "outline" : "default"}
                        >
                          {event.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {event.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Focus Sessions</CardTitle>
            <CardDescription>Plan your deep work sessions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Project Research</h4>
                    <Badge>Tomorrow</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    10:00 - 12:00
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <span>2 hour focus block</span>
                  </div>
                </div>

                <div className="p-4 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Code Review</h4>
                    <Badge>Wed</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    14:00 - 15:30
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <span>1.5 hour focus block</span>
                  </div>
                </div>

                <div className="p-4 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Documentation</h4>
                    <Badge>Fri</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    09:00 - 11:00
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    <span>2 hour focus block</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <Button>
                  <Plus className="h-4 w-4 mr-1" /> Schedule New Focus Session
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

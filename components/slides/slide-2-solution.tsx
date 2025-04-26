import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SolutionSlide() {
  return (
    <div className="container mx-auto py-8 md:py-12 px-4">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
          Our Solution
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Turning productivity into a game you want to play
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
        <Card className="shadow-lg">
          <CardHeader className="bg-blue-50 p-4 md:p-6">
            <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-500 md:w-6 md:h-6 w-5 h-5"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a4.5 4.5 0 0 0 0 9 4.5 4.5 0 0 1 0 9 10 10 0 0 0 0-18z" />
                <path d="M12 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                <path d="M12 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
              </svg>
              Smart Monitoring
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4 md:pt-6 p-4 md:p-6">
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-500 mt-1 shrink-0"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-sm md:text-base">
                  Tracks all apps in your taskbar and current activity
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-500 mt-1 shrink-0"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-sm md:text-base">
                  Detects scrolling, reading, typing, and idle time
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-500 mt-1 shrink-0"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-sm md:text-base">
                  Identifies your most productive and distracted periods
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-500 mt-1 shrink-0"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-sm md:text-base">
                  Runs in the background without disrupting your workflow
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader className="bg-purple-50 p-4 md:p-6">
            <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-purple-500 md:w-6 md:h-6 w-5 h-5"
              >
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                <path d="M5 3v4" />
                <path d="M19 17v4" />
                <path d="M3 5h4" />
                <path d="M17 19h4" />
              </svg>
              Hyper Gamification
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4 md:pt-6 p-4 md:p-6">
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-500 mt-1 shrink-0"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-sm md:text-base">
                  Interactive mascot that reacts to your focus habits
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-500 mt-1 shrink-0"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-sm md:text-base">
                  Dual currency system earned through focus time
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-500 mt-1 shrink-0"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-sm md:text-base">
                  Focus challenges and leaderboards with friends
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-500 mt-1 shrink-0"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-sm md:text-base">
                  Marketplace for characters, themes, and widgets
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader className="bg-green-50 p-4 md:p-6">
            <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green-500 md:w-6 md:h-6 w-5 h-5"
              >
                <path d="M12 8V4H8" />
                <path d="M4 4h4" />
                <path d="M8 4a8 8 0 1 1 0 16" />
                <path d="M10.47 12.5a3 3 0 0 0 4.24 4.24" />
                <path d="M13.5 8h.5a3 3 0 0 1 3 3v.5" />
                <path d="M9.9 17.2a2 2 0 0 1 2.83-2.82" />
              </svg>
              Productivity Tools
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4 md:pt-6 p-4 md:p-6">
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-500 mt-1 shrink-0"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-sm md:text-base">
                  Advanced analytics dashboard with actionable insights
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-500 mt-1 shrink-0"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-sm md:text-base">
                  Task management with Notion integration (premium)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-500 mt-1 shrink-0"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-sm md:text-base">
                  Calendar with external integrations (premium)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-500 mt-1 shrink-0"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-sm md:text-base">
                  Built-in focus music (lo-fi, classical, nature sounds)
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-4 md:p-8 rounded-lg shadow-md">
        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">
          Key Differentiators
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-base md:text-lg mb-2 md:mb-3 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-500 shrink-0 md:w-5 md:h-5"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                <path d="m14.5 9-5 5" />
                <path d="m9.5 9 5 5" />
              </svg>
              Earn Through Focus, Not Money
            </h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Our primary currency is earned through concentration time, not
              purchases. This creates genuine motivation and sustainable habits.
            </p>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-base md:text-lg mb-2 md:mb-3 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-purple-500 shrink-0 md:w-5 md:h-5"
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="m7 10 2 2 6-6" />
              </svg>
              Emotional Connection
            </h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Your mascot knows everything about your habits, reacts
              emotionally, and builds a genuine connection that keeps you coming
              back.
            </p>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-base md:text-lg mb-2 md:mb-3 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green-500 shrink-0 md:w-5 md:h-5"
              >
                <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
                <path d="m8 16 4 4 4-4" />
                <line x1="16" x2="16" y1="13" y2="20" />
              </svg>
              Complete Ecosystem
            </h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Not just a focus timer - a complete productivity ecosystem with
              analytics, tasks, calendar, music, and social features all in one
              place.
            </p>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-base md:text-lg mb-2 md:mb-3 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-amber-500 shrink-0 md:w-5 md:h-5"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              Social Accountability
            </h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Challenge friends, bet virtual currency, and compete on
              leaderboards to stay motivated through social connection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

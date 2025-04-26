import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProblemSlide() {
  return (
    <div className="container mx-auto py-8 md:py-12 px-4">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
          The Problem
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Digital distractions are stealing our focus
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <Card className="shadow-lg">
          <CardHeader className="p-4 md:p-6">
            <CardTitle className="text-xl md:text-2xl">
              The Digital Distraction Crisis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 p-4 md:p-6">
            <div className="flex items-start gap-3 md:gap-4">
              <div className="bg-red-100 p-2 md:p-3 rounded-full shrink-0 mt-1">
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
                  className="text-red-500 md:w-6 md:h-6 w-5 h-5"
                >
                  <path d="M18 16.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  <path d="m18 3-4 4" />
                  <path d="M9.17 9.17a2.5 2.5 0 1 0 3.66 3.66" />
                  <path d="m22 22-5-5" />
                  <path d="m2 2 5 5" />
                  <path d="M12 17.8a6 6 0 0 1-8.3-8.3" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-base md:text-lg">
                  Constant App Switching
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  The average person switches between apps 566 times per day,
                  destroying focus and flow
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <div className="bg-orange-100 p-2 md:p-3 rounded-full shrink-0 mt-1">
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
                  className="text-orange-500 md:w-6 md:h-6 w-5 h-5"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m14.31 8-5.62 5.62" />
                  <path d="m8.69 8 5.62 5.62" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-base md:text-lg">
                  Social Media Addiction
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  You sit down to work, and an hour later you&apos;re deep in a
                  TikTok scroll, frustrated and disappointed
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <div className="bg-blue-100 p-2 md:p-3 rounded-full shrink-0 mt-1">
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
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <path d="M12 18v-6" />
                  <path d="M8 18v-1" />
                  <path d="M16 18v-3" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-base md:text-lg">
                  Productivity Loss
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  It takes 23 minutes to refocus after a distraction, costing
                  billions in lost productivity
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader className="p-4 md:p-6">
            <CardTitle className="text-xl md:text-2xl">
              Why Traditional Solutions Fail
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 p-4 md:p-6">
            <div className="flex items-start gap-3 md:gap-4">
              <div className="bg-purple-100 p-2 md:p-3 rounded-full shrink-0 mt-1">
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
                  <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                  <path d="M3 3v5h5" />
                  <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                  <path d="M16 16h5v5" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-base md:text-lg">
                  Boring & Punitive
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Most productivity apps feel like punishment, not motivation
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <div className="bg-green-100 p-2 md:p-3 rounded-full shrink-0 mt-1">
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
                  <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                  <path d="M8.5 8.5v.01" />
                  <path d="M16 15.5v.01" />
                  <path d="M12 12v.01" />
                  <path d="M11 17v.01" />
                  <path d="M7 14v.01" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-base md:text-lg">
                  No Immediate Rewards
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Social media and games provide instant dopamine hits that
                  productivity tools can&apos;t match
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <div className="bg-pink-100 p-2 md:p-3 rounded-full shrink-0 mt-1">
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
                  className="text-pink-500 md:w-6 md:h-6 w-5 h-5"
                >
                  <path d="M2 12h10" />
                  <path d="M9 4v16" />
                  <path d="M14 9h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2v-6z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-base md:text-lg">
                  Lack of Personalization
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Generic solutions don&apos;t adapt to individual work patterns
                  and distraction triggers
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 md:mt-12 bg-gradient-to-r from-blue-50 to-purple-50 p-4 md:p-6 rounded-lg shadow-md">
        <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-center">
          The Opportunity
        </h2>
        <p className="text-base md:text-lg text-center">
          What if we could use the same gamification techniques that make social
          media addictive to help people stay focused instead? What if
          productivity felt like a game you actually want to play?
        </p>
      </div>
    </div>
  );
}

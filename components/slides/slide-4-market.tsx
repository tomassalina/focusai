import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function MarketSlide() {
  return (
    <div className="container mx-auto py-16 px-6 max-w-7xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary mb-3">
          Market Analysis
        </h1>
        <p className="text-xl text-muted-foreground">
          A growing opportunity in productivity
        </p>
      </div>

      {/* Market Size Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Market Size & Growth
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Productivity Software</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2 text-primary">$63.7B</div>
              <p className="text-sm text-muted-foreground mb-4">
                Projected to reach $110B by 2032
              </p>
              <Progress value={58} className="h-2 mb-2" />
              <p className="text-xs text-muted-foreground">
                58% growth expected
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Focus App Market</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2 text-primary">$487M</div>
              <p className="text-sm text-muted-foreground mb-4">
                Expected to reach $725M by 2030
              </p>
              <Progress value={67} className="h-2 mb-2" />
              <p className="text-xs text-muted-foreground">
                67% growth expected
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Gamification Market</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2 text-primary">
                $17.56B
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Growing at 27.4% CAGR (2023-2030)
              </p>
              <Progress value={27} className="h-2 mb-2" />
              <p className="text-xs text-muted-foreground">
                27% annual growth rate
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Target Audience Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Target Audience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-b from-blue-50 to-white p-8 rounded-xl shadow-md">
            <div className="mb-6 flex justify-center">
              <div className="bg-blue-100 p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-500"
                >
                  <path d="M22 9a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4Z" />
                  <path d="M6 9h.01" />
                  <path d="M10 9h.01" />
                  <path d="M14 9h.01" />
                  <path d="M18 9h.01" />
                  <path d="M8 13v8" />
                  <path d="M16 13v8" />
                  <path d="M12 13v8" />
                </svg>
              </div>
            </div>
            <h3 className="font-bold text-center text-xl mb-3">Students</h3>
            <p className="text-muted-foreground mb-6 text-center">
              High school and university students struggling with digital
              distractions while studying
            </p>
            <div>
              <div className="text-sm font-medium mb-2">Market Size: 250M+</div>
              <Progress value={85} className="h-2" />
            </div>
          </div>

          <div className="bg-gradient-to-b from-purple-50 to-white p-8 rounded-xl shadow-md">
            <div className="mb-6 flex justify-center">
              <div className="bg-purple-100 p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-purple-500"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
            </div>
            <h3 className="font-bold text-center text-xl mb-3">Freelancers</h3>
            <p className="text-muted-foreground mb-6 text-center">
              Independent professionals who need to manage their own
              productivity without external structure
            </p>
            <div>
              <div className="text-sm font-medium mb-2">Market Size: 70M+</div>
              <Progress value={65} className="h-2" />
            </div>
          </div>

          <div className="bg-gradient-to-b from-green-50 to-white p-8 rounded-xl shadow-md">
            <div className="mb-6 flex justify-center">
              <div className="bg-green-100 p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-500"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
            </div>
            <h3 className="font-bold text-center text-xl mb-3">
              Young Professionals
            </h3>
            <p className="text-muted-foreground mb-6 text-center">
              Knowledge workers in digital environments who need to maintain
              focus amid constant distractions
            </p>
            <div>
              <div className="text-sm font-medium mb-2">Market Size: 180M+</div>
              <Progress value={75} className="h-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Key Insights & Strategy Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <Card className="shadow-md hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Key Market Insights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 p-5 rounded-lg">
              <h3 className="font-medium mb-3">Growth Drivers</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
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
                    className="text-blue-500 mt-1"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>
                    90% of employees say gamification makes them more productive
                    at work
                  </span>
                </li>
                <li className="flex items-start gap-3">
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
                    className="text-blue-500 mt-1"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>
                    67% of students agree that gamification improves
                    productivity
                  </span>
                </li>
                <li className="flex items-start gap-3">
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
                    className="text-blue-500 mt-1"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>
                    Growing awareness of digital wellness and mental health
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-indigo-50 p-5 rounded-lg">
              <h3 className="font-medium mb-3">Competitive Advantage</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
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
                    className="text-indigo-500 mt-1"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>
                    Most focus apps simply block distractions; FocusAI makes
                    productivity rewarding and fun
                  </span>
                </li>
                <li className="flex items-start gap-3">
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
                    className="text-indigo-500 mt-1"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>
                    Our currency system based on focus time creates genuine
                    motivation, not artificial rewards
                  </span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Go-to-Market Strategy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-50 p-3 rounded-full shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-500"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Social Media Strategy</h3>
                    <p className="text-sm text-muted-foreground">
                      Leverage TikTok and Instagram with viral content showing
                      productivity transformations
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-50 p-3 rounded-full shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-purple-500"
                    >
                      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                      <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
                      <path d="M13 13h4" />
                      <path d="M13 17h4" />
                      <path d="M9 13h.01" />
                      <path d="M9 17h.01" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Educational Partnerships</h3>
                    <p className="text-sm text-muted-foreground">
                      Partner with universities to offer FocusAI to students
                      during exam periods
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="bg-green-50 p-3 rounded-full shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-500"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m7 10 2 2 6-6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Freemium Model</h3>
                    <p className="text-sm text-muted-foreground">
                      Free tier with core features, premium tier with advanced
                      analytics and integrations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

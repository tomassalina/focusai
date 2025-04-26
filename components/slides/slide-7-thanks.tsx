import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github } from "lucide-react";
import Link from "next/link";

export default function ThanksSlide() {
  return (
    <div className="container mx-auto py-8 md:py-12 px-4">
      <div className="flex flex-col items-center justify-center min-h-[70vh] md:min-h-[80vh]">
        <h2 className="text-base md:text-lg text-muted-foreground uppercase tracking-wider mb-2">
          Final Thoughts
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 md:mb-6">
          Thank You!
        </h1>

        <div className="max-w-sm md:max-w-2xl text-center mb-8 md:mb-12">
          <p className="text-lg md:text-xl">
            We appreciate your time and consideration of our FocusAI project.
            This university project combines market research, product design,
            and software development to revolutionize productivity in the
            digital age.
          </p>
        </div>

        <Card className="w-full max-w-xs md:max-w-md shadow-lg">
          <CardContent className="p-2 md:p-3">
            <div className="text-center space-y-1 md:space-y-2">
              <h2 className="text-xl md:text-2xl font-bold">View Project</h2>
              <p className="text-sm md:text-base text-muted-foreground">
                Explore our complete source code on GitHub.
              </p>
              <Link
                href="https://github.com/tomassalina/focusai"
                target="_blank"
              >
                <Button className="mt-4" size="lg">
                  <Github className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  <span className="text-sm md:text-base">View on GitHub</span>
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <div className="w-full max-w-md bg-muted/50 rounded-lg p-6 mt-12">
          <blockquote className="text-center italic text-lg md:text-xl">
            &quot;You can do anything, but not everything.&quot;
            <footer className="text-sm md:text-base font-medium mt-2">
              — David Allen (GTD Founder)
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

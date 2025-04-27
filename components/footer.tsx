import { Github } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-4 py-4 bg-background">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 mx-auto px-6">
        <p className="text-sm text-muted-foreground">
          &copy; 2025 FocusAI. All rights reserved.
        </p>
        <Link
          href="https://github.com/tomassalina/focusai"
          target="_blank"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <Github className="h-4 w-4" />
          <span>See on GitHub</span>
        </Link>
      </div>
    </footer>
  );
}

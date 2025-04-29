import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function TeamSlide() {
  const teamMembers = [
    {
      name: "Tomas Salina",
      university: "ITBA",
      degree: "Business & Technology",
      linkedin: "https://www.linkedin.com/in/tomassalina/",
      image: "/team/tomas-salina-avatar.png",
    },
    {
      name: "Tiago Maetokuhiga",
      university: "ITBA",
      degree: "Business & Technology",
      linkedin: "https://www.linkedin.com/in/tiago-maetokuhiga-2727a026b/",
      image: "/team/tiago-maetokuhiga-avatar.png",
    },
    {
      name: "Dolores Silva",
      university: "ITBA",
      degree: "Business & Technology",
      linkedin:
        "https://www.linkedin.com/in/dolores-silva-felgueras-a02923361/",
      image: "/team/dolores-silva-avatar.jpg",
    },
    {
      name: "Francisco Giammona",
      university: "ITBA",
      degree: "Business & Technology",
      linkedin: "https://www.linkedin.com/in/giammona/",
      image: "/team/francisco-giammona-avatar.jpeg",
    },
    {
      name: "Fredrick Swingle",
      university: "Illinois Tech",
      degree: "Business Administration",
      linkedin: "https://www.linkedin.com/in/freddy-swingle-5684ab279/",
      image: "/team/fredrick-swingle-avatar.png",
    },
    {
      name: "Nicolas Carrillo",
      university: "Illinois Tech",
      degree: "Business Administration",
      linkedin: "https://www.linkedin.com/in/nicolas-carrillo-3b4b571aa",
      image: "/team/nicolas-carillo-avatar.png",
    },
    {
      name: "Joshua Minami",
      university: "Illinois Tech",
      degree: "Business Administration",
      linkedin: "https://www.linkedin.com/in/joshua-minami-2888aa1ab",
      image: "/team/joshua-minami-avatar.png",
    },
  ];

  return (
    <div className="container mx-auto py-8 md:py-12 px-6">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
          Our Team
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          The minds behind FocusAI
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {teamMembers.map((member, index) => (
            <Link
              href={member.linkedin}
              target="_blank"
              key={index}
              className="flex w-full max-w-64"
            >
              <Card className=" w-full block h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="aspect-square relative">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-3 md:p-4">
                  <h3 className="font-bold text-base md:text-lg">
                    {member.name}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1">
                    {member.degree}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {member.university}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-12 md:mt-16 text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
          Why Invest in FocusAI?
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-base md:text-lg mb-6">
            We&apos;re tackling a growing problem in the digital age with a
            unique solution that combines gamification, AI, and behavioral
            psychology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-left">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-base md:text-lg">
                Massive Market
              </h3>
              <p className="text-xs md:text-sm">
                Targeting a $100B+ productivity market with a differentiated
                product in a growing category.
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-base md:text-lg">
                Scalable Model
              </h3>
              <p className="text-xs md:text-sm">
                Subscription-based SaaS with high margins and multiple revenue
                streams.
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-base md:text-lg">
                Strong Team
              </h3>
              <p className="text-xs md:text-sm">
                Diverse expertise across technology, design, and business
                development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

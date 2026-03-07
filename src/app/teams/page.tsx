"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface TeamMember {
  name: string;
  role: string;
  image: string;
  socials: { instagram: string; linkedin: string; };
}

interface TeamSection {
  title: string;
  description: string;
  members: TeamMember[];
}

const teams: TeamSection[] = [
  {
    title: "Faculty Members",
    description: "The guiding lights and mentors of our student branch.",
    members: [
      {
        name: "Dr. Vinay Kumar",
        role: "Branch Counselor",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
        socials: { instagram: "#", linkedin: "#" }
      },
      {
        name: "Prof. Anjali Desai",
        role: "WIE Advisor",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
        socials: { instagram: "#", linkedin: "#" }
      },
      {
        name: "Dr. Rajesh Singh",
        role: "CS Chapter Advisor",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
        socials: { instagram: "#", linkedin: "#" }
      }
    ]
  },
  {
    title: "Developer Team",
    description: "The masterminds behind our digital presence and applications.",
    members: [
      {
        name: "Aarav Patel",
        role: "Lead Developer",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
        socials: { instagram: "#", linkedin: "#" }
      },
      {
        name: "Karan Desai",
        role: "Frontend Engineer",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
        socials: { instagram: "#", linkedin: "#" }
      },
      {
        name: "Dev Joshi",
        role: "Backend Engineer",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80",
        socials: { instagram: "#", linkedin: "#" }
      }
    ]
  },
  {
    title: "Design Team",
    description: "The creative souls crafting our visual identity and user experiences.",
    members: [
      {
        name: "Diya Shah",
        role: "UI/UX Lead",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
        socials: { instagram: "#", linkedin: "#" }
      },
      {
        name: "Riya Mehta",
        role: "Graphic Designer",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
        socials: { instagram: "#", linkedin: "#" }
      },
      {
        name: "Pooja Verma",
        role: "Video Editor",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
        socials: { instagram: "#", linkedin: "#" }
      }
    ]
  },
  {
    title: "Documentation Team",
    description: "The writers preserving our legacy and detailing our events.",
    members: [
      {
        name: "Sneha Reddy",
        role: "Content Lead",
        image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
        socials: { instagram: "#", linkedin: "#" }
      },
      {
        name: "Rohan Kumar",
        role: "Technical Writer",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
        socials: { instagram: "#", linkedin: "#" }
      },
      {
        name: "Neha Gupta",
        role: "Social Media Mgr",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
        socials: { instagram: "#", linkedin: "#" }
      }
    ]
  }
];

function TeamCard({ member, index }: { member: TeamMember, index: number }) {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{
        opacity: 1,
        scale: [0.95, 1.02, 1],
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.05 }}
      onClick={() => setIsActive(!isActive)}
      className={cn(
        "group relative aspect-[4/5] sm:aspect-[3/4] rounded-[2rem] overflow-hidden bg-muted cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500",
        "snap-center shrink-0 w-[calc(100vw-48px)] sm:w-auto",
        isActive && "shadow-xl"
      )}
    >
      {/* Background Image */}
      <div
        className={cn(
          "absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110",
          isActive && "scale-110"
        )}
        style={{ backgroundImage: `url(${member.image})` }}
      />

      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Social Links - Visible on hover/touch focus */}
      <div className="absolute left-4 top-4 flex flex-col gap-2 z-20">
        <Link
          href={member.socials.instagram}
          className={cn(
            "w-9 h-9 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] transition-all duration-300 translate-x-[-150%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100",
            isActive && "translate-x-0 opacity-100"
          )}
        >
          <Instagram size={18} />
        </Link>
        <Link
          href={member.socials.linkedin}
          className={cn(
            "w-9 h-9 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#0077b5] transition-all duration-300 translate-x-[-150%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 delay-75",
            isActive && "translate-x-0 opacity-100"
          )}
        >
          <Linkedin size={18} />
        </Link>
      </div>

      {/* Info Overlay - Permanent with dark themed background */}
      <div className="absolute inset-x-0 bottom-0 p-5 z-10">
        <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-4 border border-white/10 shadow-2xl">
          <div className="flex flex-col gap-0.5">
            <h3 className="font-bold text-white text-lg tracking-tight leading-tight">
              {member.name}
            </h3>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary/90">
              {member.role}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Teams() {
  return (
    <div className="py-12 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Meet the Teams</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          The brilliant minds at IEEE CS BVM driving innovation.
        </p>
      </motion.div>

      {teams.map((teamSection, sectionIndex) => (
        <section key={teamSection.title} className="space-y-8 md:space-y-12">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border pb-6"
          >
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">{teamSection.title}</h2>
              <p className="text-muted-foreground mt-2">{teamSection.description}</p>
            </div>
            {/* Visual Indicator for Mobile Scroll */}
            <div className="hidden md:block h-px flex-1 mx-8 bg-gradient-to-r from-primary/30 to-transparent" />
          </motion.div>

          {/* Members Carousel / Grid Wrapper */}
          <div className="relative overflow-visible">
            <div
              className={cn(
                "flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 overflow-x-auto pb-8 md:pb-0 scroll-smooth hide-scrollbar snap-x snap-mandatory px-4 md:px-0 -mx-4 md:mx-0",
                "cursor-grab active:cursor-grabbing"
              )}
            >
              {teamSection.members.map((member, index) => (
                <TeamCard key={member.name} member={member} index={index + (sectionIndex * 0.5)} />
              ))}
              {/* Spacer for end of mobile scroll */}
              <div className="md:hidden shrink-0 w-8" />
            </div>

            {/* Visible mobile indicator dots */}
            <div className="md:hidden flex justify-center gap-2 mt-4">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <div className="w-2 h-2 rounded-full bg-primary/20" />
              <div className="w-2 h-2 rounded-full bg-primary/20" />
            </div>
          </div>
        </section>
      ))}

      {/* Global CSS for hiding scrollbars while maintaining functionality */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}

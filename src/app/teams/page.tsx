"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface TeamMember {
  name: string;
  role: string;
  image: string;
  socials: { github: string; linkedin: string; };
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
        socials: { github: "#", linkedin: "#" }
      },
      {
        name: "Prof. Anjali Desai",
        role: "WIE Advisor",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
        socials: { github: "#", linkedin: "#" }
      },
      {
        name: "Dr. Rajesh Singh",
        role: "CS Chapter Advisor",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
        socials: { github: "#", linkedin: "#" }
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
        socials: { github: "#", linkedin: "#" }
      },
      {
        name: "Karan Desai",
        role: "Frontend Engineer",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
        socials: { github: "#", linkedin: "#" }
      },
      {
        name: "Dev Joshi",
        role: "Backend Engineer",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80",
        socials: { github: "#", linkedin: "#" }
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
        socials: { github: "#", linkedin: "#" }
      },
      {
        name: "Riya Mehta",
        role: "Graphic Designer",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
        socials: { github: "#", linkedin: "#" }
      },
      {
        name: "Pooja Verma",
        role: "Video Editor",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
        socials: { github: "#", linkedin: "#" }
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
        socials: { github: "#", linkedin: "#" }
      },
      {
        name: "Rohan Kumar",
        role: "Technical Writer",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
        socials: { github: "#", linkedin: "#" }
      },
      {
        name: "Neha Gupta",
        role: "Social Media Mgr",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
        socials: { github: "#", linkedin: "#" }
      }
    ]
  }
];

function TeamCard({ member, index }: { member: TeamMember, index: number }) {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onClick={() => setIsActive(!isActive)}
      className={cn(
        "group relative aspect-[3/4] rounded-3xl overflow-hidden bg-muted cursor-pointer shadow-sm hover:shadow-xl transition-shadow",
        isActive && "shadow-xl"
      )}
    >
      {/* Background Image */}
      <div
        className={cn(
          "absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110",
          isActive && "scale-110"
        )}
        style={{ backgroundImage: `url(${member.image})` }}
      />

      {/* Gradient Overlay for better readability */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent group-hover:from-black/80 transition-colors duration-300",
        isActive && "from-black/80"
      )} />

      {/* Sliding Social Links Container */}
      <div className="absolute left-6 bottom-6 flex gap-3 z-10 overflow-hidden">
        <Link
          href={member.socials.github}
          className={cn(
            "w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors translate-y-[200%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-500 delay-75",
            isActive && "translate-y-0 opacity-100"
          )}
        >
          <Github size={18} />
        </Link>
        <Link
          href={member.socials.linkedin}
          className={cn(
            "w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#0077b5] hover:text-white transition-colors translate-y-[200%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-500 delay-100",
            isActive && "translate-y-0 opacity-100"
          )}
        >
          <Linkedin size={18} />
        </Link>
      </div>

      {/* Light Gray Transparent Capsule */}
      <div className={cn(
        "absolute right-4 bottom-4 z-10 px-5 py-2.5 bg-white/30 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 transition-all duration-300 group-hover:bg-white/40",
        isActive && "bg-white/40"
      )}>
        <div className="text-right flex flex-col items-end">
          <h3 className="font-bold text-white text-lg leading-tight drop-shadow-sm">{member.name}</h3>

          {/* Role slides in and fades in on hover */}
          <div className={cn(
            "grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out",
            isActive && "grid-rows-[1fr]"
          )}>
            <div className="overflow-hidden">
              <p className={cn(
                "text-sm text-white/90 font-semibold mt-1 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100",
                isActive && "opacity-100 translate-y-0"
              )}>
                {member.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Teams() {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Meet the Teams</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          The brilliant minds at IEEE Computer Society BVM driving innovation.
        </p>
      </motion.div>

      {teams.map((teamSection, sectionIndex) => (
        <section key={teamSection.title} className="space-y-12">
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
          </motion.div>

          {/* Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamSection.members.map((member, index) => (
              <TeamCard key={member.name} member={member} index={index + (sectionIndex * 0.5)} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

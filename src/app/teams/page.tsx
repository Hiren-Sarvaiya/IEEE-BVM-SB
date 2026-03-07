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
    title: "2026's Committee",
    description: "The core leadership and coordinators driving IEEE CS BVM for the upcoming year.",
    members: [
      { name: "Dr. Vinay Kumar", role: "Faculty Advisor", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", socials: { instagram: "#", linkedin: "#" } },
      { name: "Dr. Rajesh Singh", role: "Faculty Advisor", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80", socials: { instagram: "#", linkedin: "#" } },
      { name: "Siddharth Mehra", role: "Chairperson", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80", socials: { instagram: "#", linkedin: "#" } },
      { name: "Ishu Sharma", role: "Vice-Chairperson", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80", socials: { instagram: "#", linkedin: "#" } },
      { name: "Arjun Vyas", role: "Secretary", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80", socials: { instagram: "#", linkedin: "#" } },
      { name: "Kaira Gupta", role: "Event Coordinator", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80", socials: { instagram: "#", linkedin: "#" } },
      { name: "Rohan Varma", role: "Event Coordinator", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80", socials: { instagram: "#", linkedin: "#" } },
      { name: "Sanya Malhotra", role: "Documentation Head", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80", socials: { instagram: "#", linkedin: "#" } },
      { name: "Nikhil Jain", role: "Documentation Head", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", socials: { instagram: "#", linkedin: "#" } },
      { name: "Maya Ray", role: "Graphics Head", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80", socials: { instagram: "#", linkedin: "#" } },
      { name: "Aarav Rawat", role: "Webmaster", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80", socials: { instagram: "#", linkedin: "#" } },
      { name: "Karan Desai", role: "Webmaster", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80", socials: { instagram: "#", linkedin: "#" } },
    ]
  },
  {
    title: "2025's Committee",
    description: "The dedicated members who established the foundation of excellence.",
    members: [
      { name: "Prof. Anjali Desai", role: "Faculty Advisor", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80", socials: { instagram: "#", linkedin: "#" } },
      { name: "Dr. Bhavesh Patel", role: "Faculty Advisor", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80", socials: { instagram: "#", linkedin: "#" } },
      { name: "Dev Joshi", role: "Chairperson", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80", socials: { instagram: "#", linkedin: "#" } },
      { name: "Sneha Reddy", role: "Vice-Chairperson", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80", socials: { instagram: "#", linkedin: "#" } },
      { name: "Neha Gupta", role: "Secretary", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80", socials: { instagram: "#", linkedin: "#" } },
      { name: "Riya Mehta", role: "Event Coordinator", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80", socials: { instagram: "#", linkedin: "#" } },
      { name: "Pooja Verma", role: "Event Coordinator", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80", socials: { instagram: "#", linkedin: "#" } },
      { name: "Aarav Patel", role: "Documentation Head", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", socials: { instagram: "#", linkedin: "#" } },
      { name: "Diya Shah", role: "Documentation Head", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80", socials: { instagram: "#", linkedin: "#" } },
      { name: "Karan Johar", role: "Graphics Head", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80", socials: { instagram: "#", linkedin: "#" } },
      { name: "Rahul Soni", role: "Webmaster", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80", socials: { instagram: "#", linkedin: "#" } },
      { name: "Tina Datta", role: "Webmaster", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80", socials: { instagram: "#", linkedin: "#" } },
    ]
  }
];

function TeamCard({ member, index }: { member: TeamMember, index: number }) {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <div
      onClick={() => setIsActive(!isActive)}
      className={cn(
        "group relative h-[60vh] sm:h-[70vh] aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-muted cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500",
        "shrink-0",
        isActive && "shadow-xl"
      )}
    >
      {/* Background Image */}
      <div
        className={cn(
          "absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105",
          isActive && "scale-105"
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
            "w-9 h-9 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#0077b5] transition-all duration-300 translate-x-[-150%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 delay-75",
            isActive && "translate-x-0 opacity-100"
          )}
        >
          <Linkedin size={18} />
        </Link>
      </div>

      {/* Info Overlay - Orange Gradient Variant */}
      <div className="absolute inset-x-0 bottom-0 p-6 z-10">
        <div className="bg-gradient-to-br from-[#f8a319]/25 to-[#ce7a00]/25 rounded-3xl p-5 border border-white/20 shadow-xl backdrop-blur-sm transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(248,163,25,0.4)]">
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-white text-xl tracking-tight leading-tight drop-shadow-md">
              {member.name}
            </h3>
            <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-white/90 drop-shadow-sm">
              {member.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HorizontalCommitteeSection({ teamSection, sectionIndex }: { teamSection: TeamSection, sectionIndex: number }) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !scrollerRef.current) return;

      const container = containerRef.current;
      const scroller = scrollerRef.current;
      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;

      if (rect.top <= 0 && rect.bottom >= viewportHeight) {
        const progress = Math.abs(rect.top) / (containerHeight - viewportHeight);

        // Calculate maxTranslate: scroller width minus its parent's visible width
        const maxTranslate = scroller.scrollWidth - scroller.parentElement!.clientWidth;

        setTranslateX(
          -(Math.max(0, Math.min(1, progress)) * Math.max(0, maxTranslate))
        );
      } else if (rect.top > 0) {
        setTranslateX(0);
      } else if (rect.bottom < viewportHeight) {
        const maxTranslate = scroller.scrollWidth - scroller.parentElement!.clientWidth;
        setTranslateX(-maxTranslate);
      }
    };

    const handle = () => requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <section key={teamSection.title} className="relative">
      <div ref={containerRef} className="relative h-[700vh] sm:h-[500vh]">
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
          {/* Persistent Section Header inside sticky container */}
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border pb-6"
            >
              <div>
                <h2 className="text-4xl font-bold tracking-tight text-foreground">{teamSection.title}</h2>
                <p className="text-muted-foreground mt-2">{teamSection.description}</p>
              </div>
              <div className="hidden md:block h-px flex-1 mx-8 bg-gradient-to-r from-primary/30 to-transparent" />
            </motion.div>
          </div>

          {/* Horizontal Scroll Area */}
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div
              ref={scrollerRef}
              className="flex gap-8 items-center"
              style={{
                transform: `translateX(${translateX}px)`,
                willChange: "transform"
              }}
            >
              {teamSection.members.map((member, index) => (
                <TeamCard key={member.name} member={member} index={index} />
              ))}
              {/* End Spacer */}
              <div className="shrink-0 w-4 h-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Teams() {
  React.useEffect(() => {
    const initLenis = async () => {
      const { default: Lenis } = await import("lenis");
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
      return () => {
        lenis.destroy();
      };
    };

    initLenis();
  }, []);

  return (
    <div className="py-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12 sm:mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase">
          Meet the <span className="text-primary italic">Teams</span>
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
          The brilliant minds at IEEE CS BVM driving innovation and excellence.
        </p>
      </motion.div>

      <div className="space-y-0">
        {teams.map((teamSection, sectionIndex) => (
          <HorizontalCommitteeSection
            key={teamSection.title}
            teamSection={teamSection}
            sectionIndex={sectionIndex}
          />
        ))}
      </div>
    </div>
  );
}

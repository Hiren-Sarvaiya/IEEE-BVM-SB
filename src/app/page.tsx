"use client"

import { motion } from "framer-motion"
import { ArrowRight, ChevronRight, Zap, Users, Code, Activity } from "lucide-react"
import Link from "next/link"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 bg-background overflow-hidden -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[var(--color-cs)]/20 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-[var(--color-wie)]/20 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob animation-delay-4000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 border border-border text-sm font-medium">
              <Zap size={16} className="text-primary" />
              <span>Advancing Technology</span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
              IEEE CS BVM SBC <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                BVM Chapter
              </span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The community of CS, IT & engineering professionals. Join us in shaping the future of technology at Birla Vishvakarma Mahavidyalaya.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/events"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors w-full sm:w-auto"
              >
                Explore Events
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-foreground bg-secondary/10 border border-border rounded-lg hover:bg-secondary/20 transition-colors w-full sm:w-auto hover:text-primary"
              >
                Our Mission
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-card rounded-3xl p-8 md:p-12 border border-border shadow-sm"
        >
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Technical Excellence</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              IEEE CS BVM SBC at BVM is dedicated to advancing the theory and practice of computer and information processing technology. We provide a platform for students to enhance their technical skills through workshops, hackathons, and global networking.
            </p>
            <div className="flex gap-4 pt-2">
              <div className="space-y-1">
                <h4 className="text-3xl font-bold text-primary">200+</h4>
                <p className="text-sm text-muted-foreground font-medium">CS Members</p>
              </div>
              <div className="w-px bg-border my-2" />
              <div className="space-y-1">
                <h4 className="text-3xl font-bold text-primary">20+</h4>
                <p className="text-sm text-muted-foreground font-medium">Core Events</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
            <Code className="w-24 h-24 text-primary/30" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent mix-blend-overlay" />
          </div>
        </motion.div>
      </section>

      {/* Internal spacing adjustment since Societies section is gone */}
      <div className="h-0" />

      {/* Call to Action */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-primary/75 rounded-3xl p-8 md:p-16 text-center text-primary-foreground relative overflow-hidden"
        >
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Ready to innovate</h2>
            <p className="text-primary-foreground/80 md:text-lg max-w-xl mx-auto">
              Join the IEEE CS BVM SBC BVM Chapter today and become part of a community.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-primary bg-background rounded-lg hover:bg-background/90 transition-transform hover:scale-105"
              >
                Become a Member
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

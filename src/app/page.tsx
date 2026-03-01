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
              <Zap size={16} className="text-secondary" />
              <span>Innovating since 1999</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto">
              Empowering Minds, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[var(--color-cs)]">
                Shaping the Future
              </span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Welcome to the IEEE Student Branch at Birla Vishvakarma Mahavidyalaya. We are a community of passionate engineers, designers, and innovators.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/events"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors w-full sm:w-auto"
              >
                Join Our Events
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-foreground bg-secondary/10 border border-border rounded-lg hover:bg-secondary/20 transition-colors w-full sm:w-auto hover:text-primary"
              >
                Learn More
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Legacy at BVM</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For over two decades, the IEEE BVM Student Branch has been at the forefront of technical excellence. We bridge the gap between academic learning and industry requirements, fostering a culture of innovation and collaborative growth.
            </p>
            <div className="flex gap-4 pt-2">
              <div className="space-y-1">
                <h4 className="text-3xl font-bold text-primary">500+</h4>
                <p className="text-sm text-muted-foreground font-medium">Active Members</p>
              </div>
              <div className="w-px bg-border my-2" />
              <div className="space-y-1">
                <h4 className="text-3xl font-bold text-primary">50+</h4>
                <p className="text-sm text-muted-foreground font-medium">Yearly Events</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
            {/* Placeholder for an image or graphic */}
            <Activity className="w-24 h-24 text-muted-foreground/30" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent mix-blend-overlay" />
          </div>
        </motion.div>
      </section>

      {/* Societies Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Societies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our specialized technical societies that focus on various domains of engineering and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Computer Society",
              desc: "Dedicated to advancing computer science and technology through hackathons, coding workshops, and tech talks.",
              color: "bg-[var(--color-cs)]/10 text-[var(--color-cs)]",
              border: "border-[var(--color-cs)]/20",
              icon: <Code size={32} />
            },
            {
              title: "Women In Engineering",
              desc: "Promoting women engineers and scientists, inspiring young girls to follow their academic interests in STEM.",
              color: "bg-[var(--color-wie)]/10 text-[var(--color-wie)]",
              border: "border-[var(--color-wie)]/20",
              icon: <Users size={32} />
            },
            {
              title: "Nuclear & Plasma",
              desc: "Fostering awareness and knowledge about nuclear and plasma sciences among engineering students.",
              color: "bg-[var(--color-npss)]/10 text-[var(--color-npss)]",
              border: "border-[var(--color-npss)]/20",
              icon: <Zap size={32} />
            }
          ].map((soc, i) => (
            <motion.div
              key={soc.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }
              }}
              className={`relative group rounded-2xl p-8 border ${soc.border} bg-card hover:shadow-lg transition-all overflow-hidden`}
            >
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${soc.color}`}>
                {soc.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{soc.title}</h3>
              <p className="text-muted-foreground mb-6 line-clamp-3">{soc.desc}</p>
              <Link href="/about" className="inline-flex items-center text-sm font-semibold hover:opacity-80 transition-opacity">
                Learn more <ChevronRight size={16} className="ml-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-primary rounded-3xl p-8 md:p-16 text-center text-primary-foreground relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Ready to innovate</h2>
            <p className="text-primary-foreground/80 md:text-lg max-w-xl mx-auto">
              Join the IEEE BVM Student Branch today and become part of a global network of professionals and students.
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

"use client"

import { motion } from "framer-motion"
import { Award, Library, Globe, Target } from "lucide-react"

export default function About() {
  return (
    <div className="py-24 space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto space-y-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Advancing Technology for Humanity</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          The IEEE BVM Student Branch is a proud part of the world's largest technical professional organization, dedicated to fostering technological innovation and excellence at Birla Vishvakarma Mahavidyalaya.
        </p>
      </motion.section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl p-8 border border-border space-y-4"
        >
          <Target className="w-12 h-12 text-primary mb-6" />
          <h3 className="text-2xl font-bold">Mission</h3>
          <p className="text-muted-foreground leading-relaxed">
            IEEE's core purpose is to foster technological innovation and excellence for the benefit of humanity.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-card rounded-2xl p-8 border border-border space-y-4"
        >
          <Globe className="w-12 h-12 text-primary mb-6" />
          <h3 className="text-2xl font-bold">Vision</h3>
          <p className="text-muted-foreground leading-relaxed">
            To be essential to the global technical community and recognized for the contributions of technology in improving global conditions.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-2xl p-8 border border-border space-y-4"
        >
          <Library className="w-12 h-12 text-primary mb-6" />
          <h3 className="text-2xl font-bold">BVM Heritage</h3>
          <p className="text-muted-foreground leading-relaxed">
            Leveraging engineering excellence from BVM's rich legacy to empower students with tools for the evolving tech landscape.
          </p>
        </motion.div>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Global Impact & Scale</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            As a student branch, we are part of a massive global network that shapes the future of technology every day.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Members Globally", value: "500K+" },
            { label: "Countries Involved", value: "190+" },
            { label: "Student Branches", value: "3.5K+" },
            { label: "Active Standards", value: "1K+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-muted/30 border border-border"
            >
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8">What We Do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          {[
            { icon: <Award className="w-5 h-5" />, title: "Technical Excellence", desc: "Organizing coding competitions, hackathons, and hardware design contests aligned with IEEE standards." },
            { icon: <Globe className="w-5 h-5" />, title: "Global Networking", desc: "Connecting students with a global community of over 500,000 professionals and researchers." },
            { icon: <Library className="w-5 h-5" />, title: "Learning Resources", desc: "Providing access to the latest research through IEEE Xplore and specialized workshops." },
            { icon: <Target className="w-5 h-5" />, title: "Career Growth", desc: "Fostering professional development through seminars, certifications, and industry interactions." },
          ].map((item, index) => (
            <motion.div 
              key={item.title} 
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-4 p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors"
            >
              <div className="text-primary shrink-0 mt-1">{item.icon}</div>
              <div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}

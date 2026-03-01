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
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Our Story</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          The IEEE Student Branch at Birla Vishvakarma Mahavidyalaya (BVM) was established with a singular vision: to empower the engineers of tomorrow.
        </p>
      </motion.section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl p-8 border border-border space-y-4"
        >
          <Library className="w-12 h-12 text-primary mb-6" />
          <h3 className="text-2xl font-bold">Heritage of BVM</h3>
          <p className="text-muted-foreground leading-relaxed">
            As the first engineering college in Gujarat, BVM has a rich legacy of producing world-class engineers. The IEEE branch builds upon this foundation, offering a platform where theoretical knowledge meets practical application.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl p-8 border border-border space-y-4"
        >
          <Target className="w-12 h-12 text-primary mb-6" />
          <h3 className="text-2xl font-bold">Our Mission</h3>
          <p className="text-muted-foreground leading-relaxed">
            To foster technological innovation and excellence for the benefit of humanity. We strive to create a vibrant academic environment through workshops, seminars, and collaborative projects.
          </p>
        </motion.div>
      </div>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8">What We Do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          {[
            { icon: <Award />, title: "Technical Excellence", desc: "Organizing coding competitions, hackathons, and hardware design contests." },
            { icon: <Globe />, title: "Global Networking", desc: "Connecting students with industry professionals and researchers worldwide." },
          ].map((item) => (
            <div key={item.title} className="flex gap-4 p-6 rounded-xl border border-border bg-muted/30">
              <div className="text-primary shrink-0">{item.icon}</div>
              <div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}

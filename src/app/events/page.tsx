"use client"

import { motion } from "framer-motion"

const galleryImages = [
  { id: 1, title: "Tech Symposium 2023", category: "Conference" },
  { id: 2, title: "Hackathon 2.0", category: "Development" },
  { id: 3, title: "WIE Workshop", category: "Workshop" },
  { id: 4, title: "Web Dev Bootcamp", category: "Workshop" },
  { id: 5, title: "AI/ML Seminar", category: "Seminar" },
  { id: 6, title: "Annual Meetup", category: "Networking" },
]

export default function Events() {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16 space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Events Gallery</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A glimpse into the diverse workshops, hackathons, and symposiums hosted by our branch.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((img, index) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted flex items-center justify-center cursor-pointer border border-border"
          >
            {/* Visual Placeholder for an image */}
            <div className="text-muted-foreground/30 font-bold text-5xl opacity-0">Img {img.id}</div>
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-sm font-semibold text-primary mb-1">{img.category}</span>
              <h3 className="text-xl font-bold text-foreground">{img.title}</h3>
            </div>
            
            {/* Gradient for depth even without hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-20 group-hover:opacity-0 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

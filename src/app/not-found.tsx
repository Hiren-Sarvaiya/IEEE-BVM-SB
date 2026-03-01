"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        className="text-center space-y-8"
      >
        <div className="relative inline-flex items-center justify-center">
          <h1 className="text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary/30">
            404
          </h1>
          <motion.div 
            animate={{ 
              rotate: [0, 10, -10, 0],
            }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute -top-4 -right-8 text-primary shadow-2xl bg-background rounded-full p-4"
          >
            <Search size={48} />
          </motion.div>
        </div>

        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Lost in the Matrix?</h2>
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            The page you're looking for was moved, removed, renamed, or might never have existed.
          </p>
        </div>

        <div>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-primary-foreground bg-primary rounded-xl hover:bg-primary/90 transition-transform hover:-translate-y-1 hover:shadow-lg"
          >
            Return Home
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

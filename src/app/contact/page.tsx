"use client"

import { motion } from "framer-motion"
import { Send, MapPin, Phone, Mail } from "lucide-react"

export default function Contact() {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* Contact Information & Map */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Get in Touch</h1>
            <p className="text-xl text-muted-foreground">
              Have questions about our events, membership, or sponsorships? Drop us a message and we'll get back to you.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <MapPin size={24} />
              </div>
              <p>Birla Vishvakarma Mahavidyalaya<br />Engineering College, Vallabh Vidyanagar</p>
            </div>
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Mail size={24} />
              </div>
              <p>cs.chapter@bvmengineering.ac.in</p>
            </div>
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Phone size={24} />
              </div>
              <p>+91 (123) 456-7890</p>
            </div>
          </div>

          <div className="w-full h-64 bg-muted rounded-2xl border border-border overflow-hidden relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.7131435113733!2d72.9219350761019!3d22.55241597950604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4e74c03b7749%3A0xab364c66fd4834c!2sBirla%20Vishvakarma%20Mahavidyalaya%20(BVM)!5e0!3m2!1sen!2sin!4v1772887979597!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-card rounded-3xl p-8 border border-border shadow-sm h-fit"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Full Name</label>
              <input
                id="name"
                className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email Address</label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none"
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none resize-none"
                placeholder="How can we help you?"
              />
            </div>
            <button className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-bold text-primary-foreground bg-primary rounded-xl hover:bg-primary/90 transition-transform active:scale-95">
              Send Message
              <Send size={18} className="ml-2" />
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  )
}

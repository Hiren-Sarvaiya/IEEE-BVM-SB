import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <span className="font-bold text-xl text-primary mb-4 block">IEEE BVM SB</span>
            <p className="text-muted-foreground max-w-sm">
              Empowering students through technology, innovation, and professional development at Birla Vishvakarma Mahavidyalaya.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/teams" className="text-muted-foreground hover:text-primary transition-colors">Our Team</Link></li>
              <li><Link href="/events" className="text-muted-foreground hover:text-primary transition-colors">Events</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Societies</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Computer Society</li>
              <li className="text-muted-foreground">Women In Engineering</li>
              <li className="text-muted-foreground">Nuclear & Plasma Sciences</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} IEEE BVM Student Branch. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <span className="font-bold text-xl text-primary mb-4 block">IEEE CS BVM SBC</span>
            <p className="text-muted-foreground max-w-sm">
              Advancing computer science and technology through innovation, collaboration, and professional development at BVM.
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} IEEE CS BVM SBC BVM Chapter. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

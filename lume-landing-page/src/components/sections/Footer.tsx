export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-6 py-12 md:flex-row md:justify-center ">
          {/* Left side - Logo & Text */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {new Date().getFullYear()} Your Company. All rights reserved.</span>
          </div>

          {/* Center - Links */}
          <nav className="flex gap-6 text-sm">
            <a href="#features" className="hover:text-primary">
              Features
            </a>
            <a href="#pricing" className="hover:text-primary">
              Pricing
            </a>
            <a href="#about" className="hover:text-primary">
              About
            </a>
            <a href="#contact" className="hover:text-primary">
              Contact
            </a>
          </nav>

          {/* Right side - Socials */}
          <div className="flex gap-4">
            {/* Social icons remain the same */}
          </div>
        </div>
      </div>
    </footer>

  )
}

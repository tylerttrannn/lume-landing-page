export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
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
            <a href="#" aria-label="Twitter" className="hover:text-primary">
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 5.92c-.77.35-1.6.58-2.47.69a4.3 4.3 0 001.88-2.37 8.54 8.54 0 01-2.72 1.04 4.27 4.27 0 00-7.27 3.89A12.13 12.13 0 013 4.9a4.27 4.27 0 001.32 5.7 4.2 4.2 0 01-1.93-.54v.06a4.27 4.27 0 003.43 4.18 4.3 4.3 0 01-1.92.07 4.27 4.27 0 003.99 2.97A8.57 8.57 0 012 19.54a12.1 12.1 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19-.01-.38-.02-.57A8.73 8.73 0 0022 5.92z" />
              </svg>
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-primary">
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 .5a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.01c-3.34.73-4.04-1.61-4.04-1.61a3.2 3.2 0 00-1.34-1.76c-1.09-.75.09-.74.09-.74a2.54 2.54 0 011.85 1.24 2.57 2.57 0 003.5 1 2.56 2.56 0 01.76-1.61c-2.67-.3-5.47-1.34-5.47-5.97a4.7 4.7 0 011.25-3.25 4.37 4.37 0 01.12-3.2s1.01-.32 3.3 1.24a11.42 11.42 0 016 0c2.28-1.56 3.3-1.24 3.3-1.24a4.37 4.37 0 01.12 3.2 4.7 4.7 0 011.25 3.25c0 4.64-2.81 5.66-5.48 5.96a2.87 2.87 0 01.82 2.23v3.3c0 .32.22.7.82.58A12 12 0 0012 .5z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

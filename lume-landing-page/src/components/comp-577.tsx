import { useState } from "react"
import Logo from "../logo.png"
import { Button } from "@/components/ui/button"


const navigationLinks = ["Home", "Features", "Pricing", "About"]

export default function Component() {
  const [activeLink, setActiveLink] = useState("Home")

  return (
  <header className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[95%] max-w-7xl z-50 backdrop-blur-md bg-white/80 shadow-xl rounded-xl border border-gray-200 px-6">
    <div className="flex h-16 items-center justify-between">
      {/* Left: Logo + Name */}
      <div className="flex items-center gap-2">
        <img src={Logo} alt="Logo" className="h-8 w-auto" />
        <span className="text-xl font-bold text-primary">Lume</span>
      </div>

      {/* Center: Nav Links */}
      <div className="flex gap-6 mx-auto max-md:hidden">
        {navigationLinks.map((label, index) => (
          <span
            key={index}
            onClick={() => setActiveLink(label)}
            className={`cursor-pointer py-1.5 font-medium ${
              activeLink === label
                ? "text-primary"
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            {label}
          </span>
        ))}
      </div>

      {/* Right: Action Buttons */}
      <div className="flex items-center gap-2">

        <Button size="sm" className="text-sm">
          Download
        </Button>
      </div>
    </div>
  </header>


  )
}

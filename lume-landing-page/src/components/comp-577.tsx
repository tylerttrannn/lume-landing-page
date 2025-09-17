import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Logo from "../logo.png";
import AppleLogo from "../assets/apple.png";
import { Button } from "@/components/ui/button";

const navigationLinks = [
  { label: "Home", id: "home" },
  { label: "Features", id: "features" },
  { label: "Pricing", id: "pricing" },
  { label: "Support", id: "support" },
];

export default function Component() {
  const [activeLink, setActiveLink] = useState("Home");
  const navigate = useNavigate(); // hook to navigate

  const handleScroll = (id: string, label: string) => {
    if (id === "support") {
      navigate("/support"); 
      setActiveLink(label);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveLink(label);
    }
  };

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[95%] max-w-7xl z-50 backdrop-blur-md bg-white/80 shadow-xl rounded-xl border border-gray-200 px-6">
      <div className="flex h-16 items-center justify-between">
        {/* Left: Logo + Name */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="h-8 w-auto" />
          <span className="text-xl font-medium text-primary">Lume</span>
        </div>

        {/* Center: Nav Links */}
        <div className="flex gap-6 mx-auto max-md:hidden">
          {navigationLinks.map((link, index) => (
            <span
              key={index}
              onClick={() => handleScroll(link.id, link.label)}
              className={`cursor-pointer py-1.5 font-medium ${
                activeLink === link.label
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.label}
            </span>
          ))}
        </div>

        {/* Right: Action Buttons */}
        <div className="flex items-center gap-2">
          <Button size="sm" className="text-sm flex items-center gap-2">
            <img src={AppleLogo} alt="Apple" className="max-h-4 w-auto" />
            Download
          </Button>
        </div>
      </div>
    </header>
  );
}

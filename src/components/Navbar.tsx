import { useEffect } from "react";

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
}

export const Navbar = ({ menuOpen, setMenuOpen }: NavbarProps) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            .Rizky<span className="text-green-500">Norafandi</span>
          </a>

          {/* Mobile menu button */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden flex items-center justify-center"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#project"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Project
            </a>
            {/* <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

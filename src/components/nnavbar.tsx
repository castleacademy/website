import { PhoneIcon, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { cn } from "~/lib/utils";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 z-50 flex items-center justify-between rounded-[10px] px-6 py-3 transition-all duration-500 ease-out",
        "top-3 mx-3 sm:top-8 sm:mx-8 lg:right-8 lg:left-8 lg:mx-auto lg:max-w-[1536px]",
        isScrolled
          ? "mx-5 shadow-xl sm:mx-7 md:px-6 lg:mx-auto lg:max-w-[1300px] bg-white"
          : "bg-transparent",
        isMobileMenuOpen && "rounded-t-[10px] rounded-b-[0px] bg-white"
      )}
    >
      <div className="flex w-full items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center select-none">
          <span
            className={cn(
              "font-bold text-sm sm:text-base transition-all duration-500 ease-out",
              isScrolled ? "text-blue-600" : "text-white"
            )}
          >
            Castle
            <br />
          Academy
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <a
            href="#"
            className="text-gray-700 hover:text-[#11BEF9] transition-colors font-medium"
          >
            Katalog Kursus
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-[#11BEF9] transition-colors font-medium"
          >
            Tutor-Tutor
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-[#11BEF9] transition-colors font-medium"
          >
            Pusat Bantuan
          </a>
        </nav>

        {/* Desktop CTA Button */}
        <a href="#" className="hidden lg:block">
          <Button
            variant="embossed"
            className="bg-[#3D6DBA] hover:bg-[#2D5DAA]"
          >
            <span>Hubungi Kami</span>
            <PhoneIcon className="size-4 ml-2" />
          </Button>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={
            isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"
          }
        >
          {isMobileMenuOpen ? (
            <X size={24} aria-hidden="true" />
          ) : (
            <Menu size={24} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "absolute top-full right-0 left-0 bg-white rounded-b-[10px] shadow-xl transition-all duration-300 ease-in-out lg:hidden",
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        )}
      >
        <nav className="flex flex-col p-4 space-y-2">
          <a
            href="#"
            className="rounded-md px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Katalog Kursus
          </a>
          <a
            href="#"
            className="rounded-md px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Tutor-Tutor
          </a>
          <a
            href="#"
            className="rounded-md px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pusat Bantuan
          </a>
          <div className="pt-4 border-t border-gray-200">
            <Button
              variant="embossed"
              className="w-full bg-[#3D6DBA] hover:bg-[#2D5DAA] justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Hubungi Kami</span>
              <PhoneIcon className="size-4 ml-2" />
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

import { useEffect, useState } from "react";
import { cn } from "~/lib/utils";
import { Logo } from "./logo";
import { NavLinks } from "./nav-links";
import { CTAButton } from "./cta-button";
import { MobileMenuButton } from "./mobile-menu-button";
import { MobileMenu } from "./mobile-menu";

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
          ? "mx-5 shadow-lg sm:mx-7 md:px-4 lg:mx-auto lg:max-w-[1262.5px] bg-white outline"
          : "bg-transparent",
        isMobileMenuOpen && "rounded-t-[10px] rounded-b-[0px] bg-white"
      )}
    >
      <div className="flex w-full items-center justify-between">
        <Logo isScrolled={isScrolled} />
        <NavLinks />
        <CTAButton />
        <MobileMenuButton
          isOpen={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
      </div>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
};

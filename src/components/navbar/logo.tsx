import { cn } from "~/lib/utils";

interface LogoProps {
  isScrolled: boolean;
}

export const Logo = ({ isScrolled }: LogoProps) => {
  return (
    <a href="/" className="flex items-center select-none">
      <span
        className={cn(
          "font-bold text-sm sm:text-base transition-all duration-500 ease-out",
          isScrolled ? "text-blue-600" : "text-blue-600 lg:text-white"
        )}
      >
        Castle Academy
      </span>
    </a>
  );
};

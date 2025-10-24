import { cn } from "~/lib/utils";

interface LogoProps {
  isScrolled: boolean;
}

export const Logo = ({ isScrolled }: LogoProps) => {
  return (
    <a href="/" className="flex items-center select-none">
      <span
        className={cn(
          "font-medium text-xl lg:text-2xl transition-all duration-500 ease-out font-serif",
          isScrolled ? "text-blue-600" : "text-blue-600 lg:text-white"
        )}
      >
        Castle Academy
      </span>
    </a>
  );
};

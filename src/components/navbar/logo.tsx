import { cn } from "~/lib/utils";

interface LogoProps {
  isScrolled: boolean;
}

export const Logo = ({ isScrolled }: LogoProps) => {
  return (
    <a href="/" className="flex items-center select-none">
      <span
        className={cn(
          "font-bold text-sm sm:text-xl transition-all duration-500 ease-out"
        )}
      >
        {/* Castle Academy */}
        <img
          src="/src/assets/logo.svg"
          alt="Castle Academy"
          className="w-auto h-11"
          style={{
            filter: isScrolled
              ? "brightness(0) saturate(100%) invert(70%) sepia(98%) saturate(5821%) hue-rotate(180deg) brightness(101%) contrast(101%)" // #11befa
              : "brightness(0) saturate(100%) invert(100%)", // white
          }}
        />
      </span>
    </a>
  );
};

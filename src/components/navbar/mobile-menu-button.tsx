import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const MobileMenuButton = ({
  isOpen,
  onClick,
}: MobileMenuButtonProps) => {
  return (
    <button
      className="lg:hidden p-2 text-gray-700"
      onClick={onClick}
      aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
    >
      <Button variant="embossed" size="icon">
        {isOpen ? (
          <X className="size-5" aria-hidden="true" />
        ) : (
          <Menu className="size-5" aria-hidden="true" />
        )}
      </Button>
    </button>
  );
};

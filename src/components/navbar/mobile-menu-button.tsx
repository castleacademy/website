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
    <Button
      variant="embossed"
      size="icon"
      className="lg:hidden p-2 white"
      onClick={onClick}
      aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
    >
      {isOpen ? (
        <X className="size-5" aria-hidden="true" />
      ) : (
        <Menu className="size-5" aria-hidden="true" />
      )}
    </Button>
  );
};

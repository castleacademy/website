import { PhoneIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

const MOBILE_NAV_ITEMS = [
  { label: "Katalog Kursus", href: "#" },
  { label: "Tutor-Tutor", href: "#" },
  { label: "Pusat Bantuan", href: "#" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <div
      className={cn(
        "absolute top-full right-0 left-0 bg-white rounded-b-[10px] shadow-xl transition-all duration-300 ease-in-out lg:hidden",
        isOpen
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-2 opacity-0",
      )}
    >
      <nav className="flex flex-col p-4 space-y-2">
        {MOBILE_NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="rounded-md px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors font-medium"
            onClick={onClose}
          >
            {item.label}
          </a>
        ))}
        <div className="pt-4 border-t border-gray-200">
          <Button
            variant="embossed"
            className="w-full bg-[#3D6DBA] hover:bg-[#2D5DAA] justify-center"
            onClick={onClose}
          >
            <span>Hubungi Kami</span>
            <PhoneIcon className="size-4 ml-2" />
          </Button>
        </div>
      </nav>
    </div>
  );
};

import { PhoneIcon } from "lucide-react";
import { Button } from "~/components/ui/button";

export const CTAButton = () => {
  return (
    <a href="#" className="hidden lg:block">
      <Button variant="embossed" className="bg-[#3D6DBA] hover:bg-[#2D5DAA]">
        <span>Hubungi Kami</span>
        <PhoneIcon className="size-4 ml-2" />
      </Button>
    </a>
  );
};

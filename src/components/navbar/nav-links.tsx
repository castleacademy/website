const NAV_ITEMS = [
  { label: "Katalog Kursus", href: "/kursus" },
  { label: "Tutor-Tutor", href: "/tutor" },
  { label: "Pusat Bantuan", href: "/bantuan" },
];

export const NavLinks = () => {
  return (
    <nav className="hidden lg:flex items-center gap-6">
      {NAV_ITEMS.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="text-gray-700 hover:text-[#11BEF9] transition-colors font-medium"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

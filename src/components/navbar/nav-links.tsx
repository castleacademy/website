const NAV_ITEMS = [
  { label: "Katalog Kursus", href: "#" },
  { label: "Tutor-Tutor", href: "#" },
  { label: "Pusat Bantuan", href: "#" },
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

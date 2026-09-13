import NavLink from "./NavLink";

interface NavlinkContainerProps {
  isMobile: boolean;
}

export default function NavlinkContainer({ isMobile }: NavlinkContainerProps) {
  const navlinks = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Blog", path: "/blog" },
    { label: "About Us", path: "/about" },
    { label: "Contact Us", path: "/contact" },
    { label: "API", path: "/api" },
  ];
  
  return (
    <ul 
    className={`${isMobile} ? "menu menu-sm dropdown-content rounded-box z-1 mt-3 p-2 shadow" : "flex gap-6 menu menu-horizontal px-1"}`}
    >
      {navlinks.map((link) => (
        <NavLink key={link.path} label={link.label} path={link.path} />
      ))}
    </ul>
  );
}

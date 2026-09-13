'use client'
 
import { usePathname } from 'next/navigation'

interface NavLinkProps {
  label: string;
  path: string;
}

export default function NavLink({ label, path }: NavLinkProps) {
  const currpath = usePathname();

  return (
    <li
      className={
        currpath === path
          ? "text-[#FF6B00] font-bold hover:-translate-y-0.5 hover:cursor-pointer transition-transform duration-300"
          : "text-[#393939] font-medium hover:-translate-y-0.5 hover:cursor-pointer transition-transform duration-300"
      }
    >
      {label}
    </li>
  );
}

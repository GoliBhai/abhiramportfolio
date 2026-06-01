"use client";

import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("");

  const links = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 right-0 z-50 p-6">
      <div className="flex gap-6 text-sm text-slate-400">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setActive(link.name)}
            className={`
              relative px-3 py-1 rounded-md transition-all duration-300
              hover:text-[#64ffda]
              hover:scale-110 hover:bg-slate-800/40
              active:scale-95
              ${active === link.name ? "text-[#64ffda]" : ""}
            `}
          >
            {link.name}

            {/* underline indicator */}
            <span
              className={`
                absolute left-0 -bottom-1 h-[2px] w-full bg-[#64ffda]
                transform scale-x-0 origin-left transition-transform duration-300
                group-hover:scale-x-100
              `}
            />
          </a>
        ))}
      </div>
    </nav>
  );
}
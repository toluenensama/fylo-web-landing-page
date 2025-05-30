import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Features", href: "#" },
  { name: "Teams", href: "#" },
  { name: "Sign In", href: "#" },
];

export function NavBar() {


 

  return (
    <>
      <nav
        className={cn(
          "bg-navy-800 px-3 md:px-6 w-full z-40 transition-all duration-300",
          "py-5"
        )}
      >
        <div className="px-4 flex items-center justify-between">
          <a className="font-bold flex items-center" href="#hero">
            <img src="/images/logo.svg" alt="" className="h-8 w-fit" />
          </a>

          <div className="flex space-x-4 md:space-x-8">
            {navItems.map((items, key) => (
              <a
                href={items.href}
                key={key}
                className="text-white font-raleway-reg text-sm hover:text-primary transition-colors duration-300"
              >
                {items.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

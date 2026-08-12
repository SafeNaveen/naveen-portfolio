"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const sections = navItems
      .map((item) =>
        document.getElementById(item.href.replace("#", ""))
      )
      .filter(Boolean) as HTMLElement[];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      let currentSection = "home";

      sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl"
      role="banner"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}

        <a
          href="#home"
          onClick={closeMenu}
          aria-label="Naveen Kumar - Go to homepage"
          className="text-3xl font-extrabold tracking-wide text-cyan-400 transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
        >
          NK
        </a>

        {/* Desktop Navigation */}

        <nav
          aria-label="Primary navigation"
          className="hidden md:block"
        >
          <ul className="flex items-center gap-8 text-sm font-medium">

            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative rounded-sm transition focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                      isActive
                        ? "text-cyan-400"
                        : "text-gray-300 hover:text-cyan-400"
                    }`}
                  >
                    {item.name}

                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-cyan-400"
                      />
                    )}
                  </a>
                </li>
              );
            })}

          </ul>
        </nav>

        {/* Mobile Menu Button */}

        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((previous) => !previous)}
          className="rounded-lg border border-white/10 p-2 text-cyan-400 transition hover:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 md:hidden"
        >
          {isOpen ? (
            <X
              size={26}
              aria-hidden="true"
            />
          ) : (
            <Menu
              size={26}
              aria-hidden="true"
            />
          )}
        </button>

      </div>

      {/* Mobile Navigation */}

      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-black/95 px-6 py-6 md:hidden"
        >
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col gap-5 text-center">

              {navItems.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      aria-current={isActive ? "page" : undefined}
                      className={`block rounded-md py-1 transition focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                        isActive
                          ? "font-semibold text-cyan-400"
                          : "text-gray-300 hover:text-cyan-400"
                      }`}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}

            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
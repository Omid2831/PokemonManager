import React, { useState } from "react";
import { Link } from "react-router-dom";


const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Metadata
  type Metadata = {
    title: string;
    description: string;
  };
  const metadata: Metadata = {
    title: "Pokemon Team Manager",
    description: "Pokemon Team Manager is a tool to manage your Pokémon teams.",
  };

  // Menu Data
  type MenuItem = {
    name: string;
    href: string;
  };
  const menuItems: MenuItem[] = [
    { name: "Home", href: "/" },
    { name: "Teams", href: "/teams" },
    { name: "About", href: "/about" },
    { name: "Favorites", href: "/favorites" },
  ];

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-background/95 backdrop-blur border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center h-14 w-full">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <span className="text-text font-bold">⚡</span>
            <span className="text-text font-bold cursor-pointer">{metadata.title}</span>
          </div>

          {/* Desktop Navigation (centered) */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-text/80 hover:text-text px-1 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  onClick={handleMenuItemClick}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          
          {/* Mobile menu button */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text hover:text-primary inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6 `}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/95 backdrop-blur border-t border-white/10">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-text/80 hover:text-text block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={handleMenuItemClick}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 pb-3 border-t border-white/10 px-3">
            <a href="#Contact" onClick={handleMenuItemClick} className="w-full inline-block text-text bg-white/10 hover:bg-white/20 px-3 py-2 rounded-xl text-base font-medium transition-colors duration-200 text-center">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

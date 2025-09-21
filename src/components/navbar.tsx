"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 10);
      
      // Prevent navbar from hiding on mobile when swiping up
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setLastScrollY(currentScrollY);
      } else {
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: "Destinations", href: "/destinations" },
    { name: "Packages", href: "/packages" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20 min-h-[64px]">
          {/* Logo - Mobile Optimized */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group flex-1 min-w-0">
            <div className="group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
              <img 
                src="/logokhavishtravel-removebg-preview.png" 
                alt="Khavish World Logo" 
                className="h-8 sm:h-10 lg:h-12 w-auto object-contain"
                style={{ maxWidth: '60px', height: 'auto' }}
              />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-heading font-bold text-gradient text-center flex-1">
              Khavish World
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink asChild>
                      <Link 
                        href={item.href}
                        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button className="gold-button px-6 py-2" asChild>
              <Link href="/contact">
                Book Now
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex-shrink-0 ml-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 h-10 w-10"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-3 pt-3 pb-4 space-y-1 bg-white rounded-lg shadow-lg mt-2 border border-gray-100 mx-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-3">
                <Button className="gold-button w-full" asChild>
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Book Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

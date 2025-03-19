import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { DivideIcon as LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function NavBar({ items, className }: NavBarProps) {
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // Determine active tab based on current location
  const getActiveTab = () => {
    // Special case for home page
    if (location.pathname === '/' || location.pathname === '/en') {
      return '';
    }
    
    return items.find(item => {
      // Remove language prefix for comparison
      const currentPath = location.pathname.replace('/en', '');
      const itemPath = item.url.replace('/en', '');
      return currentPath === itemPath;
    })?.name || '';
  };

  const activeTab = getActiveTab();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 z-50 mb-6 sm:pt-6",
        className,
      )}
    >
      <div className="flex items-center justify-center gap-3 bg-white/5 border-[0.5px] border-gray-100/10 backdrop-blur-sm py-1 px-1 rounded-full shadow-sm">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <Link
              key={item.name}
              to={item.url}
              className={cn(
                "relative cursor-pointer text-sm font-medium px-6 py-2 rounded-full transition-colors whitespace-nowrap",
                "text-gray-600 hover:text-blue-600",
                isActive && "bg-blue-50/50 text-blue-600",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-blue-50/30 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-blue-500/20 rounded-t-full">
                    <div className="absolute w-12 h-6 bg-blue-400/10 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-blue-400/10 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-blue-400/10 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
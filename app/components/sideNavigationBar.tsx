// components/SideNavigationBar.tsx
import React, { ReactNode } from "react";
import Link from "next/link";

interface SideNavigationBarProps {
  children: ReactNode;
}

const SideNavigationBar: React.FC<SideNavigationBarProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <nav className="w-64 bg-gray-800 p-4">
        <ul className="space-y-2">
          {/* Add more navigation links as needed */}

          <li>
            <Link href="/webForm" className="text-white hover:text-gray-300">
              Faz o teu Seguro
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex-1 p-4">{children}</div>
    </div>
  );
};

export default SideNavigationBar;

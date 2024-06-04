import Link from "next/link";
import { ConstructionIcon } from "./icons/AllIcons";

export function Header() {
    
  return (
    <header className="fixed top-0 z-50 w-full bg-transparent">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <ConstructionIcon className="h-8 w-8" />
          <span className="text-xl font-bold">S.W.P Construction</span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            <li>
              <Link href="#" className="text-sm font-medium hover:text-blue-600" prefetch={false}>
                Services
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm font-medium hover:text-blue-600" prefetch={false}>
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm font-medium hover:text-blue-600" prefetch={false}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
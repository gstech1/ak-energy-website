// ==========================================
// SECTION 1 - IMPORTS
// ==========================================

import { Phone, Mail, Globe } from "lucide-react";

// ==========================================
// SECTION 2 - COMPONENT
// ==========================================

export default function TopBar() {
  return (
    <div className="hidden lg:block w-full bg-green-900 text-white text-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">

        {/* Left */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone size={14} />
            <span>+95 9 777 499 600</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={14} />
            <span>info@arkarminthuka.com</span>
          </div>
        </div>

        {/* Right */}
        <button className="flex items-center gap-2 hover:text-green-300 transition">
          <Globe size={14} />
          <span>EN | မြန်မာ</span>
        </button>

      </div>
    </div>
  );
}
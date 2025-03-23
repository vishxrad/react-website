import React from "react";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-8 border-b shadow-sm w-full py-2" >
      {/* Logo */}
      <div className="text-2xl font-bold flex items-center cursor-pointer">
        <img 
          src="/logo.png" 
          alt="Logo" 
          className="h-8 w-8 scale-250 mr-2 transition-transform duration-300 hover:scale-325"
        />
        <span>Jagdish Kashyap</span>
      </div>

      {/* Navigation Links + Button */}
      <div className="flex items-center space-x-6 text-base font-medium">
        <a href="#" className="hover:underline">Online Courses</a>
        <a href="#" className="hover:underline">Offline Batches</a>
        <a href="#" className="hover:underline">How to reach us?</a>

        <Button
          variant="outline"
          className="rounded-full border-black hover:bg-black hover:text-white transition duration-200 cursor-pointer text-base py-1"
        >
          Contact Us
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-6 px-6 flex items-center justify-center text-center">
      
      {/* Logo & Copyright (Same Line) */}
      <div className="flex flex-row items-center gap-4">
        <h2 className="text-md md:text-2xl font-bold text-orange-500">Bharat Tex 2025</h2>
        <p className="text-sm md:text-lg text-gray-400">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

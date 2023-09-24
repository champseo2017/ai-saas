"use client";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="flex h-full flex-col space-y-4 bg-[#111827] py-4 text-white">
      <div className="flex-1 px-3 py-2">
        <Link href="/dashboard" className="mb-14 flex items-center pl-3">
          <div className="relative mr-4 h-8 w-8">
            <Image
              fill
              alt="Logo"
              src="/image/logo.png"
              sizes="(max-width: 640px) 100px, (max-width: 1024px) 150px, 200px"
            />
          </div>
          <h1 className="text-2xl font-bold">Genius</h1>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

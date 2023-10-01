"use client";
import { useState, useEffect, useLayoutEffect } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
// const Button = dynamic(
//   () => import("@/components/ui/button").then((mod) => mod.Button),
//   { ssr: false },
// );
import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Sidebar from "@/components/sidebar";

const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => {};
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Button asChild variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;

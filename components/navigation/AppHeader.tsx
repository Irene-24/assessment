"use client";

import React from "react";
import { useSidebar } from "@/components/ui/sidebar";
import { SidebarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const AppHeader = () => {
  const { toggleSidebar, open, isMobile } = useSidebar();

  return (
    <header
      className={cn(
        "flex fixed left-0 right-0 top-0 z-50 items-center border-b bg-card",
        {
          "left-(--sidebar-width-icon)": !open && !isMobile,
          "left-(--sidebar-width)": open && !isMobile,
          "left-0": isMobile,
        }
      )}
    >
      <Button
        className="h-8 w-8"
        variant="ghost"
        size="icon"
        onClick={toggleSidebar}
      >
        <SidebarIcon />
      </Button>
    </header>
  );
};

export default AppHeader;

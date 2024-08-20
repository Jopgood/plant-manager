"use client";

// Core Utils
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

// External Components
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

// Icons
import { Leaf, Settings, SquareMenu, LayoutDashboard } from "lucide-react";

export default function SidebarComponent() {
  // Set Router
  const pathname = usePathname();

  return (
    <>
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
        <Link
          href="/dashboard"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Leaf className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Plant Manager</span>
        </Link>

        {/* Routes */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/plots"
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                  pathname == "/plots" ? "bg-primary/10" : ""
                )}
              >
                <LayoutDashboard className="h-5 w-5" />
                <span className="sr-only">Plots</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Plots</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/inventory"
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                  pathname == "/inventory" ? "bg-primary/10" : ""
                )}
              >
                <SquareMenu className="h-5 w-5" />
                <span className="sr-only">Inventory</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Inventory</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>

      {/* Settings */}
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </>
  );
}

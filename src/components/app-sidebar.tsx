"use client";
import { Calendar, Home, Inbox, NotebookPen, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { usePathname } from "next/navigation"

// Menu items.
const items = [
  {
    title: "Home",
    path: "/dashboard",
    icon: Home,
  },
  {
    title: "Todos",
    path: "/dashboard/rest-todos",
    icon: NotebookPen,
  },
  {
    title: "Calendar",
    path: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    path: "#",
    icon: Search,
  },
  {
    title: "Settings",
    path: "#",
    icon: Settings,
  },
]

export function AppSidebar() {

  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarContent  className="">
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton className={`${item.path === pathname ? 'text-white bg-gradient-to-r from-sky-600 to-cyan-400 hover:text-white' : ''} `} asChild>
                    <Link href={item.path}>
                      <item.icon />
                      {item.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
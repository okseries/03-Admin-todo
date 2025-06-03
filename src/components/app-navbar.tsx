"use client"

import * as React from "react"
import Link from "next/link"
import { SidebarTrigger } from "./ui/sidebar"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"

export function Nabvar() {
  return (
    <NavigationMenu className="w-full shadow  h-16 px-6">
          <SidebarTrigger />
      
    </NavigationMenu>
  )
}
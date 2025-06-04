import { AppSidebar, Nabvar } from '@/components'
import { SidebarProvider } from '@/components/ui/sidebar'
import { Toaster } from "@/components/ui/sonner"
import React from 'react'

interface DashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="flex w-screen h-screen overflow-hidden">
        <AppSidebar />

        <div className="flex flex-col flex-1 min-w-0 h-full">
          <Nabvar />

          <main className="flex-1 overflow-y-auto overflow-x-hidden min-w-0 p-6">
            {children}
          </main>
            <Toaster richColors  />
        </div>
      </div>
    </SidebarProvider>
  )
}

export default DashboardLayout

interface HomeLayoutProps {
    children: React.ReactNode;
}

import { SidebarProvider } from '@/components/ui/sidebar';
import { HomeNavbar } from '@/modules/components/home-navbar';
import { HomeSidebar } from '@/modules/components/home-sidebar';
import React from 'react'

export const HomeLayout = ({children }: HomeLayoutProps) => {
  return (
    <>
    <SidebarProvider>
        <div className=''>
            <HomeNavbar/>
        </div>
        <div className='flex min-h-screen pt-[4rem] left-0 w-full'>
            <HomeSidebar/>
            <main className='flex overflow-y-auto overflow-x-hidden w-full'>
            {children}
            </main>
        </div>
    </SidebarProvider>
    </>
  )
}

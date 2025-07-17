interface StudioLayoutProps {
    children: React.ReactNode;
}

import { SidebarProvider } from '@/components/ui/sidebar';
import { StudioNavbar } from '@/modules/studio/ui/components/studio-navbar';
import React from 'react'
import { StudioSidebar } from '../components/studio-sidebar';

export const StudioLayout = ({children }: StudioLayoutProps) => {
  return (
    <>
    <SidebarProvider>
        <div className=''>
            <StudioNavbar/>
        </div>
        <div className='flex min-h-screen pt-[4rem] left-0'>
            <StudioSidebar/>
            <main className='flex overflow-y-auto overflow-x-hidden w-full relative'>
            {children}
            </main>
        </div>
    </SidebarProvider>
    </>
  )
}

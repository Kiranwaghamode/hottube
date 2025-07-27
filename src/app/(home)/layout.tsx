interface LayoutProps {
    children: React.ReactNode;
}
import { HomeLayout } from '@/modules/home/ui/layouts/home-layout';
import React from 'react'
export const dynamic = 'force-dynamic';


const layout = ({children }: LayoutProps) => {
  return (
    <HomeLayout>
        {children}
    </HomeLayout>
  )
}

export default layout
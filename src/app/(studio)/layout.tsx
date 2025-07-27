interface LayoutProps {
    children: React.ReactNode;
}
import { StudioLayout } from '@/modules/studio/ui/layouts/studio-layout';
import React from 'react'
export const dynamic = 'force-dynamic';


const layout = ({children }: LayoutProps) => {
  return (
    <StudioLayout>
        {children}
    </StudioLayout>
  )
}

export default layout
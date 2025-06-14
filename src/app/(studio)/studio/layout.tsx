interface LayoutProps {
    children: React.ReactNode;
}
import { StudioLayout } from '@/modules/studio/ui/layouts/studio-layout';
import React from 'react'

const layout = ({children }: LayoutProps) => {
  return (
    <StudioLayout>
        {children}
    </StudioLayout>
  )
}

export default layout
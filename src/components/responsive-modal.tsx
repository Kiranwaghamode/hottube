import { useIsMobile } from "@/hooks/use-mobile";
import React from "react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "./ui/drawer";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";


interface ResponsiveModalProps {
    children: React.ReactNode,
    open: boolean,
    title: string,
    onOpenChange: (open: boolean)=>void
}

export const ResponsiveModal = ({
    children,
    open,
    title,
    onOpenChange
}: ResponsiveModalProps) =>{

    const isMobile = useIsMobile()

    if(isMobile){
        return (
            <Drawer open={open} onOpenChange={onOpenChange}>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>
                            {title}
                        </DrawerTitle>
                    </DrawerHeader>
                    {children}
                </DrawerContent>
            </Drawer>
        )
    }

    return (

        <div>
        <Dialog open={open} onOpenChange={onOpenChange} >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {title}
                    </DialogTitle>
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
        </div>

        // <Dialog>
        // <DialogTrigger>Open</DialogTrigger>
        // <DialogContent>
        //     <DialogHeader>
        //     <DialogTitle>Are you absolutely sure?</DialogTitle>
        //     <DialogDescription>
        //         This action cannot be undone. This will permanently delete your account
        //         and remove your data from our servers.
        //     </DialogDescription>
        //     </DialogHeader>
        // </DialogContent>
        // </Dialog>
    )


}
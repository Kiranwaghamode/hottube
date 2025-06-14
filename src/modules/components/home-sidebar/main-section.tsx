"use client";

import { SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Flame, HomeIcon, PlaySquareIcon } from "lucide-react";
import { useClerk, useAuth } from "@clerk/nextjs";
import Link from "next/link";

const items = [
    {
        title: "Home",
        url: '/',
        icon: HomeIcon
    },
    {
        title: "Subscriptions",
        url: '/feed/subscriptions',
        icon: PlaySquareIcon,
        auth: true
    },
    {
        title: "Trending",
        url: '/feed/trending',
        icon: Flame
    }
]


export const MainSection = () =>{

    const clerk = useClerk()
    const { isSignedIn } = useAuth()


    return(
        <SidebarGroup>
            <SidebarGroupContent>
                <SidebarMenu>
                    {
                        items.map((item)=>(
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton 
                                tooltip={item.title}
                                asChild
                                isActive={false}
                                onClick={(e)=>{
                                    if(!isSignedIn && item.auth){
                                        e.preventDefault();
                                        clerk.openSignIn();
                                    }
                                }}
                                >
                                <Link href={item.url} className="flex items-center gap-4">
                                <item.icon/>
                                <span className="text-sm">{item.title}</span>
                                </Link>

                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))
                    }
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}
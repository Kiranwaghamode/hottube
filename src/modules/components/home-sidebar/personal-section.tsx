"use client";

import { SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { useAuth } from "@clerk/clerk-react";
import { useClerk } from "@clerk/nextjs";
import { Flame, HistoryIcon, HomeIcon, ListVideoIcon, PlaySquareIcon, ThumbsUpIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
    {
        title: "History",
        url: '/playlists/history',
        icon: HistoryIcon,
        auth: true
    },
    {
        title: "Liked Videos",
        url: '/playlists/liked',
        icon: ThumbsUpIcon,
        auth: true
    },
    {
        title: "All Playlists",
        url: '/playlists',
        icon: ListVideoIcon,
        auth: true
    }
]


export const PersonalSection = () =>{
    const clerk = useClerk()
    const { isSignedIn } = useAuth()
    const pathName = usePathname()

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
                                isActive={pathName === item.url}
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
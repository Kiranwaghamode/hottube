"use client";


import { Button } from "@/components/ui/button"
import { Clapperboard, UserCircleIcon } from "lucide-react"
import {UserButton, SignInButton, SignedIn, SignedOut} from "@clerk/nextjs"

export const AuthButton = () =>{
    return (
        <>
        <SignedIn >
            <UserButton>
                <UserButton.MenuItems>
                    <UserButton.Link 
                    label="Studio"
                    href="/studio"
                    labelIcon={<Clapperboard className="size-4"/>}
                    />
                </UserButton.MenuItems>
            </UserButton>
        </SignedIn>
        <SignedOut>
            <SignInButton mode="modal">
                <Button
                variant="outline"
                className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/5 rounded-full shadow-none"
                >
                    <UserCircleIcon/>
                    Sign In
                </Button>
            </SignInButton>
        </SignedOut>
        </>
    )
}
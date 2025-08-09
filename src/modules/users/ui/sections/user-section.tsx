"use client"

import { trpc } from "@/trpc/client";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { UserPageBanner } from "../components/user-page-banner";

interface UserSectionProps {
    userId: string;
}


export const UserSection = ({ userId }: UserSectionProps) =>{
    return (
       <Suspense fallback={<p>Loading...</p>}>
            <ErrorBoundary fallback={<p>Error...</p>}>
                <UserSectionSuspense userId={userId}/>
            </ErrorBoundary>
       </Suspense>
    )
}

const UserSectionSuspense = ({userId}:UserSectionProps) =>{

    const [user] = trpc.users.getOne.useSuspenseQuery({ id: userId })


    return (
        <div className="flex flex-col">
           <UserPageBanner   user={user}/>
        </div>
    )
}
import { UserAvatar } from "@/components/user-avatar";
import { UserGetOneOutput } from "../../types";
import { useAuth, useClerk } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SubscriptionButton } from "@/modules/subscriptions/ui/components/subscription-button";
import { useSubscription } from "@/modules/subscriptions/hooks/use-subscription";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface UserPageInfoProps {
    user: UserGetOneOutput;
}

export const UserPageInfoSkeleton = () =>{
    return (
        <div className="py-6">
            {/* Mobile Layout */}
            <div className="flex flex-col md:hidden ">
                <div className="flex items-center gap-3">
                    <Skeleton className="size-[60px] rounded-full "/>
                    <div className="flex-1 min-w-0">
                        <Skeleton className="h-6 w-32 "/>
                        <Skeleton className="h-4 w-48 mt-1 " />
                    </div>
                </div>
                <Skeleton className="h-10 w-full mt-3 rounded-full"/>
            </div>
            {/* Desktop layout */}
            <div className="hidden items-start gap-4  md:flex">
                <Skeleton className="size-[160px] rounded-full" />
                <div className="flex-1 min-w-0 ">
                    <Skeleton className="h-8 w-64" />
                    <Skeleton className="h-5 w-48 mt-4" />
                    <Skeleton className="h-10 w-32 mt-3 rounded-full" />
                </div>
            </div>
        </div>
    )
}


export const UserPageInfo = ({user}: UserPageInfoProps) =>{

    const { userId, isLoaded } = useAuth();
    const clerk = useClerk();

    const { isPending, onClick } = useSubscription({
        userId: user.id,
        isSubscribed: user.viewerSubscribed,
    })

    return (
        <div className="py-6">
            {/* Mobile Layout */}
            <div className=" flex flex-col md:hidden">
                <div className="flex items-center gap-3 ">
                    <UserAvatar
                    size={'lg'}
                    imageUrl={user.imageUrl}
                    name={user.name}
                    className="size-[60px]"
                    onClick={()=> {
                        if(user.clerkId === userId){
                            clerk.openUserProfile();
                        }
                    }}
                    />
                    <div className="flex-1 min-w-0">
                        <h1 className="text-xl font-bold">{user.name}</h1>
                        <div className="flex items-center mt-1 gap-1 text-xs text-muted-foreground">
                            <span>
                                {user.subscriberCount} Subscribers
                            </span>
                            <span>&bull;</span>
                            <span>
                                {user.videoCount} videos
                            </span>
                        </div>
                    </div>
                </div>
                {userId === user.clerkId ? (
                    <Button
                    variant={'secondary'}
                    asChild
                    className="w-full mt-3 rounded-full"

                    >
                        <Link prefetch href={'/studio'}>
                            Go to studio
                        </Link>
                    </Button>
                ): (
                    <SubscriptionButton
                    disabled={isPending || !isLoaded}
                    isSubscribed={user.viewerSubscribed}
                    onClick={onClick}
                    className='w-full mt-3'
                    />
                )}
            </div>


            {/* Desktop Layout */}
            <div className="hidden items-start gap-4  md:flex">
                <UserAvatar
                size={'xl'}
                imageUrl={user.imageUrl}
                name={user.name}
                className={cn(userId === user.clerkId && "cursor-pointer hover:opacity-80 transition-opacity duration-300")}
                onClick={()=> {
                    if(user.clerkId === userId){
                        clerk.openUserProfile();
                    }
                }}
                />
                <div className="flex-1 min-w-0">
                    <h1 className="text-4xl font-bold">{user.name}</h1>
                    <div className="flex items-center mt-3 gap-1 text-sm text-muted-foreground">
                        <span>
                            {user.subscriberCount} Subscribers
                        </span>
                        <span>&bull;</span>
                        <span>
                            {user.videoCount} videos
                        </span>
                    </div>
                    {userId === user.clerkId ? (
                    <Button
                    variant={'secondary'}
                    asChild
                    className=" mt-3 rounded-full"

                    >
                        <Link prefetch href={'/studio'}>
                            Go to studio
                        </Link>
                    </Button>
                ): (
                    <SubscriptionButton
                    disabled={isPending || !isLoaded}
                    isSubscribed={user.viewerSubscribed}
                    onClick={onClick}
                    className=' mt-3'
                    />
                )}
                </div>
            </div>
        </div>
    )
}
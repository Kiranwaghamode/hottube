'use client'

import { InfiniteScroll } from "@/components/infinite-scroll";
import { DEFAULT_LIMIT } from "@/constatns";
import { CommentForm } from "@/modules/comments/ui/components/comment-form";
import { CommentItem } from "@/modules/comments/ui/components/comment-item";
import { trpc } from "@/trpc/client"
import { Loader2Icon } from "lucide-react";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

interface commentsSectionProps {
    videoId: string;
}

export const CommentsSection = ({videoId}: commentsSectionProps) =>{
    return(
        <Suspense fallback={<CommentSectionSkeleton/>}>
            <ErrorBoundary fallback={<p>Error...</p>}>
                <CommentsSectionSuspense videoId={videoId}/>
            </ErrorBoundary>
        </Suspense>
    )
}

const CommentSectionSkeleton = () =>{
    return (
        <div className="mt-6 flex justify-center items-center">
            <Loader2Icon className="text-muted-foreground size-7 animate-spin"/>


        </div>
    )
}

export const CommentsSectionSuspense = ({videoId}: commentsSectionProps) =>{

    const [comments, query] = trpc.comments.getMany.useSuspenseInfiniteQuery(
        {videoId, limit: DEFAULT_LIMIT},
        {
            getNextPageParam: (lastpage)=> lastpage.nextCursor,
        }
    )

    return (
        <div className="mt-6">
            <div className="flex flex-col gap-6">
                <h1 className="text-xl font-bold"> 
                    {comments.pages[0].totalCount} Comments
                </h1>
                <CommentForm videoId={videoId}/>
                <div className="flex flex-col gap-4 mt-2">
                    {comments.pages.flatMap((page)=> page.items).map((comment)=>(
                        <CommentItem
                        key={comment.id}
                        comment={comment}
                        />
                    ))}
                    <InfiniteScroll
                    hasNextPage={query.hasNextPage}
                    isFetchingNextPage={query.isFetchingNextPage}
                    fetchNextPage={query.fetchNextPage}
                    isManual
                    
                    />

                </div>
            </div>
        </div>
    )
}
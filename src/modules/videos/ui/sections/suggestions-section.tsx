"use client";

import { DEFAULT_LIMIT } from "@/constatns";
import { trpc } from "@/trpc/client";
import { VideoRowCard } from "../components/video-row-card";
import { VideoGridCard } from "../components/video-grid-card";
import { InfiniteScroll } from "@/components/infinite-scroll";

interface SuggestionsSectionProps {
    videoId: string;
    isManual?: boolean;
}

export const SuggestionsSection = ({ videoId, isManual }: SuggestionsSectionProps) =>{

    const [suggestions, query] = trpc.suggestions.getMany.useSuspenseInfiniteQuery({
        videoId: videoId,
        limit: DEFAULT_LIMIT
    },{
        getNextPageParam: (lastpage) => lastpage.nextCursor
    }) 

    return (
        <>
            <div className="hidden md:block space-y-3">
                {suggestions.pages.flatMap((page)=> page.items.map((video)=>(
                    <VideoRowCard
                    key={video.id}
                    data={video}
                    size={'compact'}
                    />
                )))}
            </div>
            <div className="block md:hidden space-y-10">
                {suggestions.pages.flatMap((page)=> page.items.map((video)=>(
                    <VideoGridCard
                    key={video.id}
                    data={video}
                    />
                )))}
            </div>
            <InfiniteScroll
             hasNextPage = {query.hasNextPage}
             isFetchingNextPage={query.isFetchingNextPage}
             fetchNextPage={query.fetchNextPage}
             isManual={isManual}
            />
        </>
    )
}
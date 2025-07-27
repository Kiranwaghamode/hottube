'use client';

import { InfiniteScroll } from "@/components/infinite-scroll";
import { DEFAULT_LIMIT } from "@/constatns";
import { useIsMobile } from "@/hooks/use-mobile";
import { VideoGridCard } from "@/modules/videos/ui/components/video-grid-card";
import { VideoRowCard } from "@/modules/videos/ui/components/video-row-card";
import { trpc } from "@/trpc/client";

 
interface ResultsSectionProps {
    query: string | undefined;
    categoryId: string | undefined;
}

export const ResultsSection = ({
    query,
    categoryId
}: ResultsSectionProps) =>{
    const isMobile = useIsMobile()

    const [results, resultsQuery] = trpc.search.getMany.useSuspenseInfiniteQuery({
        query,
        categoryId,
        limit: DEFAULT_LIMIT
    },
    {
        getNextPageParam: (lastpage)=> lastpage.nextCursor,
    }
)

    return (
        <>
        {isMobile ? (
            <div className="flex flex-col gap-4 gap-y-10 ">
                {
                results.pages.flatMap((page)=> page.items)
                .map((video)=>(
                    <VideoGridCard key={video.id} data={video}/>
                ))
                }
            </div>
        ) :
        <div className="flex flex-col gap-4">
            {
            results.pages.flatMap((page)=> page.items)
            .map((video)=>(
                <VideoRowCard key={video.id} data={video} />
            ))
            }
        </div>
        }
        <InfiniteScroll
        hasNextPage={resultsQuery.hasNextPage}
        isFetchingNextPage={resultsQuery.isFetchingNextPage}
        fetchNextPage={resultsQuery.fetchNextPage}
        />

        </>
    )
}
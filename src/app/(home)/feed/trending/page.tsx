import { DEFAULT_LIMIT } from "@/constatns";
import { HomeView } from "@/modules/home/ui/views/home-view";
import { TrendingView } from "@/modules/home/ui/views/trending-view";
import { HydrateClient, trpc } from "@/trpc/server";

export const dynamic = "force-dynamic"


const Page = async() => {
    void await trpc.videos.getManyTrending.prefetchInfinite({ limit: DEFAULT_LIMIT})

    return (
      <HydrateClient>
        <TrendingView/>
      </HydrateClient>
    )
}

export default Page;

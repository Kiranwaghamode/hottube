import { DEFAULT_LIMIT } from "@/constatns";
import { SubscribedView } from "@/modules/home/ui/views/subscribed-view";
import { HydrateClient, trpc } from "@/trpc/server";

export const dynamic = "force-dynamic"


const Page = async() => {
    void await trpc.videos.getManySubscribed.prefetchInfinite({ limit: DEFAULT_LIMIT})

    return (
      <HydrateClient>
        <SubscribedView/>
      </HydrateClient>
    )
}

export default Page;

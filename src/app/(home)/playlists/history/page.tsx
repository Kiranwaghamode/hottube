import { DEFAULT_LIMIT } from "@/constatns";
import { HistoryView } from "@/modules/playlists/ui/views/history-view";
import { HydrateClient, trpc  } from "@/trpc/server";

import React from 'react'

export const dynamic = 'force-dynamic'

const Page = async () => {

    void trpc.playlists.getHistory.prefetchInfinite({ limit: DEFAULT_LIMIT})


  return (
    <HydrateClient>
        <HistoryView/>
    </HydrateClient>
  )
}

export default Page
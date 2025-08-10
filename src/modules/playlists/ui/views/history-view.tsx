import { HistoryVideosSection } from "../sections/history-videos-section"


export const HistoryView = ()=>{
    return (
        <div className="max-w-screen-md w-full mx-auto mb-10 pt-2.5 flex flex-col gap-y-6">
            <div>
                <h1 className="text-2xl font-bold">History</h1>
                <p className="text-xs text-muted-foreground">
                    Videos that you have watched
                </p> 
            </div>
            <HistoryVideosSection/>
        </div>
        )
}
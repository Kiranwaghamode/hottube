import { cn } from "@/lib/utils";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { useState } from "react";

interface VideoDescriptionProps {
    compactViews: string;
    expandedViews: string;
    compactDate: string;
    expandedDate: string;
    description?: string | null;
}


export const VideoDescription = ({
    compactViews,
    compactDate,
    expandedDate,
    expandedViews,
    description
}: VideoDescriptionProps) =>{
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <div
        onClick={()=>{ setIsExpanded((current) => !current)}}
        className="bg-secondary/50 rounded-xl p-3 hover:bg-secondary/70 cursor-pointer transition"
        >
            <div
            className="flex gap-2 mb-2 text-sm"
            >
                <span className="font-medium">
                    {isExpanded ? expandedViews : compactViews} views
                </span>
                <span className="font-medium">
                    {isExpanded ? expandedDate : compactDate}   

                </span>

            </div>
            <div className="relative">
                <p className={cn(
                    "text-sm whitespace-pre-wrap ",
                    !isExpanded && 'line-clamp-2'
                )}> 
                    {description || "No description"}
                </p>
                <div className="flex items-center gap-1 mt-4 text-sm font-medium">
                    {
                        !isExpanded ? 
                        (
                            <>
                            Show more <ChevronDownIcon className="size-4"/>
                            </>
                        ):
                        (
                            <>
                            Show less <ChevronUpIcon className="size-4"/>
                            </>
                        )
                    }

                </div>
            </div>


        </div>
    )
}
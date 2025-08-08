"use client";

import { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { 
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    
 } from "./ui/carousel";
import { Skeleton } from "./ui/skeleton";

interface FilterCarouselProps {
    value? : string | null,
    isLoading? : boolean,
    onSelect : (value: string | null ) => void,
    data : {
        value: string,
        label: string,
    }[]
}



export const FilterCarousel = ({value, isLoading, onSelect, data}: FilterCarouselProps) =>{

    const [api, setApi ]= useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count , setCount] = useState(0)

    useEffect(()=>{
        if(!api){
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
        api.on("select", ()=>{
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <div className="relative w-full ">
            <Carousel 
            setApi={setApi}
            opts={{
                align: 'start',
                dragFree: true
            }}
            className="w-screen px-12 max-w-screen-xl "
            >
                <CarouselContent className="-ml-3">
                    {!isLoading && (
                        <CarouselItem 
                        className="pl-3 basis-auto"
                        onClick={()=> onSelect(null)}
                        >
                            <Badge 
                            variant={ !value ? "default" : "secondary"}
                            className="rounded-lg px-3 py-1 cursor-pointer whitespace-nowrap text-sm"
                            >
                            All
                            </Badge>
                        </CarouselItem>
                    )}
                    {isLoading &&
                        Array.from({length: 14}).map((_, idx)=>(
                            <CarouselItem key={idx} className="pl-3 basis-auto">
                                <Skeleton className="rounded-lg px-3 py-1 h-full text-sm w-[100px] font-semibold">
                                    &nbsp;
                                </Skeleton>
                            </CarouselItem>
                        ))
                    }
                    {!isLoading && data.map((item)=>(
                        <CarouselItem 
                        key={item.value} 
                        className="basis-auto"
                        onClick={()=> {
                            onSelect(item.value)
                        }}
                        >
                            <Badge
                            variant={ value === item.value ? "default" : "secondary"}
                            className="rounded-lg px-3 py-1 cursor-pointer whitespace-nowrap text-sm"
                            >
                                { item.label }
                            </Badge>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-0 z-20"/>
                <CarouselNext className="right-4 z-20"/>

            </Carousel>
        </div>
    )
}
import * as React from "react"

import { CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselDots,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import AnimeCard from "../card/anime-card"
import { ThisSeasons } from "@/actions/action"

export async function TopAnimeThisSeason() {
    const data = await ThisSeasons(1) || []
    return (

        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}

        >
            <CarouselContent className="h-[30vh] w-full md:h-[350px] lg:h-[45vh] 2xl:h-[50vh]">
                {data.slice(0, 20).map((item: any, index: any) => (
                    <CarouselItem key={index} className="basis-1/2 sm:basis-1/4 md:basis-1/5 lg:basis-1/6">
                        <CardContent className="-ml-12 flex items-center justify-center lg:-ml-8">
                            <AnimeCard anime={item} index={index} />
                        </CardContent>


                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselDots />
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>

    )
}

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
import { topAnime, topAnimes } from "@/actions/action"
import AnimesCard from "../card/anime-card"

export async function TopAnimeCard() {
    const data = await topAnimes(1) || [];
    return (

        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}

        >
            <CarouselContent className="h-[30vh] w-full md:h-[350px] lg:h-[45vh] 2xl:h-[50vh]">
                {data.map((item: any, index: any) => (
                    <CarouselItem key={index} className="basis-1/2 sm:basis-1/4 md:basis-1/5 lg:basis-1/6">
                        <CardContent className="-ml-12 flex items-center justify-center lg:-ml-8">
                            <AnimesCard anime={item} index={index} />
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

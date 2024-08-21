"use client"
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselDots, CarouselPrevious, CarouselNext } from "../ui/carousel";

const CanScrollNext = ({ children }: { children: React.ReactNode }) => {



    return (
        <>
            <Carousel className="relative w-full max-w-[315px] rounded-xl sm:max-w-lg md:max-w-2xl lg:w-[1000px] lg:max-w-4xl xl:max-w-6xl" plugins={[
                Autoplay({
                    delay: 5000,
                    loop: true,
                }),
            ]}

            >
                <CarouselContent className="rounded-xl lg:w-[1000px]"  >

                    {children}
                </CarouselContent>
                <CarouselDots />
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </>
    );
}

export default CanScrollNext;
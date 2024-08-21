"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import {  upcomingAnime } from "@/actions/action";
import AnimeCard from "../card/AnimeCard";
import { DropdownType } from "../Dropdown/Dropdown-type";


function UpcomingAnimeLoad() {
    const { ref, inView } = useInView()

    const [type, setType] = useState("")


    const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery({
        queryKey: ['projects', type],
        initialPageParam: 1,
        queryFn: ({ pageParam }) => upcomingAnime(pageParam, type),
        getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
            const nextPage = lastPageParam + 1
            return nextPage;
        },
    });

    let anime = data ? data.pages.flatMap((page) => page) : [];

    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, fetchNextPage, hasNextPage]);

    if (isLoading) {
        return null;
    }





    return (
        <>
            <div className="my-10 flex justify-center"><DropdownType value={type} onValueChange={setType} /></div>
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {anime.map((item: any, index: any) => (
                    <AnimeCard key={item.mal_id} anime={item} index={index} />
                ))}
            </div>
            <section className="flex w-full items-center justify-center">
                <div ref={ref}>
                    <Image
                        src="./spinner.svg"
                        alt="spinner"
                        width={56}
                        height={56}
                        className="object-contain"
                    />

                </div>

            </section >
        </>
    );
}

export default UpcomingAnimeLoad;
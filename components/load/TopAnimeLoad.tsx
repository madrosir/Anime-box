"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import AnimeCard from "../card/AnimeCard";
import { useInfiniteQuery } from "@tanstack/react-query";
import { topAnime } from "@/actions/action";
import { DropdownMenuRadioGroupDemo } from "../Dropdown/Dropdown-filter";
import { DropdownType } from "../Dropdown/Dropdown-type";


function TopAnimeLoad() {
    const { ref, inView } = useInView()

    const [Filter, setFilter] = useState("")
    const [type, setType] = useState("")


    const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery({
        queryKey: ['projects', Filter,type],
        initialPageParam: 1,
        queryFn: ({ pageParam }) => topAnime(pageParam, Filter,type),
        getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
            const nextPage = lastPageParam + 1
            return nextPage;
        },
    });
    console.log(Filter, "sa")

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
        <div className="my-10 flex w-full items-center justify-center gap-5">
            <div ><DropdownMenuRadioGroupDemo value={Filter} onValueChange={setFilter} /></div>
            <div><DropdownType value={type} onValueChange={setType} /></div>
            </div>
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

export default TopAnimeLoad;
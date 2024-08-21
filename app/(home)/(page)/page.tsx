
import { papularAnime } from "@/actions/action";
import AnimePopular from "@/components/card/Anime-popular";
import { TopAnimeThisSeason } from "@/components/carousel/carousel-anime-sesoens";
import { TopAnimeCard } from "@/components/carousel/carousel-top-anime";
import { AnimeLiveNow} from "@/components/carousel/carousel-top-manga";
import CanScrollNext from "@/components/carousel/carouselitem";
import Search from "@/components/search";

import {

  CarouselItem,

} from "@/components/ui/carousel"
  ;
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const data = await papularAnime(1) || [];





  return (
    <main className="w-full">
      <div className="flex h-16 w-full items-center justify-between bg-slate-900 px-2">
        <div className="flex">
        <Image 
        src={"/logo.svg"}
        alt="Logo"
        width={30}
        height={30}
        className="ml-3 mr-3"/>
      <p className="bg-gradient-to-r from-blue-500 via-orange-600 to-pink-700 bg-clip-text py-10 text-xl font-extrabold text-transparent">Anime Box</p>
      </div>
        <div>
        </div>
        <Suspense key={query + currentPage} >
        </Suspense>
        <div className="w-[250px] items-center">
          <Search query={query} />
        </div>
      </div>

      <div className="flex w-full items-center justify-center" >
        <CanScrollNext> {data.map((item: any, index: any) => (
          <CarouselItem key={item.mal_id} >
            <AnimePopular anime={item} index={index} />
          </CarouselItem>
        ))}</CanScrollNext>
      </div>
      <div className="flex flex-col gap-10 px-8 py-16 sm:p-16">

        <section className="h-full">
          <div>
          <div className="flex justify-between">

            <p className="bg-gradient-to-r from-blue-500 via-orange-600 to-pink-700 bg-clip-text py-10 text-3xl font-extrabold text-transparent">Live Now</p>
            <Link href={`/live-now`}>
            <p className="bg-gradient-to-r from-blue-500 via-orange-600 to-pink-700 bg-clip-text py-10 text-3xl font-extrabold text-transparent">More</p></Link>
            </div>

            <AnimeLiveNow />
          </div>
          <div>
          <div className="flex justify-between">

            <p className="bg-gradient-to-r from-blue-500 via-orange-600 to-pink-700 bg-clip-text py-10 text-3xl font-extrabold text-transparent">Popular Anime </p>
            <Link href={`/top-anime`}>
             <p
      className="bg-gradient-to-r from-blue-500 via-orange-600 to-pink-700 bg-clip-text py-10 text-3xl font-extrabold text-transparent"
    
    >More</p>
</Link>
            </div>
            <TopAnimeCard />

          </div>
          <div >
            <div className="flex justify-between">
            <p className="bg-gradient-to-r from-blue-500 via-orange-600 to-pink-700 bg-clip-text py-10 text-3xl font-extrabold text-transparent">Upcoming Anime </p>
            <Link href={`/upcoming-anime`}>

            <p className="bg-gradient-to-r from-blue-500 via-orange-600 to-pink-700 bg-clip-text py-10 text-3xl font-extrabold text-transparent">More</p>
            </Link>
            </div>
           <TopAnimeThisSeason/>
          </div>
        </section>

      </div>
    </main>
  );
}


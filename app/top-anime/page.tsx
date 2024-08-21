"use client"
import TopAnimeLoad from "@/components/load/TopAnimeLoad";
import Search from "@/components/search";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

const LiveNow = ({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) => {

    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    return (
        <div>
            <div className="flex h-16 w-full items-center justify-between bg-slate-900 px-2" >
                <div className="flex items-center gap-4">
                    <Link href={"/"} className="flex">
                    <Image 
                        src={"/logo.svg"}
                        alt="Logo"
                        width={30}
                        height={30}
                        className="ml-3 mr-3"
                    />
                    <p className="bg-gradient-to-r from-blue-500 via-orange-600 to-pink-700 bg-clip-text py-10 text-xl font-extrabold text-transparent">
                        Anime Box
                    </p>
                    </Link>
                    <Link href={"/live-now"} className="ml-4">
                        <p className="text-lg font-semibold text-red-800">Live-Now</p>
                    </Link>
                    <Link href={"/upcoming-anime"} className="ml-4">
                        <p className="bg-transparent bg-gradient-to-r text-lg font-semibold">Upcoming  Anime</p>
                    </Link>
                </div>
                <div className="flex items-center">
                    <Suspense key={query + currentPage}>
                        {/* Add any loading UI here if needed */}
                    </Suspense>
                    <div className="w-[250px]">
                        <Search query={query} />
                    </div>
                </div>
            </div>
            <main className="flex flex-col sm:p-16">
                <h2 className="mb-4 bg-gradient-to-r from-red-500 via-blue-500 to-pink-600 bg-clip-text text-center text-3xl font-extrabold text-transparent">
                  Top Anime
                </h2>
                <section>
                    <TopAnimeLoad />
                </section>
            </main>
        </div>
    );
}

export default LiveNow;

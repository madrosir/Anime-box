"use client"
import Search from "@/components/search";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useParams } from "next/navigation";

import { Suspense, useEffect, useState } from "react";

interface AnimeState {
    title: string;
    synopsis: string;
    trailer: { embed_url: string };
    duration: string;
    aired: {
        from: string;
        to: string;
        prop: {
            from: {
                day: number;
                month: number;
                year: number;
            };
            to: {
                day: number;
                month: number;
                year: number;
            };
        };
        string: string;
    };
    season: string;
    images: {
        jpg: {
            image_url: string;
            small_image_url: string;
            large_image_url: string;
        };
        webp: {
            image_url: string;
            small_image_url: string;
            large_image_url: string;
        };
    };
    rank: number;
    score: number;
    scored_by: number;
    popularity: number;
    status: string;
    rating: string;
    source: string;
}

const AnimePage = ({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) => {
    const { id } = useParams();
    const [anime, setAnime] = useState<AnimeState>({} as AnimeState);

    const {
        title, synopsis,
        trailer, duration, aired,
        season, images, rank,
        score, scored_by, popularity,
        status, rating, source
    } = anime;

    const getAnime = async (animeId: any) => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${animeId}`);
        const data = await response.json();
        setAnime(data.data);
    };

    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    useEffect(() => {
        getAnime(id);
    }, [id]);

    return (
        <div className="min-h-screen bg-black p-8 text-white">
            <div className="flex flex-col items-center justify-center md:flex-row">
                <div className="flex flex-col items-center">
                    <div className="relative">
                        {images?.jpg?.large_image_url && (
                            <Image
                                src={images.jpg.large_image_url}
                                alt={title || "anime"}
                                width={300}
                                height={350}
                                className="rounded-lg"
                            />
                        )}
                    </div>
                    <h2 className="mt-4 text-2xl font-bold text-purple-500">Anime Info</h2>
                    <div className="mt-2 text-left">
                        <p>
                            <span className="font-bold">Episodes:</span> N/A
                        </p>
                        <p>
                            <span className="font-bold">Status:</span> {status}
                        </p>
                        <p>
                            <span className="font-bold">Score:</span> {score}
                        </p>
                        <p>
                            <span className="font-bold">Season:</span> {season}
                        </p>
                        <p>
                            <span className="font-bold">Year:</span> {aired?.prop?.from?.year}
                        </p>
                        <p>
                            <span className="font-bold">Duration:</span> {duration}
                        </p>
                        <p>
                            <span className="font-bold">Rating:</span> {rating}
                        </p>
                        <p>
                            <span className="font-bold">Source:</span> {source}
                        </p>
                    </div>
                </div>
                <div className="mt-8 flex flex-col text-center md:ml-8 md:mt-0">
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <div className="mt-2 flex flex-wrap justify-center gap-2">
                        <Badge variant="default">Action</Badge>
                        <Badge variant="default">Adventure</Badge>
                        <Badge variant="default">Fantasy</Badge>
                    </div>
                    <p className="mt-2 text-muted-foreground">{title}</p>
                    <div className="mt-5 text-balance rounded-md border bg-gray-800 p-4 lg:w-[600px]">
                        <p>{synopsis}</p>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center">
                <h2 className="text-2xl font-bold text-purple-500">Anime Trailer</h2>
                <div className="mt-4 flex items-center justify-center">
                    {trailer?.embed_url && (
                        <iframe
                            width="560"
                            height="315"
                            src={trailer.embed_url}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default AnimePage;

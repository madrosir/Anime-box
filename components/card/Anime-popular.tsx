"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export interface AnimeProp {
    mal_id: string;
    title_english: string;
    images: {
        jpg: {
            image_url: string;
            small_image_url: string;
            large_image_url: string;
        };
    };
    kind: string;
    episodes: number;
    episodes_aired: number;
    score: string;
    synopsis: string;
    genres: {
        name: string;
        mal_id: string;
    }[]


};

interface Prop {
    anime: AnimeProp;
    index: number;
}

function AnimePopular({ anime }: Prop) {


    const router = useRouter()
    const handleClick = () => {


    }
    return (
        <div className="relative mt-10 w-full rounded-xl" onClick={handleClick}>

            <div className="relative h-[23vh] w-full overflow-hidden rounded-xl md:h-[35vh] lg:h-[35vh]">
                <Link key={anime.mal_id} href={`/anime/${anime.mal_id}`}>
                <Image
        src={anime.images.jpg.large_image_url}
        alt={anime.title_english || "anime"}
        fill
        style={{ objectFit: 'cover' }}
        className="rounded-xl border-2"
    />
                    <div className="absolute h-[35vh] w-full rounded-2xl border-none backdrop-blur-sm backdrop-brightness-50">
                    </div>
                    <div className="absolute ml-5 mt-12 flex rounded-xl text-white">
                        <div className="h-full w-3/5 sm:w-[250px] md:w-[300px] lg:w-[400px]" >
                            <p className="font-bold sm:text-sm lg:text-2xl">{anime.title_english}</p>
                            <p className="lg:line-text-sm line-clamp-2 text-sm sm:text-xs">{anime.synopsis}</p>
                            <div className="mt-3 hidden md:block lg:block">
                                {anime.genres.map((genre) => (
                                    <span key={genre.mal_id} className="text-md mx-2 w-[100px] rounded-sm border border-white px-1 text-white">
                                        {genre.name}
                                    </span>
                                ))}
                            </div>

                        </div >

                    </div>
                    <div className="absolute right-1 flex h-[200px] w-[110px] rounded-md object-contain sm:h-full sm:w-[220px] md:-mt-3 md:h-[350px] lg:mr-10 lg:h-[390px] lg:w-[290px] lg:rotate-6" >
                        <Image
                            src={anime.images.jpg.large_image_url}
                            alt={anime.title_english}
                            width={200}
                            height={200}



                        />

                    </div>
                </Link>
            </div>
        </div>
    );
}

export default AnimePopular;

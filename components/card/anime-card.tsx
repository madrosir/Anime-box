"use client"
import Image from "next/image";
import Link from "next/link";


export interface AnimeProp {

    mal_id: string;
    title: string;
    images: {
        jpg: {
            image_url: string;
            small_image_url: string;
            large_image_url: string;
        };
    }
    score: number;
    year: number;
};

interface Prop {
    anime: AnimeProp;
    index: number;
}

function AnimesCard({ anime }: Prop) {




    return (
        <div  >
            <Link href={`/anime/${anime.mal_id}`}>
            <div className="lg:h-[300px] 2xl:h-[350px]">
                <Image
                    src={anime.images.jpg.image_url}
                    alt={anime.title}
                    width={300}
                    height={300}

                    className="h-[200px] rounded-xl object-cover md:h-[250px] lg:h-[300px] 2xl:h-[350px]"


                />
                <p className="line-clamp-1 text-center hover:text-purple-700 md:line-clamp-1 lg:line-clamp-2">{anime.title}</p>
            </div>
            <div className="flex items-center justify-between px-1">
                <div className="flex flex-row md:mb-4 md:mt-4 lg:mb-10 lg:mt-11" >
                    <Image
                        src="./star.svg"
                        alt="star"
                        width={18}
                        height={18}
                        className="object-contain"
                    />

                    <p className="text-sm font-bold text-[#FFAD49]">{anime.score}</p>

                </div>
                <p className="text-sm"> {anime.year ? `${anime.year}` : "N/A"}</p>
            </div>
            </Link>
        </div >
    );
}

export default AnimesCard;

"use client"
import { motion } from "framer-motion";
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

function AnimeSearchCard({ anime }: Prop) {




    return (
        <div >
            <div className="">
                <Link
                    className="text-sm capitalize"
                    href={`/anime/${anime?.mal_id}`}
                    key={anime?.mal_id}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex cursor-pointer items-center rounded-lg p-2 transition-all hover:bg-gray-800"
                    >
                        <Image
                            width={40}
                            height={40}
                            src={anime.images.jpg.image_url}
                            alt={anime.title}
                            className="rounded-sm"
                        />
                        <p className="pl-4">{anime.title}</p>
                    </motion.div>
                </Link>
            </div>
        </div >
    );
}

export default AnimeSearchCard;

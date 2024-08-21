import Image from "next/image";
import Link from "next/link";


export interface AnimeProp {

    mal_id: string;
    title: string;


    images: {
        jpg: {
            image_url: string,
            small_image_url: string,
            large_image_url: string
        }
    }
    kind: string;
    episodes: number;
    episodes_aired: number;
    score: string;
}

interface Prop {
    anime: AnimeProp;
    index: number;
}

function AnimeCard({ anime }: Prop) {
    return (
      <div className="relative w-full max-w-sm rounded">
        <div className="relative overflow-hidden rounded-xl">
          <Link href={`/anime/${anime.mal_id}`}>
          <div className="relative h-[26vh] w-full sm:h-[26vh] md:h-[30vh] lg:h-[37vh]">
            <Image
              src={anime.images.jpg.large_image_url}
              alt={anime.title || "anime"}
              fill
              className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
          </Link>
        </div>
        <div className="flex flex-col gap-3 py-4">
          <div className="flex items-center justify-between gap-1">
            <h2 className="text-block line-clamp-1 w-full text-xl font-bold">
              {anime.title}
            </h2>
            <div className="rounded-sm bg-[#161921] px-2 py-1">
              <p className="text-block text-sm font-bold capitalize">
                {anime.kind}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex flex-row items-center gap-2">
              <Image
                src="./episodes.svg"
                alt="episodes"
                width={20}
                height={20}
                className="object-contain"
              />
              <p className="text-block text-base font-bold">
                {anime.episodes_aired}/{anime.episodes}
              </p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Image
                src="./star.svg"
                alt="star"
                width={18}
                height={18}
                className="object-contain"
              />
              <p className="text-base font-bold text-[#FFAD49]">{anime.score}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default AnimeCard;
'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useDebounce, useDebouncedCallback } from 'use-debounce'
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { searchAnime } from '@/actions/action';
import { useQuery } from '@tanstack/react-query';
import { useState, useRef, ElementRef, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import SearchBox from "@/components/search";

import { Loader2Icon } from 'lucide-react';

import { useOnClickOutside } from "usehooks-ts";
import { Input } from './ui/input';
import AnimeSearchCard from './card/anime-search-card';


const useSearchAnimes = ({ query }: { query: string }) => {
    return useQuery({
        queryKey: [`search-animes-${query}`, query],
        queryFn: () => searchAnime(query),
        enabled: query.length !== 0,
    });
};

interface SearchInputProps {
    query: string;
}

export default function Search({ query }: SearchInputProps) {
    const [searchBoxVisible, setSearchBoxVisible] = useState(false);
    const searchInputRef = useRef<ElementRef<"input">>(null);
    const searchBoxRef = useRef<ElementRef<"input">>(null);
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();


    const [debouncedQuery] = useDebounce(query, 2000);

    const { data, isLoading, isFetching } = useSearchAnimes({
        query: debouncedQuery,

    });
    console.log(data, "dsdf")
    useOnClickOutside(searchInputRef, () => {
        setSearchBoxVisible(false);
    });

    useOnClickOutside(searchBoxRef, () => {
        setSearchBoxVisible(false);
    });


    const handleSearch = (term: string) => {
        console.log(`Searching... ${term}`);

        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);

    }
    useEffect(() => {
        setSearchBoxVisible(true);
    }, [searchParams]);

    return (
        <div className="relative">


            <Input
                placeholder="Search Anime"
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm text-black text-white outline-2 placeholder:text-gray-500"
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
                defaultValue={searchParams.get('query')?.toString()}
                onFocus={() => setSearchBoxVisible(true)}

            />
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />


            <AnimatePresence >
                {searchBoxVisible && !!debouncedQuery.length && (
                    <div
                        className="absolute z-50 mt-4 w-full gap-4 rounded-lg border border-violet-600 bg-[#121212] p-2"
                        ref={searchBoxRef}
                    >
                        {data?.map((item: any, index: any) => (
                            <AnimeSearchCard key={item.mal_id} anime={item} index={index} />
                        ))}
                        {(isFetching || isLoading) && (
                            <div className="flex items-center justify-center">
                                <Loader2Icon className="animate-spin" />
                            </div>
                        )}
                        {!data?.length && debouncedQuery?.length !== 0 && (
                            <span className="flex justify-center p-4 text-sm">
                                No result found
                            </span>
                        )}
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

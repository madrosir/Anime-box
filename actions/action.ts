"use server";

const baseUrl = "https://api.jikan.moe/v4/top/anime";

export const papularAnime = async (PageParam: number) => {
  const response = await fetch(
    `${baseUrl}?page=${PageParam}&limit=20&filter=airing&sfw=true`,
    { cache: "force-cache" }
  );
  const data = await response.json();
  console.log("s");
  return data.data;
};

export const animeLiveNow = async (PageParam: number) => {
  const response = await fetch(
    `https://api.jikan.moe/v4/seasons/now?page=${PageParam}&sfw=true`
  );
  const data = await response.json();

  return data.data;
};

export const topAnime = async (PageParam: number, filter: string,type:string) => {
  const response = await fetch(
    `https://api.jikan.moe/v4/top/anime?page=${PageParam}&limit=20&filter=${filter}&type=${type}&sfw=true`
  );
  const data = await response.json();

  return data.data;
};
export const ThisSeasons = async (PageParam: number ) => {
  const response = await fetch(
    `https://api.jikan.moe/v4/seasons/upcoming?page=${PageParam}&limit=20&sfw=true`
  );
  const data = await response.json();

  return data.data;
};

export const searchAnime = async (query: any) => {
  const res = await fetch(`https://api.jikan.moe/v4/anime/?q=${query}&limit=5`);
  const resData = await res.json();

  return resData.data;
};
export const getAnimeData = async (id: any) => {
  const res = await fetch(`https://api.jikan.moe/v4/anime/?id=${id}/moreinfo`);
  const resData = await res.json();
  console.log(resData.data.moreinfo, "sdf");
  return resData.data;
};
export const topAnimes = async (PageParam: number) => {
  const response = await fetch(
    `https://api.jikan.moe/v4/top/anime?page=${PageParam}&limit=20&sfw=true`
  );
  const data = await response.json();

  return data.data;
};
export const upcomingAnime = async (PageParam: number ,type:string) => {
  const response = await fetch(
    `https://api.jikan.moe/v4/seasons/upcoming?page=${PageParam}&limit=20&type=${type}&sfw=true`
  );
  const data = await response.json();

  return data.data;
};
export const animeLiveNowFilter = async (PageParam: number,filter: string) => {
  const response = await fetch(
    `https://api.jikan.moe/v4/seasons/now?page=${PageParam}&limit=20&filter=${filter}&sfw=true`
  );
  const data = await response.json();

  return data.data;
};
export type Data = {
  title: Title;
  id: number;
  status: string;
  seasonYear: number;
  bannerImage: string;
  genres: [string];
  episodes: number;
  coverImage: {
    large: string;
  };
};

export type Title = {
  english: string;
  native: string;
};

export type Data = {
  title: Title;
  id: number;
  status: string;
  seasonYear: number;
  bannerImage: string;
  genres: [string];
  episodes: number;
  coverImage: {
    extraLarge: string;
  };
};

export type Title = {
  english: string;
  native: string;
};

export type CharacterNodeType = {
  name: {
    full: string;
    native: string;
  };
  image: {
    medium: string;
  };
  age: number;
  gender: string;
};

export type edge = {
  role: string;
  id: number;
  voiceActors: [voiceActors];
  node: CharacterNodeType;
};

export type voiceActors = {
  id: number;
  name: {
    full: string;
  };
  image: {
    medium: string;
  };
};

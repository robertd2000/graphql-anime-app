export type Data = {
  mediaRecommendation?: any
  title: Title
  id: number
  status: string
  seasonYear: number
  bannerImage: string
  genres: [string]
  episodes: number
  coverImage: {
    large: string
  }
}

export type Title = {
  english: string
  native: string
}

export type CharacterNodeType = {
  name: {
    full: string
    native: string
  }
  image: {
    medium: string
  }
  age: number
  gender: string
  id: number
}

export type edge = {
  role: string
  id: number
  voiceActors: [voiceActors]
  node: CharacterNodeType
}

export type voiceActors = {
  id: number
  name: {
    full: string
  }
  image: {
    medium: string
  }
}

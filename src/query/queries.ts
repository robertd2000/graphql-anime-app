import { gql } from '@apollo/client'

export const GET_ANIME_LIST = gql`
  query Page($page: Int) {
    Page(page: $page, perPage: 20) {
      pageInfo {
        total
      }
      media {
        id
        title {
          english
          native
        }
        status
        type
        season
        genres
        episodes
        seasonYear
        coverImage {
          large
        }
      }
    }
  }
`

export const GET_ANIME = gql`
  query Page($page: Int, $search: String) {
    Page(page: $page, perPage: 20) {
      pageInfo {
        total
      }
      media(search: $search) {
        id
        title {
          english
          native
        }
        status
        type
        season
        genres
        episodes
        seasonYear
        coverImage {
          large
        }
      }
    }
  }
`

export const GET_ANIME_DETAILS = gql`
  query Media($id: Int) {
    Media(id: $id) {
      title {
        english
        native
      }
      description
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      season
      seasonYear
      episodes
      duration
      countryOfOrigin
      coverImage {
        extraLarge
        color
      }
      bannerImage
      genres
      averageScore
      studios {
        nodes {
          name
          id
        }
      }
      siteUrl
      recommendations(perPage: 6, sort: [RATING_DESC, ID]) {
        pageInfo {
          total
        }
        nodes {
          id
          rating
          mediaRecommendation {
            id
            title {
              userPreferred
              native
            }
            status(version: 2)
            coverImage {
              large
            }
          }
        }
      }
      characters(sort: [ROLE, RELEVANCE, ID], perPage: 10) {
        edges {
          role
          id
          voiceActors(language: JAPANESE) {
            id
            name {
              full
            }
            image {
              medium
            }
          }
          node {
            id
            name {
              full
              native
            }
            image {
              medium
            }
            age
            gender
          }
        }
      }
    }
  }
`

export const GET_CHARACTERS = gql`
  query characters($name: String, $page: Int) {
    Page(page: $page, perPage: 20) {
      pageInfo {
        total
      }
      characters(search: $name) {
        name {
          full
          native
        }
        image {
          large
        }
        gender
        dateOfBirth {
          year
          month
          day
        }
        age
        id
        siteUrl
      }
    }
  }
`

export const GET_CHARACTER_BY_ID = gql`
  query character($id: Int) {
    Character(id: $id) {
      name {
        full
        native
      }
      image {
        large
      }
      id
      gender
      dateOfBirth {
        month
        day
      }
      description(asHtml: true)
      age
      siteUrl
      media {
        edges {
          node {
            id
            title {
              english
              native
            }
            coverImage {
              large
            }
          }
        }
      }
    }
  }
`

export const GET_ALL_ANIME_CHARACTERS = gql`
  query media($id: Int, $page: Int) {
    Media(id: $id) {
      id
      characters(page: $page, sort: [ROLE, RELEVANCE, ID]) {
        pageInfo {
          total
          perPage
          currentPage
          lastPage
          hasNextPage
        }
        edges {
          role
          id
          voiceActors(language: JAPANESE) {
            id
            name {
              full
            }
            image {
              medium
            }
          }
          node {
            id
            name {
              full
              native
            }
            image {
              medium
            }
            age
            gender
          }
        }
      }
    }
  }
`

export const GET_ALL_RECOMENDATIONS = gql`
  query media($id: Int, $page: Int) {
    Media(id: $id) {
      recommendations(page: $page, perPage: 25, sort: [RATING_DESC, ID]) {
        pageInfo {
          total
        }
        nodes {
          id
          rating

          mediaRecommendation {
            genres
            episodes
            seasonYear
            id
            title {
              english
              native
            }
            status(version: 2)
            coverImage {
              large
            }
          }
        }
      }
    }
  }
`

export const GET_STUDIO = gql`
  query Media($id: Int, $page: Int) {
    Page(page: 1) {
      studios(id: $id, sort: SEARCH_MATCH) {
        name
        id
        media(page: $page) {
          pageInfo {
            total
          }
          nodes {
            id
            title {
              romaji
              english
              native
              userPreferred
            }
            coverImage {
              extraLarge
              large
              medium
              color
            }
            seasonYear
          }
        }
      }
    }
  }
`

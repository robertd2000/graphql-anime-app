import { gql } from '@apollo/client';

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
          extraLarge
        }
      }
    }
  }
`;

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
          extraLarge
        }
      }
    }
  }
`;

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
        }
      }
      siteUrl
      characters(sort: [ROLE, RELEVANCE, ID]) {
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
`;

export const GET_CHARACTERS = gql`
  query characters($name: String) {
    Page(page: 1, perPage: 20) {
      characters(search: $name) {
        name {
          first
          middle
          last
          full
          native
          userPreferred
        }
        image {
          large
          medium
        }
        gender
        dateOfBirth {
          year
          month
          day
        }
        age
        id
      }
    }
  }
`;

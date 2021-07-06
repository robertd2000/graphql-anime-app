import { gql } from '@apollo/client';

export const GET_ANIME_LIST = gql`
  query Page($page: Int) {
    Page(page: $page, perPage: 20) {
      media {
        id
        title {
          english
          native
        }
        status
        type
        season
        popularity
        genres
        episodes
        seasonYear
        source
        bannerImage
        coverImage {
          extraLarge
          large
          medium
          color
        }
        rankings {
          id
        }
      }
    }
  }
`;

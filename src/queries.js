import { gql } from "@apollo/client";

export const GET_ALL_AUTHORS = gql`
  query {
    AllAuthors {
      name
      born
      bookCount
    }
  }
`;

export const GET_ALL_BOOKS_WITHOUT_GENRES = gql`
  query {
    AllBooks {
        title
        published
        author
    }
  }
`



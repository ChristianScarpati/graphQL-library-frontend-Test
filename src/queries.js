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
`;

export const ADD_BOOK = gql`
  mutation addBook(
    $title: String!
    $author: String!
    $published: Int!
    $genres: [String!]!
  ) {
    addBook(
      title: $title
      author: $author
      published: $published
      genres: $genres
    ) {
      title
      published
      author
      genres
    }
  }
`;

import { useQuery, gql } from "@apollo/client";
import React from "react";

const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      name
      author {
        id
        name
      }
    }
  }
`;

function BooksPage() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.books.map(
        (book: { id: string; name: string; author: { name: string } }) => (
          <div key={book.id}>
            <h3>{book.name}</h3>
            <p>Author: {book.author.name}</p>
          </div>
        )
      )}
    </div>
  );
}

export default BooksPage;

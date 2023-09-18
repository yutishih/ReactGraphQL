import { useMutation, gql } from "@apollo/client";
import React, { useState } from "react";

const ADD_BOOK = gql`
  mutation AddBook($name: String!, $authorId: Int!) {
    addBook(name: $name, authorId: $authorId) {
      id
      name
    }
  }
`;

function AddBooks() {
  const [name, setName] = useState("");
  const [authorId, setAuthorId] = useState("");

  const [addBook] = useMutation(ADD_BOOK);

  const handleSubmit = () => {
    addBook({ variables: { name, authorId: parseInt(authorId, 10) } });
    setName("");
    setAuthorId("");
  };
  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Book Name"
      />
      <input
        value={authorId}
        onChange={(e) => setAuthorId(e.target.value)}
        placeholder="Author ID"
      />
      <button onClick={handleSubmit}>Add Book</button>
    </div>
  );
}

export default AddBooks;

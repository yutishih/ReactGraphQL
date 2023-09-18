import { useMutation, gql } from "@apollo/client";
import React, { useState } from "react";

const ADD_AUTHOR = gql`
  mutation AddAuthor($name: String!) {
    addAuthor(name: $name) {
      name
    }
  }
`;

function AddAuthor() {
  const [name, setName] = useState("");

  const [addAuthor] = useMutation(ADD_AUTHOR);

  const handleSubmit = () => {
    addAuthor({ variables: { name } });
    setName("");
  };
  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Author Name"
      />
      <button onClick={handleSubmit}>Add Author</button>
    </div>
  );
}

export default AddAuthor;

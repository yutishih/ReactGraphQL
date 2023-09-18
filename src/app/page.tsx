"use client";
import React, { useState, useEffect } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Books from "../Components/books";
import AddBooks from "../Components/AddBooks";
import AddAuthor from "../Components/AddAuthor";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Books />
      <AddBooks />
      <AddAuthor />
    </ApolloProvider>
  );
}

export default App;

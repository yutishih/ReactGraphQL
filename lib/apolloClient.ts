// lib/apolloClient.ts

import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: "http://localhost:5000/graphql", // 你的GraphQL服務器地址
  cache: new InMemoryCache(),
});

export default apolloClient;

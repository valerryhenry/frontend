import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/ALICKANN/Web3rspv",
  cache: new InMemoryCache(),
});

export default client;
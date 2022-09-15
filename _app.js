import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
export default function MyApp({ Component, pageProps }) {
    return (
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <ApolloProvider client={client}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ApolloProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    );
  }
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";

import { Layout } from "components/wrapper/Layout";

import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;

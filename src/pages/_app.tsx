import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import Head from "next/head";

import ComponentWrapper from "components/wrapper/ContainerWrapper";

import defaultSEOConfig from "../../next-seo.config";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <DefaultSeo {...defaultSEOConfig} />
      <ComponentWrapper>
        <Component {...pageProps} />
      </ComponentWrapper>
    </ChakraProvider>
  );
}

export default MyApp;

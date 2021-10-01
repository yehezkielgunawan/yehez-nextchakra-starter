import { Text, Link as ChakraLink } from "@chakra-ui/react";

import { Footer } from "components/wrapper/Footer";

export const FooterComponent = () => (
  <Footer>
    <Text>
      <ChakraLink isExternal href="https://yehezgun.com">
        <b>{new Date().getFullYear()} | Yehezkiel Gunawan</b>
      </ChakraLink>
    </Text>
  </Footer>
);

import { Text, Link as ChakraLink } from "@chakra-ui/react";
import React from "react";

import Footer from "components/wrapper/Footer";

const FooterComponent = () => (
  <Footer>
    <Text>
      <ChakraLink isExternal href="https://yehezgun.com">
        <b>{new Date().getFullYear()} | Yehezkiel Gunawan</b>
      </ChakraLink>
    </Text>
  </Footer>
);

export default FooterComponent;

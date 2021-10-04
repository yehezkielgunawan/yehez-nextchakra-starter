import { Flex, useColorMode } from "@chakra-ui/react";
import React, { ReactNode } from "react";

import FooterComponent from "components/layout/FooterComponent";
import HeaderComponent from "components/layout/HeaderComponent";

type ContainerProps = {
  children: ReactNode;
};

const ComponentWrapper = ({ children }: ContainerProps) => {
  const { colorMode } = useColorMode();

  const color = { light: "black", dark: "white" };
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      color={color[colorMode]}
    >
      <HeaderComponent />
      {children}
      <FooterComponent />
    </Flex>
  );
};

export default ComponentWrapper;

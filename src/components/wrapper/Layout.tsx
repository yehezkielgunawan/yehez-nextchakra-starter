import { Flex, useColorMode } from "@chakra-ui/react";
import { ReactNode } from "react";

import { CTA } from "components/layout/CTA";
import { FooterComponent } from "components/layout/FooterComponent";

type ContainerProps = {
  children: ReactNode;
};

export const Layout = ({ children }: ContainerProps) => {
  const { colorMode } = useColorMode();

  const color = { light: "black", dark: "white" };
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      color={color[colorMode]}
    >
      <CTA />
      {children}
      <FooterComponent />
    </Flex>
  );
};

import { Stack } from "@chakra-ui/layout";
import React, { ReactNode } from "react";

import { useDesktopWidthCheck } from "functions/helpers/desktopWidthChecker";

type MainProps = {
  children: ReactNode;
};

const Main = ({ children }: MainProps) => {
  const isDesktopWidth = useDesktopWidthCheck();
  return (
    <Stack
      variants={{
        before: { opacity: 0, y: 25, transition: { type: "spring" } },
        after: { opacity: 1, y: 0, transition: { type: "spring" } },
      }}
      initial="before"
      animate="after"
      width="100%"
      maxWidth="48rem"
      pt="4rem"
      px={isDesktopWidth ? 1 : 3}
      mt={8}
      spacing={4}
    >
      {children}
    </Stack>
  );
};

export default Main;


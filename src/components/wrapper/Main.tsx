import { Stack } from "@chakra-ui/layout";
import React, { ReactNode } from "react";

type MainProps = {
  children: ReactNode;
};

const Main = ({ children }: MainProps) => {
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
      px={[3, 1]}
      mt={8}
      spacing={4}
    >
      {children}
    </Stack>
  );
};

export default Main;

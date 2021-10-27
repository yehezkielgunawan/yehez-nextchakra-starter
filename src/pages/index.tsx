import {
  Text,
  Heading,
  Box,
  useColorMode,
  Image,
  Center,
  useBreakpointValue,
  Code,
  Button,
  Flex,
  Link as ChakraLink,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { AiFillGithub } from "react-icons/ai";

import MotionBox from "components/motion/MotionBox";
import Main from "components/wrapper/Main";
import { useDesktopWidthCheck } from "functions/helpers/desktopWidthChecker";

const Index = () => {
  const { colorMode } = useColorMode();
  const isDesktopWidth = useDesktopWidthCheck();
  const textSize = useBreakpointValue({
    base: "xs",
    sm: "md",
  });
  return (
    <Main>
      <Heading as="h2">Hello World!</Heading>

      <Box
        bg={colorMode === "light" ? "gray.300" : "gray.500"}
        p={2}
        borderRadius={4}
      >
        <Text fontSize={textSize}>
          This is an example text. This project is initiated using Next JS and
          Chakra UI.
        </Text>
      </Box>
      <Center>
        <MotionBox
          animate={{ y: 20, scale: 0.9 }}
          transition={{ repeat: Infinity, duration: 3, repeatType: "reverse" }}
          marginY={8}
          maxWidth={[240, 320]}
        >
          <Image
            alt="Sample Image"
            boxSize={isDesktopWidth ? "150px" : "100px"}
            objectFit="cover"
            src="https://assets.vercel.com/image/upload/v1607554385/repositories/next-js/next-logo.png"
          />
        </MotionBox>
      </Center>
      <Stack alignItems="center" justifyContent="center">
        <Code fontSize={textSize}>
          npx degit yehezkielgunawan/yehez-nextchakra-starter{" "}
          {"<YOUR_APP_NAME>"}
        </Code>
        <Text>OR</Text>
        <Code fontSize={textSize}>
          npx create-next-app --example
          https://github.com/yehezkielgunawan/yehez-nextchakra-starter{" "}
          {"<YOUR_APP_NAME>"}
        </Code>
      </Stack>
      <Button
        as="a"
        href="https://github.com/yehezkielgunawan/yehez-nextchakra-starter/generate"
        size="sm"
        colorScheme="teal"
        variant="outline"
        target="_blank"
      >
        Use This Template
      </Button>
      <Flex align="center" gridGap={3} justify="center" wrap="wrap">
        <Button
          as="a"
          href="https://github.com/yehezkielgunawan/yehez-nextchakra-starter"
          leftIcon={<AiFillGithub />}
          target="_blank"
        >
          Open in Github
        </Button>
        <ChakraLink
          isExternal
          href="https://vercel.com/import/git?s=https://github.com/yehezkielgunawan/yehez-nextchakra-starter"
        >
          <Image src="https://vercel.com/button" alt="Vercel deploy button" />
        </ChakraLink>
        <ChakraLink
          isExternal
          href="https://app.netlify.com/start/deploy?repository=https://github.com/yehezkielgunawan/yehez-nextchakra-starter"
        >
          <Image
            src="https://www.netlify.com/img/deploy/button.svg"
            alt="Netlify deploy button"
          />
        </ChakraLink>
      </Flex>
    </Main>
  );
};

export default Index;

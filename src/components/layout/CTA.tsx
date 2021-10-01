import { useColorMode } from "@chakra-ui/color-mode";
import { Box, Flex, Text } from "@chakra-ui/layout";
import NextLink from "next/link";

import { useDesktopWidthCheck } from "functions/helpers/desktopWidthChecker";

import { DarkModeSwitch } from "./DarkModeSwitch";

export const CTA = () => {
  const { colorMode } = useColorMode();
  const isDesktopWidth = useDesktopWidthCheck();
  return (
    <Box
      justifyContent="start"
      bg={colorMode === "light" ? "white" : "gray.700"}
      position="fixed"
      width="100%"
      opacity="0.95"
      top={0}
      zIndex={5}
      transition="0.3s ease-out"
    >
      <Flex
        justifyContent="space-between"
        py={2}
        align="center"
        maxW="48rem"
        mx="auto"
        px={isDesktopWidth ? 1 : 3}
      >
        <NextLink href="/" passHref>
          <Text as="a" fontSize="lg">
            <b>yehez-nextjs-chakra-starter</b>
          </Text>
        </NextLink>

        <DarkModeSwitch />
      </Flex>
    </Box>
  );
};

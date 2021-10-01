import {
  Text,
  Heading,
  Box,
  useColorMode,
  Image,
  Center,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

import MotionBox from "components/motion/MotionBox";
import { Main } from "components/wrapper/Main";
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
          animate={{ y: 20 }}
          transition={{ repeat: Infinity, duration: 3, repeatType: "reverse" }}
          marginY={8}
          maxWidth={[240, 320]}
        >
          <Image
            boxSize={isDesktopWidth ? "150px" : "100px"}
            objectFit="cover"
            src="https://res.cloudinary.com/yehez/image/upload/v1630902976/Assassination_Classroom_-_Koro-sensei_smiling_head_fwpndi.svg"
          />
        </MotionBox>
      </Center>
    </Main>
  );
};

export default Index;

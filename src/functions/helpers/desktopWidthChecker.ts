import { useMediaQuery } from "@chakra-ui/react";

export const useDesktopWidthCheck = () => {
  const [isDesktopWidth] = useMediaQuery("(min-width: 42rem)");

  return isDesktopWidth;
};

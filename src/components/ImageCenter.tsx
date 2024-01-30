import { Box, Image, VStack } from "@chakra-ui/react";
import React from "react";
import ImageTop from "../images/lawer.png";

export const ImageCenter: React.FC = () => {
  return (
    <Box backgroundColor="#581617">
      <VStack>
        <Image m={3} src={ImageTop} />
      </VStack>
    </Box>
  );
};

export default ImageCenter;

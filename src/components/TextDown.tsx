import { Box, Img, Text, VStack } from "@chakra-ui/react";
import React from "react";
import DownImage from "../images/down_image.png"

export const TextDown: React.FC = () => {
  return (
    <Box id="quem-somos" backgroundColor="#581617"  p={2} color="white">
      <VStack>
        <Text m={5} as="b" fontSize='5xl'>Quem Somos Nós</Text>
        <Text m={5} ml="20%" mr="20%">
        Somos um escritório de advocacia dedicado à defesa dos direitos sob uma perspectiva social, em seus mais diversos aspectos, como o direito à liberdade, moradia, alimentação, estudo, trabalho digno, aposentadoria, ao meio ambiente saudável, dentre outros.
        </Text>
        <Img backgroundColor="white" borderWidth="1px"
        borderRadius="lg" m={8} p={5} src={DownImage} />
      </VStack>
    </Box>
  );
};

export default TextDown;

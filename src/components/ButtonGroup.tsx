import { Box, Button, Flex, VStack } from "@chakra-ui/react";
import React from "react";

export const ButtonGoup: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box w="100%" p={2} backgroundColor="#581617">
      <VStack>
        <Flex>
          <Button backgroundColor="#952829" color="white" m={2} onClick={() => scrollToSection('direito-social')}>Direito Social</Button>
          <Button backgroundColor="#952829" color="white" m={2} onClick={() => scrollToSection('local')}>Local</Button>
          <Button backgroundColor="#952829" color="white" m={2} onClick={() => scrollToSection('quem-somos')}>Quem Somos</Button>
          <Button backgroundColor="#952829" color="white" m={2} onClick={() => scrollToSection('advogados')}>Advogados</Button>
          <Button backgroundColor="#952829" color="white" m={2} onClick={() => scrollToSection('contatos')}>Contatos</Button>
        </Flex>
      </VStack>
    </Box>
  );
};

export default ButtonGoup;

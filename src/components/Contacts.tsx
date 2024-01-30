import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { FaWhatsapp, FaInstagram, FaTwitter } from "react-icons/fa";

export const Contacts: React.FC = () => {
  return (
    <VStack id="contatos" p={6} backgroundColor="#581617">
      <Box
        borderWidth="1px"
        borderRadius="lg"
        backgroundColor="#F2F2F2"
        w="70%"
        p={2}
      >
        <VStack>
          <Text as="b" color="black">
            Contatos
          </Text>
        </VStack>
      </Box>
      <Flex   m={10} >
        <Box w="70%" p={3}>
          <FaWhatsapp />
        </Box>
        <Box p={3}>
          <FaInstagram />
        </Box>
        <Box p={3}>
          <FaTwitter />
        </Box> 
      </Flex>
      <Text> Email: advocaciasociales@gmail.com</Text>
    </VStack>
  );
};

export default Contacts;

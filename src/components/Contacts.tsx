import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { FaWhatsapp, FaInstagram, FaTwitter } from "react-icons/fa";

export const Contacts: React.FC = () => {
  const whatsappLink =
    "https://wa.me/5527996426334?text=Ol%C3%A1%2C+tudo+bem%3F";
  const emailLink = "advocaciasociales@gmail.com";

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
      <Flex m={10}>
        <Box color="white" w="70%" p={3}>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </Box>
        <Box color="white" p={3}>
          <FaInstagram />
        </Box>
        <Box color="white" p={3}>
          <FaTwitter />
        </Box>
      </Flex>
      <a href={emailLink} target="_blank" rel="noopener noreferrer">
        <Text color="white"> Email: advocaciasociales@gmail.com</Text>
      </a>
    </VStack>
  );
};

export default Contacts;

import { Box, Flex, Img, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import LogoHeader from "../images/logo.png";

export const Header: React.FC = () => {
  const whatsappLink =
    "https://wa.me/5527996426334?text=Ol%C3%A1%2C+tudo+bem%3F";

  return (
    <Box bg="#F2F2F2" w="100%" p={2}>
      <Flex>
        <Box ml="10%" p={2}>
          <Flex>
            <Img src={LogoHeader} />
            <Text as="b" ml={5} color="#581617">
              ADVOCACIA <br></br> SOCIAL
            </Text>
          </Flex>
        </Box>
        <Spacer />

        <Box mr="10%" p={2}>
          <Text as="b" fontSize="xs" fontFamily="Roboto" color="#575757">
            Email: advocaciasociales@gmail.com <br></br> (27)
            3222-7427 /{" "}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              {" "}
              (27) 996 426 334{" "}
            </a>
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;

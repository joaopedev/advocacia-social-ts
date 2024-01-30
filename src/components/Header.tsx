import { Box, Flex, Img, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import LogoHeader from "../images/logo.png";
import { MdCall } from "react-icons/md";

export const Header: React.FC = () => {
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
            
          <Text as="b" fontSize='xs' fontFamily="Roboto" color="#575757">
            Email: advocaciasociales@gmail.com <br></br> {<MdCall />} 27 3222-7427 / 27 996
            426 334
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;

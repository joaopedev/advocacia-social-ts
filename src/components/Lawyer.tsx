import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Image,
  Input,
  VStack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Logo from "../images/logo.png";

export const Lawyer: React.FC = () => {
  return (
    <Box id="advogados" backgroundColor="#581617">
      <VStack>
        <Image src={Logo} />
        <Input
          backgroundColor="white"
          m={5}
          maxW="40%"
          placeholder="Advogados"
        />
        <Grid m={5} templateColumns="repeat(3, 1fr)" gap={10}>
          <GridItem>
            <Card bg="#3A1011B2" maxW="md">
              <CardHeader>
                <Flex>
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar name="Guilherme Loureiro de Oliveira," />
                    <Box>
                      <Heading fontStyle="Numans" fontFamily="Numans" color="white" size="sm">
                        Guilherme Loureiro de Oliveira
                      </Heading>
                      <Text fontStyle="Numans" fontFamily="Numans" color="white">OAB/ES n. 3.851</Text>
                    </Box>
                  </Flex>
                  <IconButton
                    variant="ghost"
                    colorScheme="gray"
                    aria-label="See menu"
                  />
                </Flex>
              </CardHeader>
              <CardBody>
                <Text ml="13%" p={4} fontStyle="Numans" fontFamily="Numans" color="white">
                  Tel: 27 996 934 558 <br></br> g.loureirooliveira@hotmail.com
                </Text>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem>
            <Card bg="#3A1011B2" maxW="md">
              <CardHeader>
                <Flex>
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar name="Alexandre Cezar Xavier Amaral" />
                    <Box>
                      <Heading fontStyle="Numans" fontFamily="Numans" color="white" size="sm">Alexandre Cezar Xavier Amaral</Heading>
                      <Text fontStyle="Numans" fontFamily="Numans" color="white">OAB/ES n. 6.749</Text>
                    </Box>
                  </Flex>
                  <IconButton
                    variant="ghost"
                    colorScheme="gray"
                    aria-label="See menu"
                  />
                </Flex>
              </CardHeader>
              <CardBody>
                <Text ml="13%" p={4} fontStyle="Numans" fontFamily="Numans" color="white">
                  Tel: 27 995 222 826 <br></br>
                  alexandrecezaramaral@gmail.com
                </Text>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem>
            <Card bg="#3A1011B2" maxW="md">
              <CardHeader>
                <Flex>
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar name="Monique da Silva Guimarães" />

                    <Box>
                      <Heading fontStyle="Numans" fontFamily="Numans" color="white" size="sm">Monique da Silva Guimarães</Heading>
                      <Text fontStyle="Numans" fontFamily="Numans" color="white">OAB/ES n. 36.472</Text>
                    </Box>
                  </Flex>
                  <IconButton
                    variant="ghost"
                    colorScheme="gray"
                    aria-label="See menu"
                  />
                </Flex>
              </CardHeader>
              <CardBody>
                <Text ml="13%" p={4} fontStyle="Numans" fontFamily="Numans" color="white">
                  Tel: 27 997 524 357 <br></br>
                  correio eletrônico: moniquesguimaraes@gmail.com
                </Text>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem>
            <Card bg="#3A1011B2" maxW="md">
              <CardHeader>
                <Flex>
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar name="Magresson Gouveia Martins" />

                    <Box>
                      <Heading fontStyle="Numans" fontFamily="Numans" color="white" size="sm">Magresson Gouveia Martins</Heading>
                      <Text fontStyle="Numans" fontFamily="Numans" color="white">OAB/ES n. 37.127</Text>
                    </Box>
                  </Flex>
                  <IconButton
                    variant="ghost"
                    colorScheme="gray"
                    aria-label="See menu"
                  />
                </Flex>
              </CardHeader>
              <CardBody>
                <Text ml="13%" p={4} fontStyle="Numans" fontFamily="Numans" color="white">
                  Tel: 27 995 149 870 <br></br>
                  correio eletrônico: magressonadv@gmail.com
                </Text>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem>
            <Card bg="#3A1011B2" maxW="md">
              <CardHeader>
                <Flex>
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar
                      name="Patrick Pires Sant’ana"
                    />

                    <Box>
                      <Heading fontStyle="Numans" fontFamily="Numans" color="white" size="sm">Patrick Pires Sant’ana</Heading>
                      <Text fontFamily="Numans" color="white">OAB/ES n. 38.000</Text>
                    </Box>
                  </Flex>
                  <IconButton
                    variant="ghost"
                    colorScheme="gray"
                    aria-label="See menu"
                  />
                </Flex>
              </CardHeader>
              <CardBody>
                <Text ml="13%" p={4} fontStyle="Numans" fontFamily="Numans" color="white">
                  Tel: 27 997 858 968 <br></br>
                  correio eletrônico: santanapatrick007@gmail.com
                </Text>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem>
            <Card bg="#3A1011B2" maxW="md">
              <CardHeader>
                <Flex>
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar name="Elisson Medeiros Bremenkamp" />

                    <Box>
                      <Heading fontStyle="Numans" fontFamily="Numans" color="white" size="sm">Elisson Medeiros Bremenkamp</Heading>
                      <Text fontStyle="Numans" fontFamily="Numans" color="white">OAB/ES n. 39.927</Text>
                    </Box>
                  </Flex>
                  <IconButton
                    variant="ghost"
                    colorScheme="gray"
                    aria-label="See menu"
                  />
                </Flex>
              </CardHeader>
              <CardBody>
                <Text ml="13%" p={4} fontStyle="Numans" fontFamily="Numans" color="white">
                  Tel: 27 996 282 428 correio eletrônico:
                  elissonmedeirosbremenkamp@gmail.com
                </Text>
              </CardBody>
            </Card>
          </GridItem>
        </Grid>
      </VStack>
    </Box>
  );
};

export default Lawyer;

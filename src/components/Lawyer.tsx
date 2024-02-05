import React, { useState } from "react";
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
import Logo from "../images/logo.png";

export const Lawyer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const lawyersData = [
    {
      id: 1,
      name: "Guilherme Loureiro de Oliveira",
      oabNumber: "3.851",
      phone: "27 996 934 558",
      email: "g.loureirooliveira@hotmail.com",
    },
    {
      id: 2,
      name: "Alexandre Cezar Xavier Amaral",
      oabNumber: "6.749",
      phone: "27 995 222 826",
      email: "alexandrecezaramaral@gmail.com",
    },
    {
      id: 3,
      name: "Monique da Silva Guimarães",
      oabNumber: "36.472",
      phone: "27 997 524 357",
      email: "moniquesguimaraes@gmail.com",
    },
    {
      id: 4,
      name: "Magresson Gouveia Martins",
      oabNumber: "37.127",
      phone: "27 995 149 870",
      email: "magressonadv@gmail.com",
    },
    {
      id: 5,
      name: "Patrick Pires Sant’ana",
      oabNumber: "38.000",
      phone: "27 997 858 968",
      email: "santanapatrick007@gmail.com",
    },
    {
      id: 6,
      name: "Elisson Medeiros Bremenkamp",
      oabNumber: "39.927",
      phone: "27 996 282 428",
      email: "elissonmedeirosbremenkamp@gmail.com",
    },
  ];

  const filteredLawyers = lawyersData.filter((lawyer) =>
    lawyer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box id="advogados" backgroundColor="#581617">
      <VStack>
        <Image src={Logo} />
        <Input
          backgroundColor="white"
          m={5}
          maxW="40%"
          placeholder="Advogados"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Grid m={5} templateColumns="repeat(3, 1fr)" gap={10}>
          {filteredLawyers.map((lawyer) => (
            <GridItem
              key={lawyer.id}
              transition="opacity 0.5s"
              opacity={filteredLawyers.length === 0 ? 0 : 1}
            >
              <Card bg="#3A1011B2" maxW="md">
                <CardHeader>
                  <Flex>
                    <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                      <Avatar name={lawyer.name} />
                      <Box>
                        <Heading
                          as="b"
                          fontStyle="Numans"
                          fontFamily="Numans"
                          color="white"
                          size="sm"
                        >
                          {lawyer.name}
                        </Heading>
                        <Text
                          fontStyle="Numans"
                          fontFamily="Numans"
                          color="white"
                        >
                          {`OAB/ES n. ${lawyer.oabNumber}`}
                        </Text>
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
                  <Text
                    ml="13%"
                    p={4}
                    fontStyle="Numans"
                    fontFamily="Numans"
                    color="white"
            
                  >
                    {`Tel: ${lawyer.phone}`} <br />
                    {`Email: ${lawyer.email}`}
                  </Text>
                </CardBody>
              </Card>
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </Box>
  );
};

export default Lawyer;

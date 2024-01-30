import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import Header from "./components/Header";
import Background from "./images/background.png";
import ButtonGoup from "./components/ButtonGroup";
import ImageCenter from "./components/ImageCenter";
import TextCenter from "./components/TextCenter";
import MapBox from "./components/MapBox";
import TextDown from "./components/TextDown";
import Lawyer from "./components/Lawyer";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

export const App: React.FC = () => (
  <ChakraProvider theme={theme}>
    <Box backgroundImage={Background}>
      <Header />
      <ButtonGoup />
      <ImageCenter />
      <TextCenter />
      <MapBox />
      <TextDown />
      <Lawyer />
      <Contacts />
      <Footer />
    </Box>
  </ChakraProvider>
);

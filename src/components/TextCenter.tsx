import { Box, Img, Text, VStack } from "@chakra-ui/react";
import React from "react";
import SecondImage from "../images/lawer2.png"

export const TextCenter: React.FC = () => {
  return (
    <Box id="direito-social" backgroundColor="#581617"   p={2} color="white">
      <VStack>
        <Text as="b" fontSize='5xl'>O que é Direito Social.</Text>
        <Text ml="20%" mr="20%">
          Direito Social, mais do que tipos específicos de direitos subjetivos,
          é uma perspectiva inovadora, para não dizer revolucionária, de
          conceituar os direitos da pessoa humana, para além da concepção
          individualista, no contexto social e holístico.<br></br><br></br> A primeira geração de
          direitos, que nasce com o iluminismo e a Revolução Francesa, burguesa,
          privilegia a concepção individualista, com as categorias de direito à
          liberdade, à propriedade, à vida e aos direitos políticos, pautados no
          dito contrato social.<br></br><br></br> Os conflitos que resultaram em revoluções e nas
          primeira e segunda guerra mundiais demonstram a limitação desses
          direitos mínimos à manutenção do contrato social (manutenção da
          estabilidade social), exigindo a adoção de outras garantias, como o
          direito ao trabalho - e à previdência social -, à saúde, à educação, à
          alimentação, dentre outros, inicialmente, e, mais recentemente, o
          direito a um ambiente saudável.<br></br><br></br> São várias as concepções de direito
          social. Trata-se de um campo em disputa, na medida em que os direitos
          nascem da luta (Ihering), e precisam ser conquistados, defendidos.
          Neste sentido, podemos afirmar que o direito social mais importante é
          justamente o direito de lutar pelos direitos, de protestar, de
          revoltar-se contra as injustiças, e, nos marcos do Estado, obter a
          tutela jurisdicional para a proteção desses direitos.
        </Text>
        <Img p={5} src={SecondImage} />
      </VStack>
    </Box>
  );
};

export default TextCenter;

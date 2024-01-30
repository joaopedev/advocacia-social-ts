import {
  AspectRatio,
  Box,
  Grid,
  GridItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

export const MapBox: React.FC = () => {
  return (
    <Box id="local" m={10} p={3}>
      <VStack>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem>
            <AspectRatio ratio={16 / 9}>
              <iframe
                title="Local"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.48793568389!2d-40.343395724012254!3d-20.321451850619017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb83db05de03e9f%3A0xf5e738d4da08369b!2sR.%20Gen.%20Os%C3%B3rio%2C%2083%20-%20Centro%2C%20Vit%C3%B3ria%20-%20ES%2C%2029010-001%2C%20Brazil!5e0!3m2!1sen!2sng!4v1706578221364!5m2!1sen!2sng"
                width={600}
                height={450}
              ></iframe>
            </AspectRatio>
          </GridItem>
          <GridItem>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              lacinia rhoncus nisl eu efficitur. Ut ipsum lectus, semper vel
              lacus posuere, scelerisque placerat nisl. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas. Nam nisl lectus, laoreet eget luctus a, mattis ac tortor.
            </Text>
          </GridItem>
        </Grid>
      </VStack>
    </Box>
  );
};

export default MapBox;

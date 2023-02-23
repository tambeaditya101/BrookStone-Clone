import { Box, Image, Text, Center } from "@chakra-ui/react";
import React from "react";
import Carousel from "./Carousel.tsx";
import WithSubnavigation from "./WithSubnavigation";

import CaptionCarousel from "./CaptionCarousel.tsx";
function Mid() {
  const styles = {
    border: "1px solid RGBA(0, 0, 0, 0.92)",
    width: "75%",
    margin: "auto",
  };
  const data = [
    {
      text: "Audio",
      img: "https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_3_2400x.webp?v=1652917417",
    },
    {
      text: "Massage Chairs",
      img: "https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_15_2400x.webp?v=1652917776",
    },
    {
      text: "Foot & Leg Massage",
      img: "https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_5_2400x.webp?v=1652917431",
    },
    {
      text: "Neck & Back Massage",
      img: "https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_6_2400x.webp?v=1652917439",
    },
    {
      text: "Wine & Bar",
      img: "https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_7_2400x.webp?v=1652917449",
    },
    {
      text: "Lightning",
      img: "https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_8_2400x.webp?v=1652917479",
    },
    {
      text: "Pillows",
      img: "https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_9_2400x.webp?v=1652917507",
    },
    {
      text: "Skincare",
      img: "https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_10_2400x.webp?v=1652917518",
    },
    {
      text: "LED Light Therapy",
      img: "https://cdn.shopify.com/s/files/1/0262/2226/4423/files/led_2400x.png?v=1661534692",
    },
    {
      text: "Technology",
      img: "https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_12_2400x.webp?v=1652917527",
    },
    {
      text: "Kitchen",
      img: "https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_13_2400x.webp?v=1652917545",
    },
    {
      text: "Outdoor",
      img: "https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_14_2400x.webp?v=1652917554",
    },
  ];
  const Cards = ({ imga, text }) => {
    return (
      <Box display="flex" flexDirection="column" gap="20px" textAlign="center">
        <Image src={imga} w="150px" />
        <Text>{text}</Text>
      </Box>
    );
  };

  return (
    <Box className="mid-container" mb='100px'   >
      <Box mb="40px" className="p1">
        <Box>
          <WithSubnavigation />
        </Box>
        <Box
          display="flex"
          // border="1px solid red"
          h="auto"
          w="78%"
          margin="auto"
          gap="20px"
          mt="30px"
        >
          <Box w="56%">
            <Carousel />
          </Box>
          <Box display="flex" flexDirection="column" gap="30px">
            <Box>
              <Image
                w="100%"
                src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/osaki-greatdeals2_2400x.png?v=1670241153"
              />
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Image
                w="46%"
                src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/newarrivals125_413483c9-b544-47ca-bcf7-16795dc38950_2400x.png?v=1670241694"
              />
              <Image
                w="46%"
                src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/bestsellers125_2400x.png?v=1670241724"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <hr style={styles} />
      <Box className="p2">
        <Box className="featuredBrands">
          <Center>
            <Text fontSize="xl" margin="20px">
              FEATURED BRANDS
            </Text>
          </Center>
          <CaptionCarousel />
        </Box>
        <Text
          fontSize="xl"
          textAlign="center"
          marginTop="-55px"
          marginBottom="40px"
        >
          FEATURED CATEGORIES
        </Text>
        <Center>
          <Box
            className="featuredCategories"
            display="grid"
            gridTemplateColumns="repeat(6,1fr)"
            gap="60px"
          >
            {data.map((item) => (
              <Cards imga={item.img} text={item.text} />
            ))}
          </Box>
        </Center>
      </Box>
    </Box>
  );
}

export default Mid;

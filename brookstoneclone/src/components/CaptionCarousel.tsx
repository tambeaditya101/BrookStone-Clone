import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: false,
  arrows: true,
  fade: false,
  infinite: true,
  autoplay: false,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: false,
  centerMode: false,
  centerPadding: "50px",
  draggable: true,
};

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      image:
        "https://cdn.shopify.com/s/files/1/0262/2226/4423/files/lumina3_2400x.png?v=1675981913",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0262/2226/4423/files/lelo_2400x.png?v=1670240370",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0262/2226/4423/files/glo2_2400x.png?v=1670240759",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0262/2226/4423/files/solaris2_1_2400x.png?v=1665670319",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0262/2226/4423/files/dog1_1_2400x.jpg?v=1663712086",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0262/2226/4423/files/download_1_copy_2400x.jpg?v=1653328103",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0262/2226/4423/files/pitaka_2400x.png?v=1659475653",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0262/2226/4423/files/walden_2400x.png?v=1660576970",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0262/2226/4423/files/varier_2400x.png?v=1659474464",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0262/2226/4423/files/ohom3_2400x.png?v=1659475686",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0262/2226/4423/files/Brookstone_Promo_Badge_3_2400x.jpg?v=1653328132",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0262/2226/4423/files/download_copy_2400x.jpg?v=1653328148",
    },
  ];

  return (
    <Box
      position={"relative"}
      height={"400px"}
      width={"70%"}
      margin="auto"
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        background="white"
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        background="white"
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={"250px"}
            position="relative"
            borderRadius="25px"
            margin="20px"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            {/* This is the block you need to change, to customize the caption */}
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

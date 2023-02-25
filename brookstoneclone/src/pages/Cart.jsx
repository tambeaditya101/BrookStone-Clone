import { Box, Text, Center } from "@chakra-ui/layout";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Image } from "@chakra-ui/image";
import { Spinner } from "@chakra-ui/spinner";
import { useParams } from "react-router";
import {
    chakra,
    Container,
    Stack,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { MdLocalShipping } from 'react-icons/md';
  
const getData = (url) => {
  return fetch(url).then((res) => res.json());
};
const Cart = () => {
  const [massage, setMassage] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const fetchedData = async () => {
    setLoading(true);

    try {
      const data = await getData(`http://localhost:8080/massage`);
      console.log(data);
      setMassage(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchedData();
  }, []);

  return  (
    <Box className="container">
      {
        massage.map((i)=> <Box h='100px' >
          <Image src={i.url}/>
          <Text>{i.title}</Text>
        </Box>)
      }
      
    </Box>
  );
}


export default Cart;

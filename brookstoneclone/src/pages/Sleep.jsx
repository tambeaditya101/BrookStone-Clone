import { Box,Text, Center } from "@chakra-ui/layout";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Image } from "@chakra-ui/image";
import { Spinner } from "@chakra-ui/spinner";
import { NavLink } from "react-router-dom";

const getData = () => {
  return fetch(` http://localhost:8080/sleep`).then((res) => res.json());
};
const Sleep = () => {
  const [massage,setMassage] = useState([])
  const [loading,setLoading] = useState(false)

  const fetchedData = async () => {
    setLoading(true)

    try {
      const data = await getData();
      console.log(data);
      setMassage(data)
    setLoading(false)

    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchedData();
  }, []);
  return loading? <Center><Spinner
  thickness="10px"
  speed="0.65s"
  emptyColor="gray.200"
  color="blue.500"
  size="xl"
  margin={"auto"}
/></Center> : <Box className='container' display='flex' justifyContent='space-between' border='1px solid black'   w='85%' margin='auto' mt='30px' >
    <Box className="left-cont" w='30%' >
      FILTER AND SORT REGION
    </Box>
    <Box className="right-cont" w='65%' display='grid' gridTemplateColumns='repeat(3,1fr)' gap='20px' >
      {
        massage.map((i)=> <NavLink to={`/sleep/${i.id}`}>  <Box h='400px' boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' p='20px'  >
          <Image w='350px' src={i.url} />
          <Text>{i.title}</Text>
          <Text>{i.price}</Text>
          <Text color='green' >{i.del}</Text>
        </Box></NavLink> )
      }
    </Box>
  </Box>;
};

export default Sleep;

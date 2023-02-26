import { Box, Center, Text } from "@chakra-ui/layout";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Image } from "@chakra-ui/image";
import { Spinner } from "@chakra-ui/spinner";
import { Navigate, NavLink, useSearchParams } from "react-router-dom";
import { Select } from "@chakra-ui/select";
import Pagination from "../components/Pagination";
import { Button } from "@chakra-ui/button";
import Payment from "./Payment";
//
// const getData = (url) => {
//   return fetch(url).then((res) => res.json());
// };
const getCurrentPage = (page) => {
  page = Number(page);

  if (typeof page !== "number" || page <= 0 || !page) {
    return 1;
  }
  return page;
};


const Cart = () => {
  
  const [massage, setMassage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useSearchParams()
  const [page, setPage] = useState(getCurrentPage(params.get("page")));
  const [order, setOrder] = useState("");
  const [total, setTotal] = useState();
  // const[price,setPrice] = useState(0);
  
  let price = 0;

  let url = ` http://localhost:8080/cart`;
  if (order) {
    url = ` http://localhost:8080/cart?_limit=4&_page=${page}&_sort=price&_order=${order}`;
  }
  const handleChange = (val) => {
    const updated = val + page;
    setPage(updated);
  };
  const fetchedData = async (url) => {
    setLoading(true);
    try {
      const getData = await fetch(url)
      setTotal(getData.headers.get('X-Total-Count'))
      console.log(getData.headers.get('X-Total-Count'));
      const data = await getData.json();
      console.log(data);
      setMassage(data);
      
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    fetchedData(url);
  }, [page,order]);

  useEffect(()=>{
    let obj = {page}
    if(order){
       obj.order = order
    }
    setParams(obj)
  },[page,order])
 
  const handleSort = (e) => {
    //console.log(e.target.value)
    setOrder(e.target.value);
  };

  const handleDelete=(id)=>{
    fetch(`http://localhost:8080/cart/${id}`, { method: 'DELETE' })
    .then((res) => {
      res.json();
      alert('Item Deleted Successfully')
      fetchedData(`http://localhost:8080/cart`)
    } )
    ;
  }
  

  massage.forEach((i)=>{
    price += i.price
  })
  
  return loading ? (
    <Center>
      <Spinner
        thickness="10px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
        margin={"auto"}
      />
    </Center>
  ) : (
    <Box>
        <Center><Text fontSize='6xl' > Cart</Text></Center>
      <Box
        className="container"
        display="flex"
        justifyContent="space-evenly"
        boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
        w="85%"
        margin="auto"
        mt="30px"
        p='20px'
      >
        
        <Box className="left-cont" w="20%" h='350px' p='20px' boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" >
           <Center fontWeight='bold' >SORT BY PRICE</Center> 
           <Center>
          <Select
            variant="filled"
            placeholder="Select one"
            onChange={handleSort}
          >
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </Select>
          </Center>
          
        <Text textAlign='center' mt='30px' fontSize='2xl' >Total Amount: <Text fontStyle='italic' fontSize='3xl'>₹ {price}</Text> </Text>
       <Center><Button onClick={()=>{
         window.location.href= "/payment"
        
       }} isDisabled={price===0}  bg='green' color='white' p='10px 30px'  >Checkout</Button></Center> 

        </Box>
        <Box
          className="right-cont"
          w="75%"
          display="grid"
          gridTemplateColumns="repeat(3,1fr)"
          gap="20px"
        >
          
           {massage.length === 0 ? <Text fontSize='6xl' >Cart is Empty</Text>:  
          
          massage.map((i) => (
            
              <Box
                
                h="450px"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                p="20px"
              >
                <Image w="350px" src={i.url} />
                <Text>{i.title}</Text>
                <Text>₹ {i.price}</Text>
                <Text color="green">{i.del}</Text>
                 <Center> <Button mt='5px' bg='red' color='white' onClick={()=>handleDelete(i.id)} ><i  class="fa-solid fa-trash"></i></Button></Center>
              </Box>
            
          ))}
        </Box>
      </Box>
      <Box mt="20px" mb="20px">
        <Pagination total={total}  page={page} handleChange={handleChange} />
      </Box>
    </Box>
  );
};

export default Cart;

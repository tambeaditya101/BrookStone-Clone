import { Box, Center, Text } from "@chakra-ui/layout";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Image } from "@chakra-ui/image";
import { Spinner } from "@chakra-ui/spinner";
import { NavLink, useSearchParams } from "react-router-dom";
import { Select } from "@chakra-ui/select";
import Pagination from "../components/Pagination";
//
// const getData = (url) => {
//   return fetch(url).then((res) => res.json());
// };
let baseURL = `https://brookstone-data.onrender.com`;

const getCurrentPage = (page) => {
  page = Number(page);

  if (typeof page !== "number" || page <= 0 || !page) {
    return 1;
  }
  return page;
};

const Massage = () => {
  const [massage, setMassage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useSearchParams();
  const [page, setPage] = useState(getCurrentPage(params.get("page")));
  const [order, setOrder] = useState("");
  const [total, setTotal] = useState(1);

  let url = `${baseURL}/massage?_limit=6&_page=${page}`;
  if (order) {
    url = `${baseURL}/massage?_limit=6&_page=${page}&_sort=price&_order=${order}`;
  }
  const handleChange = (val) => {
    const updated = val + page;
    setPage(updated);
  };
  const fetchedData = async (url) => {
    setLoading(true);
    try {
      const getData = await fetch(url);
      setTotal(getData.headers.get("X-Total-Count"));
      console.log(getData.headers.get("X-Total-Count"));
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
  }, [page, order]);

  useEffect(() => {
    let obj = { page };
    if (order) {
      obj.order = order;
    }
    setParams(obj);
  }, [page, order]);

  const handleSort = (e) => {
    //console.log(e.target.value)
    setOrder(e.target.value);
  };

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
      <Box
        className="container"
        display="flex"
        justifyContent="space-evenly"
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        w="85%"
        margin="auto"
        mt="30px"
        p="20px"
      >
        <Box
          className="left-cont"
          w="20%"
          h="250px"
          p="20px"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        >
          <Center fontWeight="bold">SORT BY PRICE</Center>
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
        </Box>
        <Box
          className="right-cont"
          w="75%"
          display="grid"
          gridTemplateColumns="repeat(3,1fr)"
          gap="20px"
        >
          {massage.map((i) => (
            <NavLink key={i.id} to={`/massage/${i.id}`}>
              <Box
                h="450px"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                p="20px"
              >
                <Image w="350px" src={i.url} />
                <Text>{i.title}</Text>
                <Text>₹ {i.price}</Text>
                <Text color="green">{i.del}</Text>
              </Box>
            </NavLink>
          ))}
        </Box>
      </Box>
      <Box mt="20px" mb="20px">
        <Pagination total={total} page={page} handleChange={handleChange} />
      </Box>
    </Box>
  );
};

export default Massage;

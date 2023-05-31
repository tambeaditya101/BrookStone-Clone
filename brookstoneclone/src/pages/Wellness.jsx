import { Box, Text, Center } from "@chakra-ui/layout";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Image } from "@chakra-ui/image";
import { Spinner } from "@chakra-ui/spinner";
import { NavLink, useSearchParams } from "react-router-dom";
import Pagination from "../components/Pagination";
import { Select } from "@chakra-ui/select";
let baseURL = `https://brookstone-data.onrender.com`;

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

const Wellness = () => {
  const [massage, setMassage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useSearchParams();
  const [page, setPage] = useState(getCurrentPage(params.get("page")));
  const [order, setOrder] = useState("");
  const [total, setTotal] = useState(1);

  let url;
  if (order) {
    url = `${baseURL}/wellness?_page=${page}&_limit=6&_sort=price&_order=${order}`;
  } else {
    url = ` ${baseURL}/wellness?_page=${page}&_limit=6`;
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
    } else {
      obj = { page };
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
        p="20px"
        w="85%"
        margin="auto"
        mt="30px"
        mb="30px"
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
          w="70%"
          display="grid"
          gridTemplateColumns="repeat(3,1fr)"
          gap="20px"
        >
          {massage.map((i) => (
            <NavLink to={`/wellness/${i.id}`}>
              {" "}
              <Box
                h="550px"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                p="20px"
              >
                <Image w="350px" src={i.url} />
                <Text>{i.title}</Text>
                <Text>₹ {i.price}</Text>
                <Text color="green">{i.del}</Text>
              </Box>{" "}
            </NavLink>
          ))}
        </Box>
      </Box>
      <Box>
        <Pagination total={total} page={page} handleChange={handleChange} />
      </Box>
    </Box>
  );
};

export default Wellness;

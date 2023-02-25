import {
  Box,
  Grid,
  Flex,
  Spacer,
  Image,
  InputGroup,
  InputRightElement,
  Input,
  Link,
} from "@chakra-ui/react";
import EASY from "../logos/EASY.png";
import { SearchIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import WithSubnavigation from "./WithSubnavigation";

function Navbar({handleSearch}) {
  const{isAuth} = useContext(AuthContext)
  
  return <>
    <Box
      h="20"
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      bgColor= {isAuth?'green.200': "RGBA(0, 0, 0, 0.08)"}
    >
      <Box w="170px" h="20" bg="blue.500">
        <NavLink to='/' >
          <Image src={EASY} h="100%" />
        </NavLink>
      </Box>

      <InputGroup w={"550px"}>
        <Input
        onChange={(e)=>{
          e.preventDefault()
          handleSearch(e.target.value)
        }}
          placeholder="Search"
          color="grey.100"
          bg="white"
          border="2px solid RGBA(0, 0, 0, 0.20)"
        />
        <InputRightElement children={<SearchIcon />} />
      </InputGroup>

      <Box
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        w="180px"
        h="10"
      >
        <NavLink to='/login' >
          <i class="fa-regular fa-user"></i>
        </NavLink>
        <NavLink to='/wishlist' >
          <i class="fa-regular fa-heart"></i>
        </NavLink>
        <NavLink to='/cart' >
          <i class="fa-solid fa-cart-shopping"></i>
        </NavLink>
        {
          isAuth? `Logged In`  :'No'
        }
      </Box>
   
      
    </Box>
      <WithSubnavigation/>
</>
  
}
export default Navbar;

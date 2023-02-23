import {
  Box,
  Grid,
  Flex,
  Spacer,
  Image,
  InputGroup,
  InputRightElement,
  Input,
  Link
} from "@chakra-ui/react";
import EASY from "../logos/EASY.png";
import { SearchIcon } from "@chakra-ui/icons";

function Navbar() {
  return (
    <Box
      
      h="20"    
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      bgColor='RGBA(0, 0, 0, 0.08)'
      
    >
      <Box w="170px" h="20" bg="blue.500">
        <Image src={EASY} h="100%" />
      </Box>

      <InputGroup w={"550px"}  >
        <Input placeholder="Search" color='grey.100' bg='white' border='2px solid RGBA(0, 0, 0, 0.20)' />
        <InputRightElement children={<SearchIcon />} />
      </InputGroup>

      <Box display="flex" justifyContent="space-evenly" alignItems="center" w="160px" h="10" >
       <Link><i class="fa-regular fa-user"></i></Link> 
       <Link><i class="fa-regular fa-heart"></i></Link>
       <Link><i class="fa-solid fa-cart-shopping"></i></Link>
      </Box>
    </Box>
  );
}
export default Navbar;



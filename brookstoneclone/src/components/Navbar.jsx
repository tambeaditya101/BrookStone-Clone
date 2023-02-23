import { Box, Grid,Flex, Spacer, Image,InputGroup,InputRightElement,Input } from "@chakra-ui/react";
import EASY from "../logos/EASY.png";
import {SearchIcon} from "@chakra-ui/icons"
function Navbar() {
  return <Box m='2' mt='6'  h='20' border='1px solid black' display='flex' justifyContent='space-around' alignItems='center' >
    
    <Box w='170px' h='20' bg='blue.500' >
        <Image src={EASY} h='100%'/>
    </Box>
   
    <InputGroup w={'380px'} >
    <Input placeholder='Enter amount' />
    <InputRightElement children={<SearchIcon/>} />
  </InputGroup>
   
    <Box w='180px' h='10' border='1px solid red' >
  
    </Box>

  
  </Box>
   

  
}
export default Navbar;

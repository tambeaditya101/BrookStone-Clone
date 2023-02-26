import React from "react";
import { Text, Center, Box } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

//const url = 'http://localhost:8080/massage'
const initState = {
  category: "",
  title: "",
  price: "",
  url: "",
};
function postToCategory(val){
     fetch(`http://localhost:8080/${val.category}`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'title':val.title,
             'price': val.price,
             'url': val.url
        })
    }).then((res)=>{
         res.json();
         alert("Item added Successfully")
        } ).catch((err)=> alert('Enter Valid Category'))
    
}

function Admin() {
  const [form, setForm] = React.useState(initState);
  //const [prods, setProds] = React.useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    //console.log(e.target.value);
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      postToCategory(form)
   // setProds([...prods, form]);
    console.log('from sublit btn',form);
    setForm(initState)
  };
  const { category, title, price, url } = form;
  return (
    <Box
      w="30%"
      h='400px'
      margin="auto"
      mt='40px'
      mb='40px'
      border="2px solid teal"
      borderRadius='10px'
      p="30px"
      textAlign="center"
    >
      <Text fontStyle='italic' fontWeight='bold' fontSize='3xl' >Enter Product Details Here</Text> <br />
      <FormControl  >
        <Input
          name="category"
          type="text"
          placeholder="Enter Category"
          onChange={handleChange}
          value={category}
        /> 
        <Input
          name="title"
          type="text"
          placeholder="Enter Title"
          onChange={handleChange}
          value={title}
        />
        <Input
          name="price"
          type="number"
          placeholder="Enter Price"
          onChange={handleChange}
          value={price}
        />
        <Input
          name="url"
          type="text"
          placeholder="Enter Url"
          onChange={handleChange}
          value={url}
        />
        <Input type="submit" bg="teal" color="white" onClick={handleSubmit} />
      </FormControl>
    </Box>
  );
}

export default Admin;

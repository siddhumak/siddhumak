
import React from 'react';
import { Box, Button, CheckIcon, FormControl, Heading,Select,Text, TextArea, VStack } from 'native-base';
import COLORS from '../data/color';
import Message from './Message';
import { useState } from 'react';



export default function Review() {
  const [ratings, setRatings] = useState('');
  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>
       REVIEW
    </Heading>
    {/*If there is no review*/}
    <Message color={COLORS.main} bg={COLORS.deepGray} size={10} children={"No Review"}>sdfghjk</Message>
    {/*Review*/}
   <Box p={3} bg={COLORS.deepGray} mt={5} rounded={5}>
   <Heading bold fontSize={15} color={COLORS.black}>
       User Doe
    </Heading>

    <Text mb={3}> Jan 12 2023</Text>
    <Message color={COLORS.black} bg={COLORS.white} size={12} children={""}>sdfghjk</Message>
   </Box>
   {/*Write Review*/}
   <Box mt={6}>
    <Heading fontSize={15} bold mb={4}>
      REVIEW THIS PRODUCT
      
    </Heading>
    <VStack space={6}>
      <FormControl>
        <FormControl.Label
        _text={{
          fontSize:"12px",
          fontWeight:"bold",
        }}
        >Rating</FormControl.Label>
        <Select bg={COLORS.subGreen} borderWidth={0} rounded={5} py={4} placeholder="choose one option"
        _selectedItem={{
          bg:COLORS.subGreen,
          endIcon:<CheckIcon size={3}></CheckIcon>,
        }}
        selectedValue={ratings}
        onValueChange={(e) => setRatings(e)}
        >
         <Select.Item label="1 - Poor" value='1'></Select.Item>
         <Select.Item label="2 - Fair" value='2'></Select.Item>
         <Select.Item label="3 - Good" value='3'></Select.Item>
        </Select>
      </FormControl>
      <FormControl>
        <FormControl.Label
        _text={{
          fontSize:"12px",
          fontWeight:"bold",
        }}
        >
         Comment
        </FormControl.Label>
        <TextArea
        h={24}
        w="full"
        placeholder='This Product is Good.....'
        borderWidth={0}
        bg={COLORS.subGreen}
        py={4}
        
        >

        </TextArea>
      </FormControl>
      <Button bg={COLORS.main} color={COLORS.white} borderRadius={20}>
       Submit
      </Button>

    </VStack>

   </Box>
    </Box>
  );
}

import React from 'react';
import { Box, Button, Center, Text } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import COLORS from '../data/color';

const CartEmpty = () => {
  return (
    <Box flex={1} px={4}>
    <Center h="600px">
        <Center w={200} h={200} bg={COLORS.white} rounded="full" >
            <FontAwesome name="shopping-basket" size={64} color={COLORS.main}>

            </FontAwesome>
        </Center>
        <Text color={COLORS.main} mt={5} bold>CART IS EMPTY</Text>
    </Center>
    <Button bg={COLORS.main} color={COLORS.white} borderRadius={20} p={3}>
       START SHOPPING
      </Button>
    </Box>
  );
};

export default CartEmpty
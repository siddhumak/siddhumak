import React from 'react';
import { Box, Button, Center, ScrollView, Text,View } from 'native-base';
import COLORS from '../data/color'
import HomeSearch from '../Components/HomeSearch'
import HomeProducts from '../Components/HomeProducts'
import CartItems from '../Components/CartItems';


function CartScreen() {
  return (
    <Box flex={1} safeAreaTop bg={COLORS.subGreen}>
      <Center w="full" py={5}>
        <Text color={COLORS.black} fontSize={20} bold>
          Cart

        </Text>
        
      </Center>
      <ScrollView showsVerticalScrollIndicator={false}>
               <CartItems></CartItems>
      </ScrollView>

    </Box>
  );
};

export default CartScreen;
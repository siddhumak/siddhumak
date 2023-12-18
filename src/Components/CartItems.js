import React from 'react';
import { Box, Center, HStack, Image, Pressable, Text } from 'native-base';
import { SwipeListView } from 'react-native-swipe-list-view';
import COLORS from '../data/color';
import { FontAwesome } from '@expo/vector-icons';
import Products from '../data/Products';


const Swiper = () => (
    <SwipeListView
        rightOpenValue={-50}
        previewRowKey='0'
        previewOpenValue={-40}
        previewOpenDelay={3000}
        data={Products.slice(0, 2)}
        renderItem={renderItems}
        renderHiddenItem={renderHiddenItems}
        showsVerticalScrollIndicator={false}/>
    );


const renderItems = (Products) => {
    <Pressable>
        <Box ml={6} mb={3}>
            <HStack alignItems="center" bg={COLORS.white} shadow={1} rounded={10} overflow="hidden">
                <Center w="200px" bg={COLORS.deepGray} >
                <Image
                source={Products.img}
                alt={Products.name}
                w="full"
                h={24}
                resizeMode="contain"
                >
                </Image>
                </Center>
            </HStack>
        </Box>
    </Pressable>


}

const renderHiddenItems = () => {
    <Pressable w={50} roundedTopRight={10} roundedBottomRight={10} h="88%" ml='auto' justifyContent="center" bg={COLORS.red}>
        <Center alignItems="center" space={2}>
            <FontAwesome name="trash" size={24} color={COLORS.white}>
            </FontAwesome>
        </Center>
    </Pressable>


};

const CartItems = () => {
    return (
        <Box mr={6}>
            <Swiper />
        </Box>
    );
};

export default CartItems;


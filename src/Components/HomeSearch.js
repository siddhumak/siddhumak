import { Box, HStack, Input, Pressable } from 'native-base'
import React from 'react'
import COLORS from '../data/color'
import { FontAwesome5 } from '@expo/vector-icons';

function HomeSearch() {
    return (


        <HStack space={3} w={'full'} px={6} bg={COLORS.main} py={4} alignItems={'center'} safeAreaTop>
            <Input placeholder='Nike,Puma,Adidas....' w="85%" bg={COLORS.white} type='search' variant="filled"  height={12} borderWidth={0} _focus={{bg:COLORS.white}}></Input>

            <Pressable ml={3}>
                <FontAwesome5 name="shopping-basket" size={24} color={COLORS.white}></FontAwesome5>
                <Box px={1} rounded='full' position='absolute' top={-13} left={2} bg={COLORS.red} _text={{ color: COLORS.white, fontSize: '11px', }}>5</Box>
            </Pressable>
        </HStack>
    )
}

export default HomeSearch
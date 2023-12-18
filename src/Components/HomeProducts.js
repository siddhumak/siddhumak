import { Flex, Box,Image, Pressable, ScrollView, Text, Heading } from 'native-base'
import React from 'react'
import Products from '../data/Products'
import COLORS from '../data/color'


function HomeProducts() {
  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
      <Flex
      flexWrap={"wrap"}
      direction='row'
      justifyContent="space-between"
      px={6}>
        {
          Products.map((Products) => (
            <Pressable key={Products._id} w="47%" bg={COLORS.white} rounded="md" shadow={2} pt={0.3} my={3} pb={2} overflow="hidden" >
              
              <Image
                source={Products.img}
                alt={Products.name}
                w="full"
                h={24}
                resizeMode="contain"
                >
                </Image>

                <Box px={4} pt={1}>
                <Text fontSize={10} mt={1} isTruncated w="full">
                    {Products.name}
                  </Text>
                 <Heading size="sm" bold>
                  ${Products.price}

                  
                  
                 </Heading>

                </Box>

            </Pressable>
          ))
        }

      </Flex>
    </ScrollView>

    
        
  )
}

export default HomeProducts
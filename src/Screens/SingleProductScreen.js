import { Box, Button, HStack, Heading, Image, ScrollView, Spacer, Text, View } from 'native-base'
import React from 'react'
import COLORS from '../data/color'
import NumericInput from 'react-native-numeric-input'
import { useState } from 'react';
import Review from '../Components/Review';

function SingleProuctScreen() {
  const [value, setValue] = useState(0);
  return (
    <Box safeArea flex={1} bg={COLORS.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image source={require("../assets/plant1.png")} alt="Image" w="full" h={300} resizeMode="contain" ></Image>

        <Heading bold fontSize={15} mb={2} lineHeight={22}>Succulent Plant</Heading>
        <HStack space={2} alignItems={"center"} my={5}>
          <NumericInput
            value={value}
            totalWidth={140}
            totalHeight={30}
            iconSize={25}
            step={1} 
            maxValue={15} 
            minValue={0}
            borderColor={COLORS.deepGray} 
            rounded 
            textColor={COLORS.black}
            iconStyle={{color:COLORS.white}}
            rightButtonBackgroundColor={COLORS.main}
            leftButtonBackgroundColor={COLORS.main} />
            <Spacer>
              <Heading bold color={COLORS.black} fontSize={19}>
                 $39.99
              </Heading>
            </Spacer>
        </HStack>
      <Text lineHeight={24} fontSize={12}>
      'Succulent Plantis one of the most popular and beautiful species that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other plants, a characteristic known as succulence.',

      </Text>
      <Button bg={COLORS.main} color={COLORS.white} mt={10} borderRadius={20}>ADD TO CART</Button>
      {/*review*/}
      <Review />
      </ScrollView>
    </Box>
  )
}

export default SingleProuctScreen
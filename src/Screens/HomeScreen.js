import React from 'react'
import { Box, Text,View } from 'native-base'
import COLORS from '../data/color'
import HomeSearch from '../Components/HomeSearch'
import HomeProducts from '../Components/HomeProducts'


function HomeScreen() {
  return (
    <Box flex={1} bg={COLORS.subGreen}>
    <HomeSearch />
    <HomeProducts/>
   
    </Box>
  )
}

export default HomeScreen
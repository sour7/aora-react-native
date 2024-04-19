import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title,handlePress, containerStyle, textStyle, isloading}) => {
  return (
   <TouchableOpacity
   onPress={handlePress}
   activeOpacity={0.7}
   className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyle} ${isloading?"opacity-50":""}`}
   disabled={isloading}
   >
    <Text className={`text-primary font-psemibold text-lg px-2 ${textStyle}`}>{title}</Text>
   </TouchableOpacity>
  )
}

export default CustomButton
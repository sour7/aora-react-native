import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "../constants";
import CustomButton from "./CustomButton"
import { router } from "expo-router";

const EmptyState = ({title, subtitle}) => {
  return (
    <View className="justify-center items-center px-2">
      <Image source={images.empty} className="w-[270px] h-[215px]" resizeMode="contain" />
      <Text className="font-pmedium text-sm text-gray-100">
             {subtitle}
        </Text>
        <Text className="text-lg font-semibold text-white">
           {title}
        </Text>
        <CustomButton
        title="Create a new video"
        handlePress={()=>router.push('/create')}
        />
            
    </View>
  );
};

export default EmptyState;

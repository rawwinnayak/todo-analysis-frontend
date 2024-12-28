import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
// Define the variants and their corresponding styles
const Variants = {
  h1: tw`text-4xl font-bold`,
  h2: tw`text-3xl font-bold`,
  h3: tw`text-2xl font-semibold`,
  h4: tw`text-xl font-semibold`,
  h5: tw`text-lg font-medium`,
  h6: tw`text-base font-medium`,
  h7: tw`text-sm font-regular`,
  h8: tw`text-xs font-regular`,
  h9: tw`text-[10px] font-light`,
};

const CustomText = ({ Variant = "h1", style, text }) => {
  const variantStyle = Variants[Variant] || tw`text-base`;
  return <Text style={[variantStyle, style]}>{text}</Text>;
};

export default CustomText;

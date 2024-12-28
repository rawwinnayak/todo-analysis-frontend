import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import CustomText from './CustomText';
const ButtonVariants = {
    primary: tw`bg-blue-500 text-white px-4 py-2 rounded`,
    secondary: tw`bg-gray-500 text-white px-4 py-2 rounded`,
    success: tw`bg-green-500 text-white px-4 py-2 rounded`,
    danger: tw`bg-red-500 text-white px-4 py-2 rounded`,
    outline: tw`border border-gray-500 text-gray-500 px-4 py-2 rounded`,
  };

  const CustomButton = ({ 
    variant = 'primary', 
    label = 'Button', 
    onPress, 
    style, 
    textStyle 
  }) => {
    const buttonStyle = ButtonVariants[variant] || ButtonVariants.primary;
  
    return (
      <TouchableOpacity onPress={onPress} style={[buttonStyle, style]}>
        <CustomText text={label} style={tw`text-center text-white`} Variant='h6' />
      </TouchableOpacity>
    );
  };

export default CustomButton
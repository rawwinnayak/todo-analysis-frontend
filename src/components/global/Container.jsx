import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
const ContainerVariants = {
    small: tw`p-2`,
    medium: tw`p-4`,
    large: tw`p-6`,
    full: tw`p-4 flex-1`,
  };
  
  const Container = ({
    variant = 'medium',
    style,
    children
  }) => {
    const containerStyle = ContainerVariants[variant] || ContainerVariants.medium;
  
    return <View style={[containerStyle, style]}>{children}</View>;
  };
  
export default Container
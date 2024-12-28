import { View, Text, ActivityIndicator } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const Loading = ({ isloading }) => {
  return (
    <View style={tw``}>
      {isloading && (
        <View style={tw`flex-row items-center`}>
          <ActivityIndicator size="large" color="#10B981" style={tw`mr-2`} />
          <Text style={tw`text-green-500 text-lg font-semibold`}>Loading...</Text>
        </View>
      )}
    </View>
  );
};

export default Loading;

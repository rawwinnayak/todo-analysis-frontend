import React from "react";
import { View, Text } from "react-native";
import tw from "twrnc";

const InputExplanationCard = ({ tags, description, color }) => {
  return (
    <View
      style={tw`bg-white rounded-lg shadow-lg p-3 border border-gray-200`}
    >
      {/* Explanation Items */}
      <View style={tw`flex-row items-center`}>
        <Text style={tw`text-base text-gray-700`}>
          <Text style={tw`font-semibold ${color}`}>{tags}</Text>{" "}
          {description}
        </Text>
      </View>
    </View>
  );
};

export default InputExplanationCard;

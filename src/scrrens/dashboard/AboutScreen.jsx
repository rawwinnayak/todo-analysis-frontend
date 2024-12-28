import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";

const AboutScreen = () => {
  return (
    <ScrollView style={tw`bg-gray-100 flex-1`}>
      <SafeAreaView style={tw`p-4`}>
        <Text style={tw`text-2xl font-bold text-center text-blue-600 mb-4`}>
          About Us
        </Text>

        <Text style={tw`text-gray-800 text-base mb-4`}>
          Welcome to the Todo Analysis app! We aim to provide a user-friendly
          platform that helps you analyze, organize, and streamline your tasks
          effectively.
        </Text>

        <Text style={tw`text-gray-800 text-base mb-4`}>
          Our mission is to empower users to achieve their goals through
          productivity-enhancing tools. Whether you’re managing a complex
          project or simple daily tasks, Todo Analysis is here to assist you
          every step of the way.
        </Text>

        <Text style={tw`text-gray-800 text-base mb-4`}>
          This application is developed by Robin Nayak, a passionate software
          developer committed to building solutions that make life simpler. Your
          feedback and support drive continuous improvement, so feel free to
          share your thoughts!
        </Text>

        <Text style={tw`text-gray-800 text-base mb-4`}>
          Thank you for choosing Todo Analysis. Let’s achieve greatness, one
          task at a time!
        </Text>
      </SafeAreaView>
    </ScrollView>
  );
};

export default AboutScreen;

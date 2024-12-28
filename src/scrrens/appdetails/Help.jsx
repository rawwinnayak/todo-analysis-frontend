import React from "react";
import { ScrollView, Text, View, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";

const Help = () => {
  const contactSupport = () => {
    Alert.alert(
      "Contact Support",
      "For assistance, please email robin86nayak@gmail.com."
    );
  };

  return (
    <ScrollView style={tw`bg-gray-100 flex-1`}>
      <SafeAreaView>
        <View style={tw`p-4`}>
          <Text style={tw`text-2xl font-bold text-center text-green-600 mb-4 border-b-2 border-gray-300`}>
            Help & Support
          </Text>

          <Text style={tw`text-gray-800 text-base mb-4`}>
            Need help? We’re here to assist you! Below are some common solutions
            to problems you might encounter while using the Todo Analysis app.
          </Text>

          <View style={tw`mb-4`}>
            <Text style={tw`text-lg font-semibold text-green-600 mb-2`}>
              Frequently Asked Questions
            </Text>
            <Text style={tw`text-gray-700 text-sm mb-2`}>
              <Text style={tw`font-bold`}>Q:</Text> How do I reset my password?
              {"\n"}
              <Text style={tw`font-bold`}>A:</Text> Go to the login screen and
              tap "Forgot Password" to reset your credentials.
            </Text>
            <Text style={tw`text-gray-700 text-sm`}>
              <Text style={tw`font-bold`}>Q:</Text> Why is the app not working
              offline? {"\n"}
              <Text style={tw`font-bold`}>A:</Text> The app requires an active
              internet connection for certain features. Ensure your device is
              online.
            </Text>
          </View>

          <View style={tw`mb-4`}>
            <Text style={tw`text-lg font-semibold text-green-600 mb-2`}>
              Contact Us
            </Text>
            <Text style={tw`text-gray-700 text-sm mb-2`}>
              Can’t find what you’re looking for? Reach out to us for
              personalized support.
            </Text>
            <TouchableOpacity
              onPress={contactSupport}
              style={tw`bg-green-600 py-3 rounded-lg`}
            >
              <Text style={tw`text-white text-center font-semibold text-lg`}>
                Contact Support
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Help;

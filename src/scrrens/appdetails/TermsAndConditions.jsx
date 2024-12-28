import React from "react";
import { ScrollView, Text, View, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";

const TermsAndConditions = () => {
  const handleAccept = () => {
    Alert.alert("Thank you!", "You have accepted the Terms and Conditions.");
  };

  return (
    <SafeAreaView style={tw`flex-1`}>
      <ScrollView style={tw`bg-gray-100 flex-1`}>
        <View style={tw`p-4`}>
          <Text style={tw`text-2xl font-bold text-center text-blue-600 mb-4`}>
            Terms and Conditions
          </Text>

          <Text style={tw`text-gray-800 text-base mb-4`}>
            Welcome to the Todo Analysis app ("Application"), created by Robin
            Nayak ("Service Provider"). By downloading or using this
            Application, you agree to the following terms and conditions. Please
            read them carefully.
          </Text>

          <View style={tw`mb-4`}>
            <Text style={tw`text-lg font-semibold text-blue-600 mb-2`}>
              Intellectual Property
            </Text>
            <Text style={tw`text-gray-700 text-sm`}>
              The Application and its content are the exclusive property of the
              Service Provider. You may not modify, copy, or create derivative
              works from the Application without explicit permission.
            </Text>
          </View>

          <View style={tw`mb-4`}>
            <Text style={tw`text-lg font-semibold text-blue-600 mb-2`}>
              Usage and Updates
            </Text>
            <Text style={tw`text-gray-700 text-sm`}>
              The Application is provided "AS IS" and may be updated or modified
              at any time. You agree to download updates to ensure continued
              usage. Unauthorized attempts to extract or modify the source code
              are prohibited.
            </Text>
          </View>

          <View style={tw`mb-4`}>
            <Text style={tw`text-lg font-semibold text-blue-600 mb-2`}>
              Data Responsibility
            </Text>
            <Text style={tw`text-gray-700 text-sm`}>
              Some features may require an active internet connection. The
              Service Provider is not responsible for data charges, roaming
              fees, or any related costs.
            </Text>
          </View>

          <View style={tw`mb-4`}>
            <Text style={tw`text-lg font-semibold text-blue-600 mb-2`}>
              Third-Party Services
            </Text>
            <Text style={tw`text-gray-700 text-sm`}>
              The Application may use third-party services, such as Google Play
              Services, which have their own terms and conditions. Please review
              them accordingly.
            </Text>
          </View>

          <View style={tw`mb-4`}>
            <Text style={tw`text-lg font-semibold text-blue-600 mb-2`}>
              No Warranty
            </Text>
            <Text style={tw`text-gray-700 text-sm`}>
              The Service Provider strives to ensure accuracy but cannot
              guarantee that all features will function flawlessly. The Service
              Provider is not liable for any loss or damage resulting from
              Application usage.
            </Text>
          </View>

          <View style={tw`mb-4`}>
            <Text style={tw`text-lg font-semibold text-blue-600 mb-2`}>
              Termination of Service
            </Text>
            <Text style={tw`text-gray-700 text-sm`}>
              The Service Provider reserves the right to terminate the
              Application or your access to it at any time without notice.
            </Text>
          </View>

          <View style={tw`mb-4`}>
            <Text style={tw`text-lg font-semibold text-blue-600 mb-2`}>
              Changes to Terms
            </Text>
            <Text style={tw`text-gray-700 text-sm`}>
              These Terms and Conditions may change over time. By continuing to
              use the Application, you agree to any updated terms.
            </Text>
          </View>

          <View style={tw`mb-8`}>
            <Text style={tw`text-lg font-semibold text-blue-600 mb-2`}>
              Contact Us
            </Text>
            <Text style={tw`text-gray-700 text-sm`}>
              For questions or concerns, please contact the Service Provider at{" "}
              <Text style={tw`text-blue-600 underline`}>
                robin86nayak@gmail.com
              </Text>
              .
            </Text>
          </View>

          <TouchableOpacity
            onPress={handleAccept}
            style={tw`bg-blue-600 py-3 rounded-lg`}
          >
            <Text style={tw`text-white text-center font-semibold text-lg`}>
              Accept Terms and Conditions
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TermsAndConditions;

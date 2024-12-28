import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";

const Disclaimer = () => {
  return (
    <ScrollView style={tw`bg-gray-100 flex-1`}>
      <SafeAreaView style={tw`p-4`}>
        <Text style={tw`text-2xl font-bold text-center text-red-600 mb-4`}>
          Disclaimer
        </Text>

        <Text style={tw`text-gray-800 text-base mb-4`}>
          The information provided by the Todo Analysis app ("Application") is
          for general informational purposes only. While every effort is made to
          ensure the accuracy and reliability of the information, the Service
          Provider makes no representation or warranty of any kind, express or
          implied, regarding the accuracy, adequacy, validity, reliability, or
          completeness of any information.
        </Text>

        <Text style={tw`text-gray-800 text-base mb-4`}>
          Under no circumstance shall the Service Provider be held liable for
          any loss or damage of any kind incurred as a result of the use of the
          Application or reliance on any information provided therein. Your use
          of the Application is solely at your own risk.
        </Text>

        <Text style={tw`text-gray-800 text-base mb-4`}>
          The Application may contain links to external websites or services
          that are not provided or maintained by the Service Provider. The
          Service Provider does not guarantee the accuracy, relevance,
          timeliness, or completeness of any information on these external
          websites.
        </Text>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Disclaimer;

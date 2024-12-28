import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I reset my password?",
      answer: "Go to the login screen and tap 'Forgot Password' to reset your credentials. Follow the instructions sent to your registered email.",
    },
    {
      question: "Why is the app not working offline?",
      answer: "Some features of the app require an active internet connection. Ensure your device is connected to Wi-Fi or mobile data.",
    },
    {
      question: "How do I update the app?",
      answer: "Visit the Google Play Store or App Store, search for 'Todo Analysis', and tap the update button if an update is available.",
    },
    {
      question: "Can I use the app on multiple devices?",
      answer: "Yes, you can log in to the app on multiple devices using the same account credentials.",
    },
  ];

  return (
    <ScrollView style={tw`bg-gray-100 flex-1`}>
      <SafeAreaView style={tw`p-4`}>
        <Text style={tw`text-2xl font-bold text-center text-green-600 mb-4`}>
          Frequently Asked Questions
        </Text>

        {faqs.map((faq, index) => (
          <View
            key={index}
            style={tw`mb-4 border-b border-gray-300 pb-4`}
          >
            <TouchableOpacity
              onPress={() => toggleFAQ(index)}
              style={tw`flex-row justify-between items-center`}
            >
              <Text style={tw`text-lg font-semibold text-gray-800`}>
                {faq.question}
              </Text>
              <Text style={tw`text-gray-500 text-xl`}>
                {activeIndex === index ? "-" : "+"}
              </Text>
            </TouchableOpacity>
            {activeIndex === index && (
              <Text style={tw`mt-2 text-gray-700 text-base`}>
                {faq.answer}
              </Text>
            )}
          </View>
        ))}
      </SafeAreaView>
    </ScrollView>
  );
};

export default FAQ;

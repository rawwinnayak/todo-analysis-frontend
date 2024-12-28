import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Linking,
  ScrollView,
  SafeAreaView,
} from "react-native";
import tw from "twrnc";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmail = () => {
    if (!name || !email || !message) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    const subject = `Message from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailto = `mailto:robin86nayak@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    Linking.openURL(mailto)
      .then(() => Alert.alert("Success", "Email client opened."))
      .catch(() => Alert.alert("Error", "Could not open email client."));
  };

  return (
    <ScrollView style={tw`bg-gray-100 flex-1 mt-5`}>
      <SafeAreaView style={tw`flex-1 mt-3`}>
        <View style={tw`p-4`}>
          <Text style={tw`text-2xl font-bold text-center text-blue-600 mb-4 border-b border-gray-300 pb-2`}>
            Contact Us
          </Text>

          <Text style={tw`text-gray-800 text-base mb-4`}>
            Have a question, feedback, or issue? Fill out the form below to send
            us an email.
          </Text>

          <View style={tw`mb-4`}>
            <Text style={tw`text-gray-700 text-lg mb-2`}>Your Name</Text>
            <TextInput
              style={tw`border border-gray-300 rounded-lg p-3 bg-white text-gray-700`}
              placeholder="Enter your name"
              value={name}
              onChangeText={setName}
            />
          </View>

          <View style={tw`mb-4`}>
            <Text style={tw`text-gray-700 text-lg mb-2`}>Your Email</Text>
            <TextInput
              style={tw`border border-gray-300 rounded-lg p-3 bg-white text-gray-700`}
              placeholder="Enter your email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={tw`mb-4`}>
            <Text style={tw`text-gray-700 text-lg mb-2`}>Message</Text>
            <TextInput
              style={tw`border border-gray-300 rounded-lg p-3 bg-white text-gray-700 h-32`}
              placeholder="Write your message here"
              multiline
              value={message}
              onChangeText={setMessage}
            />
          </View>

          <TouchableOpacity
            onPress={handleSendEmail}
            style={tw`bg-blue-600 py-3 rounded-lg`}
          >
            <Text style={tw`text-white text-center font-semibold text-lg`}>
              Send Email
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Contact;

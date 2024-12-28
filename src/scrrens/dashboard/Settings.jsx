import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import CustomText from '../../components/global/CustomText';

const Settings = () => {
  const navigation = useNavigation();
  const sections = [
    { title: 'Privacy Policy', onPress: () => navigation.navigate('PrivacyPolicy') },
    { title: 'Disclaimer', onPress: () => navigation.navigate('Disclaimer') },
    { title: 'Terms and Conditions', onPress: () => navigation.navigate('TermsAndConditions') },
    { title: 'About Us', onPress: () => navigation.navigate('About') },
    { title: 'Contact Us', onPress: () => navigation.navigate('Contact') },
    { title: 'Help', onPress: () => navigation.navigate('Help') },
    { title: 'FAQ', onPress: () => navigation.navigate('FAQ') },
  ];

  return (
    
    <SafeAreaView style={tw`flex-1 bg-gray-50 mt-6 pt-4`}>
      <ScrollView contentContainerStyle={tw`p-4`}>
        <CustomText text="Settings and Preferences" Variant="h3" style={tw`text-blue-600 mb-4 border-b-2 border-gray-300 text-center`} />
        {sections.map((section, index) => (
          <TouchableOpacity
            key={index}
            onPress={section.onPress}
            style={tw`bg-white shadow-sm p-4 mb-4 rounded-lg border border-gray-200`}
          >
            <Text style={tw`text-gray-800 font-semibold`}>{section.title}</Text>
          </TouchableOpacity>
        ))}

        {/* Footer */}
        <View style={tw`mt-8 p-4 border-t border-gray-200`}>
          <Text style={tw`text-center text-gray-600 text-sm`}>
            © {new Date().getFullYear()} ToDo Analysis | Robin Nayak. All rights reserved.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;

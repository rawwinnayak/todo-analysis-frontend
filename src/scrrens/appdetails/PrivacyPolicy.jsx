import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';

const Section = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={tw`mb-4`}>
      <TouchableOpacity
        onPress={() => setExpanded(!expanded)}
        style={tw`bg-gray-200 p-4 rounded-lg`}
      >
        <Text style={tw`text-lg font-semibold text-gray-800`}>{title}</Text>
      </TouchableOpacity>
      {expanded && (
        <View style={tw`bg-white p-4 border border-gray-300 rounded-lg mt-2`}>
          <Text style={tw`text-gray-700 text-sm leading-5`}>{content}</Text>
        </View>
      )}
    </View>
  );
};

const PrivacyPolicy = () => {
  const sections = [
    {
      title: 'Privacy Policy',
      content:
        'This privacy policy applies to the Todo Analysis app ("Application") for mobile devices, created by Robin Nayak ("Service Provider") as an Ad Supported service. This service is intended for use "AS IS".',
    },
    {
      title: 'Information Collection and Use',
      content:
        'The Application collects information such as your device IP address, visited pages, time spent on the app, and operating system. It may also require you to provide personally identifiable information, including email, username, and todo tasks for improved user interaction.',
    },
    {
      title: 'Third Party Access',
      content:
        'Aggregated, anonymized data may be transmitted to external services to improve the Application. Third-party services used include Google Play Services. Data may also be disclosed as required by law or to protect rights and safety.',
    },
    {
      title: 'Opt-Out Rights',
      content:
        'You can stop all collection of information by uninstalling the Application. Use the standard uninstall process available on your mobile device or application marketplace.',
    },
    {
      title: 'Data Retention Policy',
      content:
        'The Service Provider will retain user data for as long as you use the Application and for a reasonable time thereafter. To delete your data, contact robin86nayak@gmail.com.',
    },
    {
      title: 'Children',
      content:
        'The Application does not knowingly collect data from children under 13. If you believe your child has provided personal information, contact robin86nayak@gmail.com to have the data deleted.',
    },
    {
      title: 'Security',
      content:
        'The Service Provider implements physical, electronic, and procedural safeguards to protect your information.',
    },
    {
      title: 'Changes',
      content:
        'This Privacy Policy may be updated from time to time. Continued use of the Application signifies approval of changes. The current policy is effective as of 2024-12-28.',
    },
    {
      title: 'Your Consent',
      content:
        'By using the Application, you consent to the processing of your information as described in this Privacy Policy.',
    },
    {
      title: 'Contact Us',
      content:
        'For any questions regarding privacy, contact the Service Provider via email at robin86nayak@gmail.com.',
    },
  ];

  return (
    <SafeAreaView style={tw`flex-1 bg-gray-50 p-4 mt-2`}>
      <ScrollView contentContainerStyle={tw`pb-8`}>
        <Text style={tw`text-2xl font-bold text-gray-800 mb-4 text-center border-b-2 border-gray-300`}>
          Privacy Policy
        </Text>
        {sections.map((section, index) => (
          <Section key={index} title={section.title} content={section.content} />
        ))}
        <View style={tw`mt-4 p-4 border-2 border-t border-gray-300 rounded-lg`}>
          <Text style={tw`text-center text-gray-500 text-sm`}>
            © {new Date().getFullYear()} Robin Nayak. All rights reserved.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PrivacyPolicy;

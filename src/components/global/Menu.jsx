import { View, Pressable, Text } from 'react-native';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faPlus, faCog, faBrain } from '@fortawesome/free-solid-svg-icons';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation();
  const menuItems = [
    { name: 'Home', icon: faHome, action: () => navigation.navigate('Home') },
    { name: 'AddTask', icon: faPlus, action: () => navigation.navigate('AddTask') },
    { name: 'Mood', icon: faBrain, action: () => navigation.navigate('AnalyzeMood') },
    { name: 'Settings', icon: faCog, action: () => navigation.navigate('Settings') },
  ];

  return (
    <View style={tw`absolute bottom-0 left-0 right-0 flex-row justify-around bg-white py-4 shadow-lg border-t border-gray-200`}>
      {menuItems.map((item, index) => (
        <Pressable key={index} onPress={item.action} style={tw`flex items-center`}>
          <FontAwesomeIcon icon={item.icon} size={24} style={tw`text-gray-600`} />
          <Text style={tw`text-xs text-gray-600 mt-1`}>{item.name}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default Menu;

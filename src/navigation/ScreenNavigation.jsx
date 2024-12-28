import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../scrrens/dashboard/HomeScreen";
import AboutScreen from "../scrrens/dashboard/AboutScreen";
import Login from "../scrrens/auth/Login";
import AddTaskScreen from "../scrrens/dashboard/AddTaskScreen";
import Menu from "../components/global/Menu";
import AnalyzeMood from "../scrrens/dashboard/AnalyzeMood";
import Settings from "../scrrens/dashboard/Settings";
import PrivacyPolicy from "../scrrens/appdetails/PrivacyPolicy";
import TermsAndConditions from "../scrrens/appdetails/TermsAndConditions";
import Disclaimer from "../scrrens/appdetails/Disclaimer";
import Help from "../scrrens/appdetails/Help";
import Contact from "../scrrens/appdetails/Contact";
import FAQ from "../scrrens/appdetails/FAQ";

const Stack = createNativeStackNavigator();
let isauth = true;
const screens = isauth ? [
  {
    name: "Home",
    component: HomeScreen,
    options: { title: "Home", headerShown: false },
  },
  {
    name: "About",
    component: AboutScreen,
    options: { title: "About", headerShown: false },
  },
  {
    name: "AddTask",
    component: AddTaskScreen,
    options: { title: "AddTask", headerShown: false },
  },
  {
    name: "Menu",
    component: Menu,
    options: { title: "Menu", headerShown: false },
  },
  {
    name: "AnalyzeMood",
    component: AnalyzeMood,
    options: { title: "AnalyzeMood", headerShown: false },
  },
  {
    name: "Settings",
    component: Settings,
    options: { title: "Settings", headerShown: false },
  },
  {
    name: "PrivacyPolicy",
    component: PrivacyPolicy,
    options: { title: "PrivacyPolicy", headerShown: false },
  },
  {
    name: "TermsAndConditions",
    component: TermsAndConditions,
    options: { title: "TermsAndConditions", headerShown: false },
  },
  {
    name: "Disclaimer",
    component: Disclaimer,
    options: { title: "Disclaimer", headerShown: false },
  },
  {
    name: "Help",
    component: Help,
    options: { title: "Help", headerShown: false },
  },
  {
    name: "Contact",
    component: Contact,
    options: { title: "Contact", headerShown: false },
  },
  {
    name: "FAQ",
    component: FAQ,
    options: { title: "FAQ", headerShown: false },
  },
]: [
  {
    name: "Login",
    component: Login,
    options: { title: "Login", headerShown: false },
  },
];

const ScreenNavigation = () => {
  return (
    <Stack.Navigator>
      {screens.map((screen, index) => (
        <Stack.Screen
          key={index}
          name={screen.name}
          component={screen.component}
          options={screen.options}
        />
      ))}
    </Stack.Navigator>
  );
};

export default ScreenNavigation;

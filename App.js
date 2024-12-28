import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import ScreenNavigation from "./src/navigation/ScreenNavigation";
import { Provider } from "react-redux";
import { store } from "./src/app/store";
import { View } from "react-native";
import Menu from "./src/components/global/Menu";
import tw from "twrnc";

const App = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <ScreenNavigation />
          <View style={tw`h-16`}>
            <Menu />
          </View>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;

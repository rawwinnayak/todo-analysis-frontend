import { View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import CustomText from "../../components/global/CustomText";
import Container from "../../components/global/Container";
import AddTask from "../../components/dashboard/AddTask";
import TaskLists from "../../components/dashboard/TaskLists";
import Menu from "../../components/global/Menu";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";

const HomeScreen = () => {
  const navigation = useNavigation();
  const tasks = useSelector((state) => state.todo.tasks_record);
  console.log("home screen",tasks);
  console.log("===========================================================");
  return (
    <SafeAreaView style={tw`flex-1 bg-gray-50`}>
      <ScrollView>
        <CustomText
          text="Your Day Tasks"
          Variant="h3"
          style={tw`text-center mt-4 mb-2 border-b-2 border-gray-300 pb-2 text-blue-700`}
        />
        <Container variant="medium" style={tw`flex-grow mb-4`}>
          <TaskLists tasks={tasks} />
          {/* Uncomment when AddTask functionality is active */}
          {/* <AddTask setTasks={setTasks} /> */}
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

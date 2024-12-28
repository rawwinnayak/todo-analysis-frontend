import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import CustomText from "../../components/global/CustomText";
import Container from "../../components/global/Container";
import TaskLists from "../../components/dashboard/TaskLists";
import { useSelector } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";

const HomeScreen = () => {
  const tasks = useSelector((state) => state.todo.tasks_record);
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
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

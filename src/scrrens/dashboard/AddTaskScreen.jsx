import { View, Text, ScrollView } from "react-native";
import React from "react";
import AddTask from "../../components/dashboard/AddTask";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import Container from "../../components/global/Container";
import { useNavigation } from "@react-navigation/native";
import InputExplanationCard from "../../components/global/InputExplanationCard";

const AddTaskScreen = ({ route }) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`flex-1 bg-gray-50`}>
      <ScrollView>
        <Container variant="medium" style={tw`mt-4`}>
          <AddTask navigation={navigation} />
          <InputExplanationCard
            tags="Tasks: "
            description={
              "This is the main description of the activity you want to add to your to-do list."
            }
            color={"text-blue-500"}
          />
          <InputExplanationCard
            tags={"Tags"}
            description={
              "Add categories or labels (e.g., 'work', 'personal', 'urgent') to organize and filter tasks effectively."
            }
            color={"text-green-500"}
          />
          <InputExplanationCard
            tags={"Time"}
            description={
              "Add categories or labels (e.g., 'work', 'personal', 'urgent') to organize and filter tasks effectively."
            }
            color={"text-purple-500"}
          />
          <InputExplanationCard
            tags={"Energy"}
            description={
              "Indicate the level of effort required (e.g., 'low', 'medium', 'high') to prioritize tasks based on your energy levels."
            }
            color={"text-orange-500"}
          />
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddTaskScreen;

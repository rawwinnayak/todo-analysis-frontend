import React, { useState } from "react";
import {
  SafeAreaView,
  Alert,
  View,
  FlatList,
} from "react-native";
import { useSelector } from "react-redux";
import axios from "axios";
import tw from "twrnc";
import { Picker } from "@react-native-picker/picker"; // Import Picker

import Container from "../../components/global/Container";
import CustomText from "../../components/global/CustomText";
import CustomButton from "../../components/global/CustomButton";
import { mood_analyse } from "../../services/services";
import Loading from "../../components/global/Loading";

const AnalyzeMood = () => {
  const tasks = useSelector((state) => state.todo.tasks); // Fetch tasks from Redux store
  const API_BASE_URL = mood_analyse; // Backend endpoint

  const [mood, setMood] = useState("happy");
  const [energy, setEnergy] = useState("medium");
  const [time, setTime] = useState("60");
  const [analyzedTasks, setAnalyzedTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [suggestionText, setSuggestionText] = useState("");

  // Task priority calculator
  const calculateTaskPriority = (mood, energy, time) => {
    if (mood === "happy" && energy === "high" && time >= 60) {
      return "Suggest a creative, high-priority task.";
    } else if (mood === "stressed" || energy === "low") {
      return "Recommend simple or calming tasks.";
    } else if (time < 30) {
      return "Suggest quick tasks like emails or minor updates.";
    } else {
      return "Balance tasks based on remaining time and mood.";
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const requestData = {
        mood,
        energy,
        time: parseInt(time, 10), // Ensure time is a number
        tasks,
      };

      const res = await axios.post(API_BASE_URL, requestData);

      if (res.data.status === "success") {
        setAnalyzedTasks(res.data.tasks); // Update tasks in local state
        let suggestion = calculateTaskPriority(mood, energy, time);
        setSuggestionText(suggestion);
        Alert.alert(
          "Success",
          "Your personalized task list has been generated!"
        );
      } else {
        Alert.alert("Error", res.data.message || "No tasks found.");
      }
    } catch (error) {
      Alert.alert(
        "Error",
        "Failed to connect to the backend. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleTest = async () => {
    try {
      await axios.get(API_BASE_URL);
      Alert.alert("Success", "Connected to backend successfully!");
    } catch (error) {
      Alert.alert("Error", "Failed to connect to the backend.");
    }
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-gray-100 mt-7 mb-10`}>
      <FlatList
        ListHeaderComponent={
          <Container variant="large" style={tw`px-4 py-6`}>
            <CustomText
              text="AI Generated Todo List"
              Variant="h3"
              style={tw`text-center font-bold text-blue-700 mb-6 border-b border-gray-300 pb-2`}
            />

            {/* Explanation Section */}
            <View style={tw`bg-blue-50 p-3 rounded-lg shadow mb-4`}>
              <CustomText
                text="How AI Generates Your Task List"
                Variant="h6"
                style={tw`text-gray-800 font-bold mb-2`}
              />
              <CustomText
                text="Based on your inputs, AI analyzes your mood, energy, and time to recommend tasks that best fit your current state and preferences."
                Variant="h7"
                style={tw`text-gray-600`}
              />
              <CustomText
                text={suggestionText}
                Variant="h6"
                style={tw`text-green-600`}
              />
            </View>

            {/* Mood Picker */}
            <View style={tw`bg-white p-3 rounded-lg shadow mb-4`}>
              <CustomText
                text="Mood"
                Variant="h6"
                style={tw`text-gray-700 mb-2`}
              />
              <Picker
                selectedValue={mood}
                style={tw`border border-gray-300 rounded p-2`}
                onValueChange={(itemValue) => setMood(itemValue)}
              >
                <Picker.Item label="Happy" value="happy" />
                <Picker.Item label="Sad" value="sad" />
                <Picker.Item label="Stressed" value="stressed" />
                <Picker.Item label="Relaxed" value="relaxed" />
                {/* Add more moods as needed */}
              </Picker>
           

            {/* Energy Level Picker */}
           <CustomText
                text="Energy Level"
                Variant="h6"
                style={tw`text-gray-700 mb-2`}
              />
              <Picker
                selectedValue={energy}
                style={tw`border border-gray-300 rounded p-2`}
                onValueChange={(itemValue) => setEnergy(itemValue)}
              >
                <Picker.Item label="Low" value="low" />
                <Picker.Item label="Medium" value="medium" />
                <Picker.Item label="High" value="high" />
                {/* Add more energy levels if needed */}
              </Picker>
             <CustomText
                text="Time Available (in minutes)"
                Variant="h6"
                style={tw`text-gray-700 mb-2`}
              />
              <Picker
                selectedValue={time}
                style={tw`border border-gray-300 rounded p-2`}
                onValueChange={(itemValue) => setTime(itemValue)}
              >
                <Picker.Item label="30 minutes" value="30" />
                <Picker.Item label="60 minutes" value="60" />
                <Picker.Item label="120 minutes" value="120" />
                <Picker.Item label="150 minutes" value="150" />
                <Picker.Item label="180 minutes" value="180" />
                <Picker.Item label="210 minutes" value="210" />
                <Picker.Item label="250 minutes" value="250" />
                <Picker.Item label="280 minutes" value="280" />
                <Picker.Item label="310 minutes" value="310" />
                <Picker.Item label="340 minutes" value="340" />

                {/* Add more time slots as needed */}
              </Picker>
            </View>

            <Loading isloading={loading} />

            {/* Buttons */}
            <CustomButton
              label="Generate New Todo List"
              onPress={handleSubmit}
              style={tw`mb-4 bg-blue-600`}
              textStyle={tw`text-white`}
            />
            <CustomButton
              label="Test Backend Connection"
              onPress={handleTest}
              style={tw`bg-gray-600`}
              textStyle={tw`text-white`}
            />
          </Container>
        }
        data={analyzedTasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={tw`bg-blue-50 p-3 rounded mb-2 mx-4`}>
            <CustomText
              text={`- ${item}`}
              Variant="body1"
              style={tw`text-blue-700`}
            />
          </View>
        )}
        ListEmptyComponent={
          <CustomText
            text="No tasks to display. Generate a task list to get started!"
            Variant="body1"
            style={tw`text-center text-gray-500 mt-4`}
          />
        }
      />
    </SafeAreaView>
  );
};

export default AnalyzeMood;

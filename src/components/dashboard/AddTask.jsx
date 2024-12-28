import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, Alert } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faPlus,
  faClock,
  faTag,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
import tw from "twrnc";
import CustomText from "../global/CustomText";
import { addTask, addTaskRecord } from "../../app/features/todo/todoSlice";
import { useDispatch } from "react-redux";

const AddTask = ({ navigation }) => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const [tags, setTags] = useState("");
  const [time, setTime] = useState("");
  const [energy, setEnergy] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleAddTask = () => {
    const trimmedTask = task.trim();

    // Validation for empty fields
    if (!trimmedTask || !tags || !time || !energy) {
      Alert.alert("Error", "Please fill out all fields to add a task.");
      return;
    }

    // Create task object
    const newTask = {
      task: trimmedTask,
      tags: tags.split(",").map((tag) => tag.trim()), // Split and trim tags
      time: parseInt(time, 10), // Ensure time is a number
      energy: energy.toLowerCase(),
    };
    const newTaskRecord = {
      task: trimmedTask,
      tags: tags.split(",").map((tag) => tag.trim()), // Split and trim tags
      time: parseInt(time, 10), // Ensure time is a number
      energy: energy.toLowerCase(),
      completed: completed,
    };
    // Dispatch the task to Redux store
    dispatch(addTaskRecord(newTaskRecord));
    dispatch(addTask(newTask));
    // Navigate to Home Screen and reset fields
    navigation.navigate("Home");
    setTask("");
    setTags("");
    setTime("");
    setEnergy("");
  };

  return (
    <View style={tw`p-4 bg-white border border-gray-300 rounded-lg`}>
      <CustomText
        text="Add a Task"
        Variant="h3"
        style={tw` mb-3 text-center text-blue-700 border-b border-gray-300 pb-2`}
      />

      {/* Task Name Input */}
      <View style={tw`flex-row items-center mb-4`}>
        <TextInput
          style={tw`flex-1 border border-gray-300 rounded-lg px-3 py-2 text-base`}
          placeholder="Task Name"
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity
          onPress={handleAddTask}
          style={tw`bg-blue-500 p-3 ml-2 rounded-lg`}
        >
          <FontAwesomeIcon icon={faPlus} color="white" size={16} />
        </TouchableOpacity>
      </View>

      {/* Tags Input */}
      <View style={tw`flex-row items-center mb-4`}>
        <TextInput
          style={tw`flex-1 border border-gray-300 rounded-lg px-3 py-2 text-base`}
          placeholder="Tags (e.g., fun, productive)"
          value={tags}
          onChangeText={setTags}
        />
        <FontAwesomeIcon
          icon={faTag}
          color="#4A5568"
          size={16}
          style={tw`mr-2 p-3 ml-4 rounded-lg `}
        />
      </View>

      {/* Time and Energy Selection */}
      <View style={tw`flex-row justify-between mb-3`}>
        {/* Time Picker */}
        <View style={tw`flex-1 mr-2`}>
          <FontAwesomeIcon
            icon={faClock}
            color="#4A5568"
            size={16}
            style={tw`mb-2`}
          />
          <RNPickerSelect
            style={{
              inputIOS: tw`border border-gray-300 rounded-lg px-3 py-2 text-base`,
              inputAndroid: tw`border border-gray-300 rounded-lg px-3 py-2 text-base`,
            }}
            placeholder={{ label: "Select time", value: null }}
            onValueChange={(value) => setTime(value)}
            items={[
              { label: "5 minutes", value: "5" },
              { label: "10 minutes", value: "10" },
              { label: "15 minutes", value: "15" },
              { label: "30 minutes", value: "30" },
              { label: "45 minutes", value: "45" },
              { label: "60 minutes", value: "60" },
              { label: "75 minutes", value: "75" },
              { label: "90 minutes", value: "90" },
              { label: "120 minutes", value: "120" },
              { label: "180 minutes", value: "180" },
            ]}
          />
        </View>

        {/* Energy Picker */}
        <View style={tw`flex-1`}>
          <FontAwesomeIcon
            icon={faBolt}
            color="#4A5568"
            size={16}
            style={tw`mb-2`}
          />
          <RNPickerSelect
            style={{
              inputIOS: tw`border border-gray-300 rounded-lg px-3 py-2 text-base`,
              inputAndroid: tw`border border-gray-300 rounded-lg px-3 py-2 text-base`,
            }}
            placeholder={{ label: "Energy Level", value: null }}
            onValueChange={(value) => setEnergy(value)}
            items={[
              { label: "Low", value: "low" },
              { label: "Medium", value: "medium" },
              { label: "High", value: "high" },
            ]}
          />
        </View>
      </View>
    </View>
  );
};

export default AddTask;

import React from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import Container from "../global/Container";
import CustomText from "../global/CustomText";
import { removeTask, toggleTask } from "../../app/features/todo/todoSlice";
import tw from "twrnc";
import { FontAwesome } from "@expo/vector-icons";

const TaskLists = ({ tasks }) => {
  const dispatch = useDispatch();
  console.log("tasks list", tasks);
  console.log("=====================================");
  // Calculate progress percentage
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const progressPercentage =
    totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  // Toggle task completion
  const toggleCompletion = (task) => {
    console.log("Task completed:", task.completed);
    console.log("=====================================");
    dispatch(toggleTask(task.task)); // Dispatch the toggleTask action
    // task.completed = !task.completed; // Toggle the completed status
  };

  return (
    <Container variant="medium" style={tw`bg-gray-50 rounded-lg shadow-lg p-4`}>
      {/* Display Progress */}
      <View style={tw`mb-4`}>
        <CustomText
          text={`Progress: ${progressPercentage}%`}
          Variant="h4"
          style={tw`text-blue-600 font-bold text-center mb-2`}
        />
        <View style={tw`bg-gray-200 h-4 rounded-full`}>
          <View
            style={[
              tw`bg-blue-500 h-4 rounded-full`,
              { width: `${progressPercentage}%` },
            ]}
          />
        </View>
      </View>

      <ScrollView>
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <View
              key={index}
              style={tw`border-b border-gray-200 p-3 mb-2 last:border-b-0 bg-white rounded-md`}
            >
              {/* Task Information */}
              <View style={tw`flex-row justify-between items-center`}>
                <CustomText
                  text={task.task}
                  Variant="h3"
                  style={tw`text-gray-800 font-semibold ${
                    task.completed ? "line-through text-gray-500" : ""
                  }`}
                />
                <View style={tw`flex-row gap-4`}>
                  {/* Toggle Completion */}
                  <TouchableOpacity onPress={() => toggleCompletion(task)}>
                    {task.completed ? (
                      <FontAwesome name="check-circle" size={20} color="green" />
                    ) : (
                      <FontAwesome name="circle-o" size={20} color="gray" />
                    )}
                  </TouchableOpacity>

                  {/* Delete Task */}
                  <TouchableOpacity
                    onPress={() => dispatch(removeTask(task.task))}
                  >
                    <FontAwesome name="trash" size={20} color="red" />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Task Details */}
              <View style={tw`flex-row justify-between items-center mt-2`}>
                <CustomText
                  text={`Energy: ${task.energy}`}
                  style={tw`text-gray-600 text-sm`}
                />
                <CustomText
                  text={`Time: ${task.time} mins`}
                  style={tw`text-gray-600 text-sm`}
                />
              </View>
                  <CustomText text={`${task.completed?"completed":"pending"}`} style={tw`${task.completed?"text-green-600":"text-yellow-600"} text-sm`} />
              {/* Task Tags */}
              <View style={tw`flex-row flex-wrap mt-2`}>
                {task.tags.map((tag, index) => (
                  <CustomText
                    key={index}
                    text={`#${tag}`}
                    style={tw`text-xs text-blue-500 mr-2`}
                  />
                ))}
              </View>
            </View>
          ))
        ) : (
          <CustomText variant="h6" style={tw`text-center text-gray-500`}>
            No tasks available.
          </CustomText>
        )}
      </ScrollView>
    </Container>
  );
};

export default TaskLists;

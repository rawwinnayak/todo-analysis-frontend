import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
    status: "idle",
    error: null,
    tasks_record: [],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTask(state, action) {
            state.tasks.push(action.payload);
        },
        addTaskRecord(state, action) {
            state.tasks_record.push(action.payload);
        },
        removeTask(state, action) {
            console.log(action.payload);
            state.tasks = state.tasks.filter((task) => task.task !== action.payload);
        },
        updateTask(state, action) {
            const { id, description } = action.payload;
            const task = state.tasks.find((task) => task.id === id);
            if (task) {
                task.description = description;
            }
        },
        toggleTask(state, action) {
            const tasks_record = state.tasks_record.find((tasks_record) => tasks_record.task === action.payload);
            console.log("task record :",tasks_record);
            console.log("=====================================");
            if (tasks_record.completed) {
                tasks_record.completed = false
            }
            else{
                tasks_record.completed = true
            }
        },
        fetchTasksRequest(state) {
            state.status = "loading";
        },
        fetchTasksSuccess(state, action) {
            state.status = "succeeded";
            state.tasks = action.payload;
        }
    }   
});

export const { addTask, addTaskRecord ,removeTask, updateTask, toggleTask, fetchTasksRequest, fetchTasksSuccess } = todoSlice.actions;
export default todoSlice.reducer;
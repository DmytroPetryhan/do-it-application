import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TaskPageScreen from "../screens/TasksPageScreen";
import AboutItemScreen from "../screens/AboutItemScreen";

const TasksStackNavigation = createNativeStackNavigator();

const TasksStack = () => {
  return (
    <TasksStackNavigation.Navigator initialRouteName="taskScreen">
      <TasksStackNavigation.Screen
        options={{
          title: "Tasks",
          headerShown: false,
        }}
        name="taskScreen"
        component={TaskPageScreen}
      />
      <TasksStackNavigation.Screen
        name="tasksItemDetail"
        component={AboutItemScreen}
        options={{
          headerShown: false,
        }}
      />
    </TasksStackNavigation.Navigator>
  );
};

export default TasksStack;

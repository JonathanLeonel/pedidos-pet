import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import MapScreen from "./MapScreen";
import UploadFormScreen from "./UploadFormScreen";
import ChatScreen from "./ChatScreen";

import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: () => ({
        headerTitle: "Bienvenido a Rescatando!"
      })
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        headerTitle: "Rescatando!"
      })
    },
    Map: {
      screen: MapScreen,
      navigationOptions: () => ({
        headerTitle: "Rescatando!"
      })
    },
    UploadForm: {
      screen: UploadFormScreen,
      navigationOptions: () => ({
        headerTitle: "Rescatando!"
      })
    },
    Chat: {
      screen: ChatScreen,
      navigationOptions: () => ({
        headerTitle: "Rescatando!"
      })
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
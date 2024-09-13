import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/HomeScreen";
import ProfileScreen from "./src/ProfileScreen";
import LikesScreen from "./src/LikesScreen";

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Likes: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome to Home" }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: "Welcome to Profile" }}
        />
        <Stack.Screen
          name="Likes"
          component={LikesScreen}
          options={{ title: "Welcome to Likes" }}
        />
      </Stack.Navigator>
      <StatusBar backgroundColor="pink" />
    </NavigationContainer>
  );
}

/**
 * Açıklamalar:
1-RootStackParamList: Bu, createNativeStackNavigator için kullanılan ekranların ve parametrelerinin tiplerini tanımlar. undefined değerleri, ekranlara herhangi bir parametre geçilmediğini belirtir.

2-App bileşeni:  türü JSX.Element.

 */
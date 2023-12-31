import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/Screens/Login/Login';
import About from './src/Screens/About/About';
import CreateAccount from './src/Screens/CreateAccount/CreateAccount'
import ChatScreen from './src/Screens/Chat/ChatScreen';
import ResponseScreen from './src/Screens/Response/ResponseScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sobre" component={About} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="ResponseScreen" component={ResponseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

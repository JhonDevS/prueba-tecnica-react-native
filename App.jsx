import Main from './src/components/Main.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Approved from './src/components/Approved.jsx';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Approved"
          component={Approved}
          options={{ headerShown: true, title: "" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

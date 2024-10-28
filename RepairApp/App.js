import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import OrderScreen from './screens/OrderScreen';
import MastersScreen from './screens/MastersScreen';
import ReviewsScreen from './screens/ReviewsScreen';
import ContactsScreen from './screens/ContactsScreen';
import AdminScreen from './screens/AdminScreen';
import ManagerScreen from './screens/ManagerScreen';
import LoginScreen from './screens/LoginScreen';
import { AuthProvider, AuthContext } from './context/AuthContext';

const Stack = createStackNavigator();

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Order" component={OrderScreen} />
          <Stack.Screen name="Masters" component={MastersScreen} />
          <Stack.Screen name="Reviews" component={ReviewsScreen} />
          <Stack.Screen name="Contacts" component={ContactsScreen} />
          {user && user.role === 'admin' && (
            <Stack.Screen name="Admin" component={AdminScreen} />
          )}
          {user && user.role === 'manager' && (
            <Stack.Screen name="Manager" component={ManagerScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;

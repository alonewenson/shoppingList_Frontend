import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ShoppingListScreen from './components/ShoppingListScreen'
import HomeScreen from './components/HomeScreen'
import ChildModeBtn from "./components/ChildModeBtn";

import { Provider } from "react-redux";
import store from "./redux/store";

const Stack = createNativeStackNavigator();

const App = () => { 
   return (   
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="HomeScreen"    
            component={HomeScreen}     
            options={{ title: 'HomeScreen' }}    
          />      
          <Stack.Screen 
            name="ShoppingListScreen"
            component={ShoppingListScreen}
            options={{ 
              title: 'Shopping List',
              headerRight: () => (
                <ChildModeBtn
                  onPress={() => alert('This is a button!')}
                  title="Info"
                  color="#fff"
                />  
              )
            }} 
          />    
        </Stack.Navigator>    
      </NavigationContainer>
    </Provider>
    );
};

export default App;
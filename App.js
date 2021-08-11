import React from "react";
import { Text , View } from 'react-native'

import { Provider } from "react-redux";
import store from "./redux/store";

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View className='todo-app'>
          <View className='app-header'><Text>Shopi-List</Text></View>
          <AddTodo />
          <TodoList />
        </View>
      </Provider>
    );
  }
}
 
 
 
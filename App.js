import React from "react";
import { Text , View } from 'react-native'

import { Provider } from "react-redux";
import store from "./redux/store";

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoImgModal from "./components/TodoImgModal";
import { styles } from "./styles";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.todo_app}>
          <View style={styles.app_header}>
            <Text style={styles.app_header_text}>Shopi-List</Text>
          </View>
          <TodoList />
          <AddTodo />
          <TodoImgModal />
        </View>
      </Provider>
    );
  }
}
 
 
 
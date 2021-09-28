import React from "react";
import { View } from 'react-native'

import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import TodoImgModal from "./TodoImgModal";

import { connect } from "react-redux";
import { isChildMode } from "../redux/selectors";

import { styles } from "../styles";

const ShoppingListScreen = ({ isInParentMode }) => {
  return (
      <View style={styles.todo_app}>
        <TodoList />
        {isInParentMode  && <>
            <AddTodo />
            <TodoImgModal />
          </>
        }
      </View>
  );
}

const mapStateToProps = (state) => {
  const isInParentMode = !isChildMode(state);
  return { isInParentMode };
};

export default connect(
  mapStateToProps,
  null
)(ShoppingListScreen);

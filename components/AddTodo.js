import React from "react";
import { TextInput , Button, View } from 'react-native';
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";
import { styles } from "../styles";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <View style={styles.add_todo}>
        <TextInput 
          style={styles.add_todo_input}
          onChangeText={this.updateInput}
          value={this.state.input}
          placeholder='please add item'
        />
        <Button style={styles.add_todo_btn} onPress={this.handleAddTodo} title='+' />
      </View>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);

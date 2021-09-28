import React, {useState} from "react";
import { Text, TouchableOpacity } from 'react-native'
import { connect } from "react-redux";
import { toggleChildMode } from "../redux/actions";
import { styles } from "../styles";

const ChildModeBtn = ({ toggleChildMode }) => {
  const [isChildMode, setChildMode] = useState(false);

  const handleClick = () => {
    setChildMode(!isChildMode);
    toggleChildMode();
  }

  return (
      <TouchableOpacity style={styles.child_mode_btn} onPress={handleClick}>
        {isChildMode ? 
        <Text>Child Mode</Text>
        :
        <Text>Parent Mode</Text>
        }
      </TouchableOpacity>
  );
};

export default connect(
  null,
  { toggleChildMode }
)(ChildModeBtn);

import React, {useState} from "react";
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from "react-redux";
import { toggleChildMode } from "../redux/actions";
import { styles } from "../styles";

const AppHeader = ({ toggleChildMode }) => {
  const [isChildMode, setChildMode] = useState(false);

  const handleClick = () => {
    setChildMode(!isChildMode);
    toggleChildMode();
  }

  return (
    <View style={styles.app_header}>
      <Text style={styles.app_header_text}>Shopi-List</Text>
      <TouchableOpacity style={styles.child_mode_btn} onPress={handleClick}>
        {isChildMode ? 
          <Text>To Parent Mode</Text>
          :
          <Text>To Child Mode</Text>
        }
      </TouchableOpacity>
    </View>
  );
};

export default connect(
  null,
  { toggleChildMode }
)(AppHeader);

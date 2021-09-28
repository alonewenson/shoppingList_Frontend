import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default HomeScreen = (props) => {
  return (
    <View style={styles.root}>
      <Text>Home Screen</Text>
      <Button
      title=  'Go To Main Screen'
        onPress={() => props.navigation.navigate('ShoppingListScreen')}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke'
  }
});
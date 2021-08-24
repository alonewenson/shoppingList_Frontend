import { StyleSheet, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
  todo_app: {
    marginTop: StatusBar.currentHeight ,
    fontFamily: 'sans-serif',
    flex: 1,
  },

  app_header: {
    textAlign: 'center',
    backgroundColor: '#87CEEB',
    height: 50
  },

  app_header_text:{
    fontSize: 30
  },

  add_todo: {
    justifyContent: 'center',
    backgroundColor : '#B9EBFF',
    flexDirection: 'row',
    height: 50,
    borderWidth: 1,
    borderColor: 'black'
  },
  
  add_todo_input: {
    flex: 1,
    fontSize: 20,
    marginLeft: 3
  },

  add_todo_btn: {
    flex: 1
  },
  
  todo_list: {

  },

  todo_item: {
    fontFamily: 'monospace',
    flexDirection: 'row',
    height: 100,
    margin: 2,
    borderWidth: 1,
    borderColor: 'black'
  },

  todo_content: (isCompleted = true) => ({
    opacity: 1,
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: 'black',
    flex: 3,
    opacity: isCompleted ? 0.2 : 1,
  }),

  // todo_content_completed: {
  //   transition: 'opacity 1s ease-in-out',
  //   opacity: '0.2'
  // },
  
  todo_text: {
    fontSize: 30,
    flex: 1,
    textAlign: 'left',
    marginLeft: 3,  
    borderWidth: 1,
    borderColor: 'black'
  },

  todo_img_wraper:{
    flex:1,
    borderWidth: 1,
    borderColor: 'black'
  },

  todo_img_div: {
    width: 100,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  todo_img: {
    width: '95%',
    height: '95%'
  },

  control_todo: {
    width: 30,
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  remove_todo_div: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'black',
    margin: 5
  },

  remove_todo_img: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  }
})
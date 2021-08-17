import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  todo_app: {
    fontFamily: 'sans-serif',
    flex: 1,
  },

  app_header: {
    textAlign: 'center',
    backgroundColor: '#87CEEB',
    height: '50px'
  },

  app_header_text:{
    fontSize: '30px'
  },

  add_todo: {
    justifyContent: 'center',
    backgroundColor : '#B9EBFF',
    flexDirection: 'row',
    height: '50px'
  },
  
  add_todo_input: {
    flex: 1,
    fontSize: '20px',
    marginLeft: '3px'
  },

  add_todo_btn: {
    flex: 1
  },
  
  todo_list: {

  },

  todo_item: {
    fontFamily: 'monospace',
    flexDirection: 'row',
    height: '100px',
    margin: '2px'
  },

  todo_content: {
    opacity: 1,
    justifyContent: 'left center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 3
  },
  
  todo_content_completed: {
    transition: 'opacity 1s ease-in-out',
    opacity: '0.2'
  },
  
  todo_text: {
    fontSize: '30px',
    flex: 2,
    textAlign: 'left',
    margin: '3px',  
  },

  todo_img_wraper:{
    flex:1
  },

  todo_img_div: {
    width: '100px',
    height: '100%',
    alignItems: 'center'
  },
  
  todo_img: {
    width: '95%',
    height: '95%',
    marginLeft: '2px'
  },

  remove_todo: {
    width: '10px',
    height: '100%',
    alignItems: 'center'
  }
})
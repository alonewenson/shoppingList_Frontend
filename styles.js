import { StyleSheet, StatusBar, Modal } from 'react-native';

export const styles = StyleSheet.create({
  todo_app: {
    fontFamily: 'sans-serif',
    flex: 1,
  },

  app_header: {
    flexDirection: 'row',
    textAlign: 'center',
    height: 50
  },

  app_header_text:{
    fontSize: 30,
    flex: 5
  },


  child_mode_btn: {
    height: 40,
    width: 100,
    backgroundColor: '#f194ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,

  },

  add_todo: {
    justifyContent: 'center',
    backgroundColor : '#B9EBFF',
    flexDirection: 'row',
    height: 50
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
    marginLeft: 20,
    marginRight: 20
  },

  todo_content: (isCompleted = true) => ({
    alignItems: 'center',
    flexDirection: 'row',
    flex: 3,
    opacity: isCompleted ? 0.2 : 1,
  }),

  todo_text: {
    fontSize: 30,
    flex: 1,
    textAlign: 'center',
    marginRight: 15
  },

  todo_img_wraper:{
    flex:1
  },

  todo_img_div: {
    width: 100,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  },
  
  todo_img: {
    flex: 1,
    width: '100%'
  },

  control_todo: {
    width: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },

  remove_todo_div: {
    width: 20,
    height: 20,
    margin: 5
  },

  remove_todo_img: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  },

  modal: {
    margin: 0,
    backgroundColor: 'rgba(0,0,0,.6)',
    alignItems: "center",
  },

  modal_header: {
    flex: 1, 
    marginLeft: 15, 
    marginRight: 5, 
    justifyContent: "center", 
    flexDirection:'row', 
    justifyContent: 'space-between' ,
    alignItems: 'center'
  },
  modal_view:{
    height: '85%',
    width: '85%',
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20
  },
  modal_img_selection: {
    flex: 15, 
    flexWrap: "wrap", 
    flexDirection: 'row',
    paddingHorizontal: 5
  },
  modal_img: {
    height: 90, 
    width: 90,
    marginBottom: 8,
    marginHorizontal: 8
  }
})
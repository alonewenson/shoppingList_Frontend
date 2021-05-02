import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, SET_TODO_IMG } from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false
          }
        }
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      };
    }
    case REMOVE_TODO: {
      const { id } = action.payload;

      var newAllIds = state.allIds;
      var index = newAllIds.indexOf(id)
      if (index !== -1) {
        newAllIds.splice(index, 1);
      }
      
      var newByIds = state.byIds;
      delete newByIds[id];

      return {
        ...state,
        allIds: newAllIds,
        byIds: newByIds
      };
    }
    case SET_TODO_IMG: {
      const { id , imgSrc } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            imgSrc: imgSrc
          }
        }
      };
    }
  

    
    default:
      return state;
  }
}

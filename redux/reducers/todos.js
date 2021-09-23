import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, SET_TODO_IMG, OPEN_MODAL, CLOSE_MODAL, TOGGLE_CHILD_MODE } from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {},
  modalsTodo: null,
  isChildMode: false
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
      const index = newAllIds.indexOf(id)
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
    case OPEN_MODAL: {
      const { id } = action.payload;
      return {
        ...state,
        modalsTodo: id
      };
    }
    case CLOSE_MODAL: {
      return {
        ...state,
        modalsTodo: null
      };
    }
    case TOGGLE_CHILD_MODE: {
      return {
        ...state,
        isChildMode: !state.isChildMode
      };
    }

    default:
      return state;
  }
}

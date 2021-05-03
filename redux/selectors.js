
export const getTodosState = store => store.todos;

export const getTodoList = store =>
  getTodosState(store) ? getTodosState(store).allIds : [];

export const getTodoById = (store, id) =>
  getTodosState(store) ? { ...getTodosState(store).byIds[id], id } : {};

export const getTodoImg = (store, id) => 
  getTodosState(store) ? getTodoById(store, id).imgSrc : '';

// TODO this function seems redundant, why map the ids and not call getTodoById directly?
export const getTodos = store =>
  getTodoList(store).map(id => getTodoById(store, id));


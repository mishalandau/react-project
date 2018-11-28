import { IProduct } from '../ProductModel';
import { Action, ActionTypes } from './actions';

// Define our State interface for the current reducer
export interface IState {
  todos: IProduct[]
}

// Define our initialState
export const initialState: IState = {
  todos: [] // We don't have any todos at the start of the app
}

/* 
 * Reducer takes 2 arguments
 * state: The state of the reducer. By default initialState ( if there was no state provided)
 * action: Action to be handled. Since we are in todos reducer, action type is Action defined in our actions/todos file.
 */
export default function products(state = [], action: Action) {
  switch (action.type) {

    case ActionTypes.ADD_TODO: {
      /*
       * We have autocompletion here
       * Typescript knows the action is type of AddTodoAction thanks to the ActionTypes enum
       * todo is type of Todo
       */
      const todo = action.payload.todo

      return {
        ...state,
        todos: [...state, todo] // Add todo to todos array
      }
    }

    default:
      return state
  }
}
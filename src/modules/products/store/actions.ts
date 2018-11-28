import { IProduct } from '../ProductModel';

/*
 * In order to automatically generate id for our todos
 */  
let nextId = 0

/*
 * We're defining every action name constant here
 * We're using Typescript's enum
 * Typescript understands enum better 
 */
export enum ActionTypes {
  ADD_TODO = '[todos] ADD_TODO',
  TOGGLE_TODO = '[todos] TOGGLE_TODO'
}

/*
 * Define return types of our actions 
 * Every action returns a type and a payload
 */
export interface IAddTodoAction { type: ActionTypes.ADD_TODO, payload: { todo: IProduct } }
export interface IToggleTodoAction { type: ActionTypes.TOGGLE_TODO, payload: { todoId: number } }

/*
 * Define our actions creators
 * We are returning the right Action for each function
 */
export function addTodo(name: string): IAddTodoAction {

  return {
    type: ActionTypes.ADD_TODO,
    payload: {
      todo: {
        id: nextId++,
        name,
        color: '#ffffff',
        textColor: '#ffffff',
      }
    }
  }
}

export function toggleTodo(todoId: number): IToggleTodoAction {
  return { type: ActionTypes.TOGGLE_TODO, payload: { todoId } } // {todoId} is a shortcut for {todoId: todoId}
}

/*
 * Define the Action type
 * It can be one of the types defining in our action/todos file
 * It will be useful to tell typescript about our types in our reducer
 */
export type Action = IAddTodoAction | IToggleTodoAction
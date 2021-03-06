import { Todo } from "./Todo";

export const FETCH_TODOS_REQUEST = "FETCH_TODOS_REQUEST";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const FETCH_TODOS_FAILURE = "FETCH_TODOS_FAILURE";

interface TodoAsync {
  loading: boolean;
  todos: Todo[];
  error: string;
}

interface FetchTodoRequest extends TodoAsync {
  type: typeof FETCH_TODOS_REQUEST;
}
interface FetchTodoSuccess extends TodoAsync {
  type: typeof FETCH_TODOS_SUCCESS;
}
interface FetchTodoFailure extends TodoAsync {
  type: typeof FETCH_TODOS_FAILURE;
}

export type TodoActionTypes =
  | FetchTodoRequest
  | FetchTodoSuccess
  | FetchTodoFailure;

import { AcType, Action, State } from "./Types";

/**
 * Reducer fonksiyonu.
 * Reducer function.
 *
 * @param state
 * @param action
 * @returns State
 *
 *  - action.type'e göre state'i güncelliyoruz.
 * - We update the state according to action.type.
 *
 * ##### ADD_TODO:
 *      - todos dizisine todo'yu ekliyoruz ve todo'yu sıfırlıyoruz.
 *      - We add the todo to the todos array and reset the todo.
 *
 * ##### SET_TODO:
 *      - todo'yu state'e ekliyoruz.
 *      - We add the todo to the state.
 *
 * ##### REMOVE_TODO:
 *      - todos dizisinden todo'yu siliyoruz.
 *      - We delete the todo from the todos array.
 *
 * ##### RESET_TODO: 
 *      - todos dizisini sıfırlıyoruz.
 *      - We reset the todos array.
 *
 * ##### ADD_ERROR: 
 *      - error'ü state'e ekliyoruz.
 *      - We add the error to the state.
 *
 * ##### REMOVE_ERROR: 
 *      - error'ü state'den siliyoruz.
 *      - We delete the error from the state.
 *
 * ##### DEFAULT: 
 *      - state'i döndürüyoruz.
 *      - We return the state.
 *
 */
function reducer(state: State, action: Action): State {
  // action.type'e göre state'i güncelliyoruz.
  switch (action.type) {
    //
    // ADD_TODO: todos dizisine todo'yu ekliyoruz ve todo'yu sıfırlıyoruz.
    // ADD_TODO: We add the todo to the todos array and reset the todo.
    //
    case AcType.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload!],
        todo: "",
      };

    //
    // SET_TODO: todo'yu state'e ekliyoruz.
    // SET_TODO: We add the todo to the state.
    //
    case AcType.SET_TODO:
      return {
        ...state,
        todo: action.payload!,
      };

    //
    // REMOVE_TODO: todos dizisinden todo'yu siliyoruz.
    // REMOVE_TODO: We delete the todo from the todos array.
    //
    case AcType.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(
          (_, index) => index !== Number(action.payload)
        ),
      };
    //
    // RESET_TODO: todos dizisini sıfırlıyoruz.
    // RESET_TODO: We reset the todos array.
    //
    case AcType.RESET_TODO:
      return {
        ...state,
        todos: [],
      };
    //
    // ADD_ERROR: error'ü state'e ekliyoruz.
    // ADD_ERROR: We add the error to the state.
    //
    case AcType.ADD_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    //
    // REMOVE_ERROR: error'ü state'den siliyoruz.
    // REMOVE_ERROR: We delete the error from the state.
    //
    case AcType.REMOVE_ERROR:
      return {
        ...state,
        error: undefined,
      };

    //
    // default: state'i döndürüyoruz.
    // default: We return the state.
    //
    default:
      return state;
  }
}

export default reducer;

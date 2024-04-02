// State tipini tanımladık.
// define the State type.
type State = {
  todos: string[]; // Array of strings
  todo: string; // Number
  error?: string | undefined; // String or undefined
};

// Action tiplerini tanımladık.
// define the Action types.

enum AcType { // Action Type
  ADD_TODO = "ADD_TODO", // "ADD_TODO"
  SET_TODO = "SET_TODO", // "SET_TODO"
  REMOVE_TODO = "REMOVE_TODO", // "REMOVE_TODO"
  RESET_TODO = "RESET_TODO", // "RESET_TODO"
  ADD_ERROR = "ADD_ERROR", // "ADD_ERROR"
  REMOVE_ERROR = "REMOVE_ERROR", // "REMOVE_ERROR"
}

// Action tipini tanımladık.
// define the Action type.
type Action = {
  type: AcType; // AcType
  payload?: string | undefined; // String or undefined
};

// Export işlemleri
// Export operations
export { AcType };
export type { State, Action };

import { useReducer } from "react";
import reducer from "./Reducer";
import { AcType, State } from "./Types";

/**
 * - useReducer hook'unu kullanarak bir todo uygulaması yaptık.
 * - We made a todo application using the useReducer hook.
 * -
 * - 1. State tanımladık.
 * - 2. Reducer fonksiyonunu tanımladık.
 * - 3. useReducer hook'unu kullandık.
 * - 4. Form submit event'i
 * - 5. Input alanındaki değeri değiştiğinde
 * - 6. Reset butonuna tıklandığında
 * - 7. Component'i return ettik.
 * -
 * - 1. Defined the state.
 * - 2. Defined the reducer function.
 * - 3. Used the useReducer hook.
 * - 4. Form submit event
 * - 5. When the value in the input field changes
 * - 6. When the Reset button is clicked
 * - 7. Returned the component.
 *
 */

const UseReducerComponent = () => {
  //
  // İlk state değerini tanımladık.
  // Defined the initial state value.
  //
  const initialState: State = {
    todos: [],
    todo: "",
  };

  //
  // useReducer hook'unu kullandık.
  // Used the useReducer hook.
  //
  const [state, dispatch] = useReducer(reducer, initialState);
  //
  // Formun submit event'i
  // Form submit event
  //
  const onSubmitHandle = (event: React.FormEvent) => {
    // Formun default event'ini engelledik.
    // Prevented the default event of the form.
    event.preventDefault();

    // Eğer todo boş ise hata mesajı göster.
    // Show an error message if the todo is empty.
    if (state.todo === "") {
      // Hata mesajını state'e ekledik.
      // Added the error message to the state.
      dispatch({
        type: AcType.ADD_ERROR,
        payload: "Todo cannot be empty.",
      });
      return;
    }

    // Eğer todo zaten var ise hata mesajı göster.
    // Show an error message if the todo already exists.
    else if (state.todos.includes(state.todo)) {
      // Hata mesajını state'e ekledik.
      // Added the error message to the state.
      dispatch({
        type: AcType.ADD_ERROR,
        payload: "Todo already exists.",
      });
      return;
    }

    //
    // Eğer hata yok ise hata mesajını kaldır.
    // If there is no error, remove the error message.
    //
    dispatch({
      type: AcType.REMOVE_ERROR,
    });

    //
    //   state'e Todoyu ekledik.
    //  Added the todo to the state.
    //
    dispatch({
      type: AcType.ADD_TODO,
      payload: state.todo,
    });

    return;
  };

  //
  //  Input alanındaki değeri değiştiğinde
  //  When the value in the input field changes
  //
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //
    // Default event'i engelledik.
    // Prevented the default event.
    //
    event.preventDefault();

    //
    //  Input alanındaki değeri state'e ekledik.
    //  Added the value in the input field to the state.
    //
    dispatch({
      type: AcType.SET_TODO,
      payload: event.target.value,
    });
    return;
  };

  //
  //   Reset butonuna tıklandığında
  //   When the Reset button is clicked
  //
  const resetClick = () => {
    //
    //  state'i sıfırladık.
    //  Reset the state.
    //
    dispatch({
      type: AcType.RESET_TODO,
    });
    return;
  };

  //
  //   Component'i return ettik.
  //   Returned the component.
  //
  return (
    <>
      <div>
        <form onSubmit={onSubmitHandle}>
          <input
            type="text"
            style={basicStyle.input}
            onChange={onChange}
            value={state.todo}
          />
          <button
            type="submit"
            style={basicStyle.button}
            disabled={state.todo === ""}
          >
            Add / Ekle
          </button>
          <button
            style={basicStyle.button}
            onClick={resetClick}
            disabled={state.todos.length === 0}
          >
            Reset
          </button>
          <p
            hidden={typeof state.error === "undefined"}
            style={basicStyle.error}
          >
            {state.error}
          </p>
        </form>
      </div>
      <div>
        {state.todos.length === 0 ? (
          <p>
            No todos available. Add a todo to get started. <br />
            Yapılacak iş yok. Başlamak için bir iş ekleyin.
          </p>
        ) : (
          state.todos.map((todo, index) => {
            return (
              <div key={index}>
                <span>{todo}</span>
                <input
                  type="button"
                  style={basicStyle.remove}
                  value={"X"}
                  onClick={() =>
                    dispatch({
                      type: AcType.REMOVE_TODO,
                      payload: index.toString(),
                    })
                  }
                />
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

// Temel CSS stilleri
// Basic CSS styles
const basicStyle = {
  input: {
    padding: "5px",
    margin: "5px",
    width: "200px",
  },
  button: {
    padding: "5px",
    margin: "5px",
  },
  error: {
    color: "red",
  },
  remove: {
    padding: "5px",
    margin: "5px",
    backgroundColor: "red",
    color: "white",
  },
};

export default UseReducerComponent;

import { useState } from "react";

// `Todo` tipi oluşturuldu.
type Todo = {
  id: number;
  text: string;
};

// `Content` fonksiyonu oluşturuldu.
const Content = () => {

    // `useState` hook'u ile state yönetimi sağlandı.
  const [todo, setTodo] = useState<Array<Todo>>([]);

    // `value` adında bir state oluşturuldu.
  const [value, setValue] = useState<string>("");


    // `addTodo` fonksiyonu oluşturuldu.
  const addTodo = (value: string) => {

    // eğer input alanı boş ise fonksiyonu sonlandır.
    if (value.length === 0) {
      return;
    }

    // `newTodo` adında bir obje oluşturuldu.
    const newTodo:Todo = {
      id: todo.length + 1,
      text: value,
    };

    // `newTodo` objesi `todo` state'ine eklendi.
    setTodo([...todo, newTodo]);

    // input alanı temizlendi.
    setValue("");
  };


    // `deleteTodo` fonksiyonu oluşturuldu.
  const deleteTodo = (id: number) => {
    // `id` değeri eşleşen todo silindi.
    const newTodo = todo.filter((item) => item.id !== id);
    
    // `newTodo` state'e eklendi.
    setTodo(newTodo);
  };

    // `Content` fonksiyonu içerisindeki dönen değerler.
  return (
    <div className="todo-content">
      <h3>Todo - Yapılacaklar</h3>
      <div className="todo-area">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="todo-input"
          placeholder="Yapılacak ekle..."
        />
        <button className="todo-add" onClick={() => addTodo(value)}>
          EKLE
        </button>
      </div>
      {Array(todo.length)
        .fill(0)
        .map((_, i) => {
          if (todo.length === 0) {
            return (
              <div key={i} className="todo-item">
                Hemen Yeni bir todo ekle
              </div>
            );
          }
          return (
            <div className="todo-list">
              <ul className="todo-items">
                <li className="todo-item">
                  <span className="todo-text"> {todo[i].text} </span>
                  <input
                    type="button"
                    className="todo-delete"
                    value={"X"}
                    onClick={() => deleteTodo(todo[i].id)}
                  />
                </li>
              </ul>
            </div>
          );
        })}
    </div>
  );
};

export default Content;

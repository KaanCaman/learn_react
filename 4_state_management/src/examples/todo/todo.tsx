import Footer from "../../components/footer";
import Header from "../../components/header";
import Content from "../../components/todo/content";

import "../../styles/todo.css";

const Todo = () => {
  return (
    <>
      <div className="screen">
        <Header />
        <Content/>
        <Footer />
      </div>
    </>
  );
};

export default Todo;

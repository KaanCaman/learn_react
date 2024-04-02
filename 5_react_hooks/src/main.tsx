import ReactDOM from "react-dom/client";
import "./index.css";
import UseContext from "./hooks/use_context/UseContext";
import UseEffect from "./hooks/use_effect/UseEffect";
import UseRef from "./hooks/use_ref/UseRef";
import UseReducer from "./hooks/use_reducer/UseReducer";
import UseCallback from "./hooks/use_callback/UseCallback";
import UseMemo from "./hooks/use_memo/UseMemo";
import { Separate } from "./Separate";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <UseEffect />
    <Separate />
    <UseRef />
    <Separate />
    <UseReducer />
    <Separate />
    <UseCallback />
    <Separate />
    <UseMemo />
    <Separate />
    <UseContext />
  </>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import TodoContainer from "./components/TodoContainer";
import "./styles/App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <TodoContainer />
  </StrictMode>
);

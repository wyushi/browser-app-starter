import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";

const app = (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
const container: HTMLElement | null = document.getElementById('root');
ReactDOM.render(app, container);
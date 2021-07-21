import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import './index.css'

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import allReducers from "./redux/reducers";

const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

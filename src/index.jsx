import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

import "semantic-ui-css/semantic.min.css";
import "react-datetime/css/react-datetime.css";

import App from "./App";

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("root")
  );
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./App", () => {
    render(App);
  });
}

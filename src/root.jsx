import { Provider } from "react-redux";
import React from "react";
import { store } from "./store/index";
import App from "./App";
function RootProviders() {
  return (
    // <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    // </Provider>
  );
}
export default RootProviders;

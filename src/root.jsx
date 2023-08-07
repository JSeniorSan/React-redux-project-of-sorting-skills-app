import { Provider } from "react-redux";
import React from "react";

import App from "./App";
function RootProviders() {
  return (
    // <Provider store={}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    // </Provider>
  );
}
export default RootProviders;

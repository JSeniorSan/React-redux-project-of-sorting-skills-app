import { Provider } from "react-redux";
import React from "react";
import { store } from "./store/index";
import App from "./App";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store/index";
function RootProviders() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
}
export default RootProviders;

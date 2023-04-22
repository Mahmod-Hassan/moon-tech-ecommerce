import React from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "./redux/store";
import routes from "./routes/routes";

function App() {
  return (
    <div className="h-[170px] bg-green-50">
      <Provider store={store}>
        <RouterProvider router={routes}></RouterProvider>
      </Provider>
    </div>
  );
}

export default App;

import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Nav from "./pages/Nav";
import TopRated from "./pages/TopRated";
import store from "./redux/store";

function App() {
  return (
    <div className="h-[170px] bg-green-50">
      <Nav></Nav>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/top-rated" element={<TopRated />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;

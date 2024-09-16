import { Routes, Route } from "react-router-dom";
import { Products, Cart } from "../pages";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default Routing;

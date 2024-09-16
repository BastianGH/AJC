import { Routes, Route, Navigate } from "react-router-dom";
import {
  Home,
  Contact,
  ContactEu,
  ContactUs,
  Admin,
  ProductsList,
  ProductDetails,
  PageNotFound,
} from "../pages";

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />}>
          <Route path="eu" element={<ContactEu />} />
          <Route path="us" element={<ContactUs />} />
        </Route>
        <Route path="admin" element={<Admin />} />
        <Route path="products" element={<ProductsList />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default AllRoutes;

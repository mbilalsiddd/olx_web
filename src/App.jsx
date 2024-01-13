import { useEffect, useState } from "react";
import Home from "./pages/Home";
import ProductDetails from "./pages/productDetails";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     
      <Routes>
        <Route index element={<Home />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;

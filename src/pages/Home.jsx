import React from 'react'
import axios from "axios";
import React, { useEffect, useState } from "react";
import CardCmp from "../components/CardCmp";


const Home = () => {
  const [productData, setProductData] = useState(null);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response.data, "response");
      setProductData(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  console.log("productData", productData)
  return (
    <div className="d-flex  gap-3 flex-wrap ">
    {productData?.map((product, index) => {
      console.log(product, "product map");
      return (
        <CardCmp
          title={product.title}
          desc={product.description}
          image={product.image}
          id={product.id}
        />
      );
    })}

    <CardCmp />
  </div>
  )
}

export default Home

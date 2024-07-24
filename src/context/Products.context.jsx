//
//
//

import { useState } from "react";
import { productsContext } from "./createContext/CreateContext";
import axios from "axios";
export default function ProductsContextProvider({ children }) {
  const [products, setProducts] = useState(null);

  const [matchedProducts, setMatchedProducts] = useState(null);

  const [matchedBrand, setMatchedBrand] = useState(null);

  async function getProductsData() {
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/products",
        method: "GET",
      };
      const { data } = await axios.request(options);
      setProducts(data.data);
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getProductsCategory({ id }) {
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/products",
        method: "GET",
      };
      const { data } = await axios.request(options);

      let filteredProducts = data.data.filter(
        (product) => product.category._id == id
      );

      if (filteredProducts) {
        setMatchedProducts(filteredProducts);
      } else {
        setMatchedProducts(null);
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function getProductsBrand({ id }) {
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/products",
        method: "GET",
      };
      const { data } = await axios.request(options);

      let filteredProducts = data.data.filter(
        (product) => product.brand._id == id
      );

      if (filteredProducts) {
        setMatchedBrand(filteredProducts);
      } else {
        setMatchedBrand(null);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <productsContext.Provider
      value={{
        products,
        matchedProducts,
        matchedBrand,
        getProductsData,
        getProductsCategory,
        getProductsBrand,
      }}
    >
      {children}
    </productsContext.Provider>
  );
}

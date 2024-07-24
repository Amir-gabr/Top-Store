//
//
//

import { useContext, useState } from "react";
import { userContext } from "../context/createContext/CreateContext";
import axios from "axios";
import toast from "react-hot-toast";
import { cartContext } from "../context/createContext/CreateContext";

export default function CartContextProvider({ children }) {
  //
  const { token } = useContext(userContext);
  //
  const [cartProducts, setCartProducts] = useState(null);
  //
  async function addProductToCart({ id }) {
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/cart",
        method: "POST",
        headers: {
          token,
        },
        data: {
          productId: id,
        },
      };
      const { data } = await axios.request(options);
      //
      setCartProducts(data)
      if (data.status === "success") {
        toast.success("Product Added To Cart"
    
        );
      } else {
        toast.error(data.message);
      }
      //
    } catch (error) {
      console.log(error);
    }
  }
  //

  //
  async function getProductsCart() {
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/cart",
        method: "GET",
        headers: {
          token,
        },
      };

      const { data } = await axios.request(options);
      // console.log(data);
      //
      setCartProducts(data);
      //
    } catch (error) {
      console.log(error);
      if (error.response.data.message.includes("No cart")) {
        setCartProducts([]);
      }
    }
  }
  //
  //
  async function removeProduct({ id }) {
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
        method: "DELETE",
        headers: {
          token,
        },
      };

      const { data } = await axios.request(options);
      // console.log(data);
      //
      setCartProducts(data);
      //
      toast.success("Product removed successfully");
      //
    } catch (error) {
      console.log(error);
    }
  }
  //

  //
  async function updateProducts({ id, count }) {
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
        method: "PUT",
        headers: {
          token,
        },
        data: {
          count: count,
        },
      };

      const { data } = await axios.request(options);
      //
      setCartProducts(data);
      //
    } catch (error) {
      console.log(error);
    }
  }
  //

  //
  async function clearCart() {
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/cart/`,
        method: "DELETE",
        headers: {
          token,
        },
      };

      const { data } = await axios.request(options);
      // console.log(data);
      //
      setCartProducts(data);
      //
      toast.success("Products removed successfully");
      //
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <cartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        addProductToCart,
        getProductsCart,
        removeProduct,
        updateProducts,
        clearCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}



//
//
//
//

import axios from "axios";
import {
  userContext,
  wishlistContext,
} from "../context/createContext/CreateContext";
import { useContext, useState } from "react";
import toast from "react-hot-toast";

export default function WishlistContextProvider({ children }) {
  //
  const { token } = useContext(userContext);
  //
  const [wishlistProducts, setWishlistProducts] = useState(null);
  //
  async function addProductToWishlist({ id }) {
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/wishlist",
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
      if (data.status === "success") {
        setWishlistProducts(data);
        toast.success("Product Added To  Wishlist");
      } else {
        toast.error(data.message);
      }
      //
    } catch (error) {
      console.log(error);
    }
  }
  //
  async function getProductsWishlist() {
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/wishlist",
        method: "GET",
        headers: {
          token,
        },
      };

      const { data } = await axios.request(options);
      //
      setWishlistProducts(data);
      //
    } catch (error) {
      console.log(error);
      if (error.response.data.message.includes("No cart")) {
        setWishlistProducts([]);
      }
    }
  }
  //
  async function removeProductWishlist({ id }) {
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,
        method: "DELETE",
        headers: {
          token,
        },
      };

      const { data } = await axios.request(options);
      // //
      setWishlistProducts(data);
      //
      if (data.status === "success") {
        toast.success("Product removed successfully");
      } else {
        toast.error(data.message);
      }
      //
    } catch (error) {
      console.log(error);
    }
  }
  //
  return (
    <wishlistContext.Provider
      value={{
        addProductToWishlist,
        getProductsWishlist,
        removeProductWishlist,
        wishlistProducts,
      }}
    >
      {children}
    </wishlistContext.Provider>
  );
}

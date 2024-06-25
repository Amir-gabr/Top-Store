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
        toast.success("Product Added To Cart");
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

// async function getCart(){
//     try {
//         const options = {
//             method: 'GET',
//             url: 'https://ecommerce.routemisr.com/api/v1/cart',
//             headers : {
//                 token
//             }
//         }
//         const {data} = await axios.request(options)
//         setCartInfo(data)
//     } catch (error) {
//         if(error.response.data.message.includes('No cart')){
//             setCartInfo([])
//         }else{
//             console.log(error)
//         }
//     }
// }

//     async function addToCart(prdId) {
//         try {
//             const options ={
//                 method: 'POST',
//                 url: 'https://ecommerce.routemisr.com/api/v1/cart',
//                 headers : {
//                     token
//                 },
//                 data:{
//                     productId : prdId
//                 }
//             }
//             const {data} = await axios.request(options);
//             if(data.status == 'success'){
//                 setCartInfo(data)
//                 toast.success(data.message)
//             }
//             else{
//                 toast.error(data.message)
//             }

//         } catch (error) {
//             console.log(error)
//         }

//     }

//     async function removeCartItem(prdId) {
//         try {
//             const options ={
//                 method: 'DELETE',
//                 url: `https://ecommerce.routemisr.com/api/v1/cart/${prdId}`,
//                 headers : {
//                     token
//                 }
//             }
//             const {data} = await axios.request(options);
//             if(data.status == 'success'){
//                 setCartInfo(data)
//                 toast.success('Product Removed Successfully')
//             }
//             else{
//                 toast.error(data.message)
//             }

//         } catch (error) {
//             console.log(error)
//         }

//     }

//     // async function clearCart(){
//     //     try {
//     //         const options = {
//     //             method: 'DELETE',
//     //             url: 'https://ecommerce.routemisr.com/api/v1/cart',
//     //             headers : {
//     //                 token
//     //             }
//     //         }
//     //         const {data} = await axios.request(options)
//     //         setCartInfo([])
//     //         toast.success('Cart Cleared Successfully')
//     //     } catch (error) {
//     //         console.log(error)
//     //     }
//     // }

//     // async function updateCartItemCount(prdId, count) {
//     //     try {
//     //         const options ={
//     //             method: 'PUT',
//     //             url: `https://ecommerce.routemisr.com/api/v1/cart/${prdId}`,
//     //             headers : {
//     //                 token
//     //             },
//     //             data:{
//     //                 count
//     //             }
//     //         }
//     //         const {data} = await axios.request(options);
//     //         if(data.status == 'success'){
//     //             toast.success('update Cart Item Count successfully')
//     //             setCartInfo(data)
//     //         }
//     //     } catch (error) {
//     //         console.log(error)
//     //     }

//     // }

//     return <cartContext.Provider value={{ addToCart, getCart, cartInfo, setCartInfo, removeCartItem, clearCart, updateCartItemCount}}>
//         {children}
//     </cartContext.Provider>
// }

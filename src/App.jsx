//
//
import { Route, Routes } from "react-router-dom";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
//
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ProdDetails from "./pages/ProdDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import Unfounded from "./pages/NotFound";
// import ProtectedRoute from "./components/8-protectedRoute/ProtectedRoute";
//
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";
//
import UserContextProvider from "./context/User.context";
import CartContextProvider from "./context/Cart.context";
import WishlistContextProvider from "./context/Wishlist.context";
import Categories from "./pages/Categories";
import SpecificCategory from "./pages/SpecificCategory";
import Brands from "./pages/Brands";
import Products from "./pages/Products";
import SpecificBrand from "./pages/SpecificBrand";
import Orders from "./pages/Orders";
import ProductsContextProvider from "./context/Products.context";

export default function App() {
  //
  // const routes = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: (
  //       // <ProtectedRoute>
  //       <Layout />
  //       // </ProtectedRoute>
  //     ),
  //     children: [
  //       { index: true, element: <Home /> },
  //       { path: "product/:id", element: <ProdDetails /> },
  //       { path: "category/:id", element: <Category /> },
  //       { path: "cart", element: <Cart /> },
  //       { path: "signIn", element: <SignIn /> },
  //       { path: "signUp", element: <SignUp /> },
  //       { path: "*", element: <Unfounded /> },
  //     ],
  //   },
  // ]);

  return (
    <>
      <UserContextProvider>
        <CartContextProvider>
          <WishlistContextProvider>
            <ProductsContextProvider>
              {/* <AnimatePresence mode="wait">
              <RouterProvider router={routes}></RouterProvider>
            </AnimatePresence> */}

              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="products" element={<Products />} />
                    <Route path="categories" element={<Categories />} />
                    <Route path="brands" element={<Brands />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="product/:id" element={<ProdDetails />} />
                    <Route path="category/:id" element={<SpecificCategory />} />
                    <Route path="brand/:id" element={<SpecificBrand />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="wishlist" element={<Wishlist />} />
                    <Route path="checkout" element={<Checkout />} />
                    <Route path="signIn" element={<SignIn />} />
                    <Route path="signUp" element={<SignUp />} />
                    <Route path="forgotPassword" element={<ForgotPassword />} />
                    <Route path="*" element={<Unfounded />} />
                  </Route>
                </Routes>
              </AnimatePresence>
              <Toaster />
            </ProductsContextProvider>
          </WishlistContextProvider>
        </CartContextProvider>
      </UserContextProvider>
    </>
  );
}

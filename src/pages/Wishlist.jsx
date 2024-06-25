//
//
//

import { useContext, useEffect } from "react";
import {
  cartContext,
  userContext,
  wishlistContext,
} from "../context/createContext/CreateContext";
import Loader from "../components/Loader";
import { NavLink } from "react-router-dom";
import emptyCartAnimation from "../assets/animation/emptyCart.json";
import Lottie from "lottie-react";
import PageTransition from "../components/PageTransition";

export default function Wishlist() {
  const { token } = useContext(userContext);
  //
  const { wishlistProducts, getProductsWishlist, removeProductWishlist } =
    useContext(wishlistContext);
  //
  const { addProductToCart } = useContext(cartContext);
  //
  console.log(wishlistProducts);

  useEffect(() => {
    getProductsWishlist();
  }, []);

  return (
    <>
      <PageTransition>
        <section className="">
          <h1 className="text-3xl font-bold">Wishlist</h1>
          {wishlistProducts === null ? (
            <>
              {token ? (
                <Loader />
              ) : (
                <div className="flex flex-col gap-3 justify-center items-center my-14 max-h-screen">
                  <Lottie className="w-80" animationData={emptyCartAnimation} />
                  <NavLink to="/" className="">
                    {" "}
                    <p className="text-lg font-semibold w-full rounded-md py-2 px-5 bg-purple-600 hover:bg-purple-700 text-white">
                      Add your first product
                    </p>
                  </NavLink>
                </div>
              )}
            </>
          ) : (
            <>
              {wishlistProducts.count >0 && token ? (
                <div className="grid grid-rows-1 lg:grid-cols-2 gap-4 py-16 ">
                  {wishlistProducts.data.map((product) => (
                    <div
                      key={product._id}
                      className="flex justify-between shadow-lg p-4"
                    >
                      <div className="flex gap-2">
                        <img
                          src={product.imageCover}
                          alt="image..."
                          className="min-w-40 h-40 object-cover"
                        />
                        <div className="">
                          <h2 className="text-xl font-semibold py-4">
                            {product.title}
                          </h2>
                          <p>{product.price} Egy</p>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center min-w-40 gap-2">
                        <button
                          onClick={() => {
                            addProductToCart({ id: product._id });
                          }}
                          className="btn rounded-none"
                        >
                          Add to cart
                        </button>
                        <button
                          onClick={() => {
                            removeProductWishlist({ id: product._id });
                            getProductsWishlist();
                          }}
                          className="btn rounded-none bg-white text-slate-700 hover:bg-slate-300"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col gap-3 justify-center items-center my-14 max-h-screen">
                  <Lottie className="w-80" animationData={emptyCartAnimation} />
                  <NavLink to="/" className="">
                    {" "}
                    <p className="text-lg font-semibold w-full rounded-md py-2 px-5 bg-purple-600 hover:bg-purple-700 text-white">
                      Add your first product
                    </p>
                  </NavLink>
                </div>
              )}
            </>
          )}
        </section>
      </PageTransition>
    </>
  );
}

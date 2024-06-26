//
//
//

import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  cartContext,
  userContext,
} from "../context/createContext/CreateContext";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import Lottie from "lottie-react";
import cartAnimation from "../assets/animation/cart.json";
import emptyCartAnimation from "../assets/animation/emptyCart.json";
import Loader from "../components/Loader";
import PageTransition from "../components/PageTransition";

export default function Cart() {
  const { token } = useContext(userContext);
  const { cartProducts, removeProduct, updateProducts, clearCart } =
    useContext(cartContext);

  return (
    <>
      <PageTransition>
        <section className="bg-white rounded-xl p-5">
          <h2 className="relative w-fit flex items-center gap-4 text-2xl md:text-4xl underline font-bold text-gray-800 py-2">
            Shop Cart
            <Lottie
              className="absolute -right-14 md:-right-20 w-14 md:w-20"
              animationData={cartAnimation}
            />
          </h2>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-7 lg:col-span-8 ">
              {cartProducts === null ? (
                <>
                  {token ? (
                    <Loader />
                  ) : (
                    <div className="flex flex-col gap-3 justify-center items-center my-14 max-h-screen">
                      <Lottie
                        className="w-80"
                        animationData={emptyCartAnimation}
                      />
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
                  {cartProducts.numOfCartItems > 0 && token ? (
                    <>
                      {cartProducts.data.products.map((prod) => (
                        <div
                          key={prod._id}
                          className="md:flex items-center mt-14 py-8 border-t border-gray-200"
                        >
                          <div className="w-32 h-32 border border-purple-500 rounded-md">
                            <img
                              src={prod.product.imageCover}
                              alt="image..."
                              className="w-full h-full object-center object-cover"
                            />
                          </div>
                          <div className="md:pl-3 md:w-3/4">
                            <div className="flex items-center justify-between w-full pt-1">
                              <p className="text-xl font-bold leading-none text-gray-800">
                                {prod.product.title}
                              </p>
                              <p className="flex items-center gap-4">
                                <FaMinus
                                  onClick={() => {
                                    if (prod.count > 1) {
                                      updateProducts({
                                        id: prod.product.id,
                                        count: prod.count - 1,
                                      });
                                    } else {
                                      removeProduct({ id: prod.product.id });
                                    }
                                  }}
                                  className="cursor-pointer bg-purple-500 p-1 text-white rounded-md text-2xl"
                                />
                                <p className="text-xl font-semibold">
                                  {prod.count}
                                </p>
                                <FaPlus
                                  onClick={() => {
                                    updateProducts({
                                      id: prod.product.id,
                                      count: prod.count + 1,
                                    });
                                  }}
                                  className="cursor-pointer bg-purple-500 p-1 text-white rounded-md text-2xl"
                                />
                              </p>
                            </div>
                            <div className="flex items-center justify-between pt-5 pr-6">
                              <div className="flex items-center">
                                <p
                                  onClick={() => {
                                    removeProduct({ id: prod.product.id });
                                  }}
                                  className="text-lg font-semibold leading-3 hover:underline text-purple-500 pl-5 cursor-pointer"
                                >
                                  Remove
                                </p>
                              </div>
                              <p className="text-base font-black leading-none text-gray-800">
                                {prod.price} Egy
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="w-full flex justify-end mt-10">
                        <button
                          onClick={clearCart}
                          className="btn rounded-none"
                        >
                          Clear Cart
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col gap-3 justify-center items-center my-14 max-h-screen">
                      <Lottie
                        className="w-80"
                        animationData={emptyCartAnimation}
                      />
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
            </div>
            <div className="col-span-12 md:col-span-5 lg:col-span-4 flex flex-col justify-between bg-gray-100 min-h-[70vh] p-10">
              <div className="w-full ">
                <p className="mx-auto w-fit text-3xl lg:text-4xl font-bold text-purple-600 pb-6">
                  Summary
                </p>
                <div className="flex items-center justify-between py-3">
                  <p className="text-base leading-none text-gray-800">
                    Subtotal
                  </p>
                  <p className="text-base leading-none text-gray-800">
                    {cartProducts === null
                      ? 0
                      : `${cartProducts.data.totalCartPrice || 0} Egy`}
                  </p>
                </div>
                <div className="flex items-center justify-between py-3">
                  <p className="text-base leading-none text-gray-800">
                    Shipping
                  </p>
                  <p className="text-base leading-none text-gray-800">30 Egy</p>
                </div>
                <div className="flex items-center justify-between py-3">
                  <p className="text-base leading-none text-gray-800">Tax</p>
                  <p className="text-base leading-none text-gray-800">35 Egy</p>
                </div>
              </div>

              <div className="w-full">
                <div className="flex items-center justify-between p-4">
                  <p className="text-3xl font-bold leading-normal text-gray-800">
                    Total
                  </p>
                  <p className="text-2xl font-bold leading-normal text-right text-purple-800">
                    {cartProducts === null
                      ? 0
                      : `${cartProducts.data.totalCartPrice + 30 + 35 || 0} Egy`}
                  </p>
                </div>
                <Link
                  to="/checkout"
                  className="text-base block text-center py-5 bg-purple-600 hover:bg-purple-700 text-white"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </section>
      </PageTransition>
    </>
  );
}

{
  /*  */
}
{
  /* <div className="flex justify-end">
                  <button
                    // onClick={clearCart}
                    className="btn-primary bg-red-600"
                  >
                    clear cart
                  </button>
                </div> */
}

{
  /* {cartProducts.numOfCartItems > 0 ? (
            <div className="m-4 flex justify-end">
              <NavLink to={"/checkout"} className="btn-primary">
                Order now
              </NavLink>
            </div>
          ) : (
            ""
          )} */
}

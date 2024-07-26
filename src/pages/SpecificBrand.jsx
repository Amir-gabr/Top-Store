//
//
//

import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { useEffect } from "react";
import { useContext } from "react";
import {
  cartContext,
  productsContext,
  wishlistContext,
} from "../context/createContext/CreateContext";
import { userContext } from "../context/createContext/CreateContext";
import Loader from "../components/Loader";
import PageTransition from "../components/PageTransition";

export default function SpecificBrand() {
  //
  const { token } = useContext(userContext);
  const { matchedBrand, getProductsBrand } = useContext(productsContext);
  const { addProductToCart } = useContext(cartContext);
  const { addProductToWishlist } = useContext(wishlistContext);

  useEffect(() => {
    getProductsBrand();
  }, []);

  return (
    <>
      <PageTransition>
        <section className="">
          {matchedBrand.length === 0 ? (
            <div className="flex flex-col justify-center items-center h-96 gap-4">
              <p className="text-2xl"> Ops!{"  "}Products Coming Soon... </p>
              <Link
                to="/brands"
                className="text-2xl py-1 px-3  bg-slate-600 text-white rounded-lg"
              >
                Back to Categories
              </Link>
            </div>
          ) : (
            <>
              {matchedBrand ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-4">
                  {matchedBrand.map((product) => (
                    <div
                      key={product._id}
                      className="product group relative overflow-hidden  rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
                    >
                      <div className="flex flex-col justify-between">
                        <div className="h-[290px]">
                          <img
                            className="rounded-t-lg w-full h-full object-cover"
                            src={product.imageCover}
                            alt={product.title}
                          />
                        </div>
                        <div className="py-4 px-2 h-[140px] flex flex-col justify-between ">
                          <div className="">
                            <p className="mb-1 text-base text-neutral-600 dark:text-neutral-200">
                              {product.category.name}
                            </p>
                            <h5 className="text-xl font-bold ] leading-tight text-neutral-800 dark:text-neutral-50">
                              {`${product.title.slice(-23)} ....`}
                            </h5>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-base font-bold text-neutral-600 dark:text-neutral-200">
                              {`${product.price} Egy`}
                            </p>
                            <p className="text-lg leading-tight text-amber-500 flex items-center gap-1">
                              <FaStar />
                              <span className="text-base text-neutral-800  font-bold">
                                {product.ratingsAverage}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="absolute w-full h-full group-hover:translate-y-[-100%] translate-y-[0]  left-0 right-0 transition duration-500 flex items-center justify-center gap-5 text-xl text-purple-500 bg-gradient-to-t from-purple-500 to-transparent">
                        {token ? (
                          <span
                            onClick={() => {
                              addProductToWishlist({ id: product._id });
                            }}
                            className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
                          >
                            <FaHeart className="" />
                          </span>
                        ) : (
                          <Link to="/signIn">
                            <span className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
                              <FaHeart className="" />
                            </span>
                          </Link>
                        )}
                        {token ? (
                          <span
                            onClick={() => {
                              addProductToCart({ id: product._id });
                            }}
                            className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
                          >
                            <FaCartPlus className="" />
                          </span>
                        ) : (
                          <Link to="/signIn">
                            <span className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
                              <FaCartPlus className="" />
                            </span>
                          </Link>
                        )}
                        <span className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
                          <Link to={`/product/${product._id}`}>
                            <FaEye className="" />
                          </Link>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <Loader />
              )}
            </>
          )}
        </section>
      </PageTransition>
    </>
  );
}

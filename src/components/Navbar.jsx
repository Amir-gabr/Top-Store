//
//
//
import { GiShoppingBag } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";
import { PiListBold } from "react-icons/pi";
import { AnimatePresence, motion } from "framer-motion";
//
import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
//
import logo from "../assets/images/logo.png";
//
import {
  cartContext,
  userContext,
  wishlistContext,
} from "../context/createContext/CreateContext";

export default function Navbar() {
  //
  const { token } = useContext(userContext);
  //
  const { cartProducts, getProductsCart } = useContext(cartContext);
  //
  const { wishlistProducts, getProductsWishlist } = useContext(wishlistContext);
  //
  const [isShow, setIsShow] = useState(false);
  //
  const [isActive, setIsActive] = useState(false);

  window.addEventListener("scroll", function () {
    if (this.window.scrollY > 10) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  });
  console.log(isActive);

  useEffect(() => {
    getProductsCart();
    //  setIsActive
  }, []);
  //
  useEffect(() => {
    getProductsWishlist();
  }, []);
  //
  return (
    <>
      {/* disc-top screen */}
      <nav
        className={`${
          isActive
            ? `fixed top-0 left-0 z-[10000] w-full shadow-lg `
            : ""
        } hidden lg:block bg-slate-100 border-b-2`}
      >
        <div className="container">
          <div className="flex items-center justify-between py-2">
            <h2 className="text-[26px] font-bold">
              <Link to="/" className="flex items-center gap-2">
                <img src={logo} alt="" className="w-10" />
                MegaStore
              </Link>
            </h2>

            <ul className=" flex items-center justify-center text-xl gap-6">
              <li className="">
                <NavLink
                  to="/"
                  className={({ isActive }) => {
                    return ` relative font-semibold before:absolute before:h-[2px] before:bottom-0 py-1 hover:text-black hover:before:w-full before:transition-[width] before:duration-300 before:bg-purple-600 
                  ${
                    isActive
                      ? "text-black before:w-full font-black"
                      : "text-slate-700 before:w-0"
                  }
                  `;
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="/products"
                  className={({ isActive }) => {
                    return ` relative font-semibold before:absolute before:h-[2px] before:bottom-0 py-1 hover:text-black hover:before:w-full before:transition-[width] before:duration-300 before:bg-purple-600 
                  ${
                    isActive
                      ? "text-black before:w-full font-black"
                      : "text-slate-700 before:w-0"
                  }
                  `;
                  }}
                >
                  Products
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="/categories"
                  className={({ isActive }) => {
                    return ` relative font-semibold before:absolute before:h-[2px] before:bottom-0 py-1 hover:text-black hover:before:w-full before:transition-[width] before:duration-300 before:bg-purple-600 
                  ${
                    isActive
                      ? "text-black before:w-full font-black"
                      : "text-slate-700 before:w-0"
                  }
                  `;
                  }}
                >
                  Categories
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="/brands"
                  className={({ isActive }) => {
                    return ` relative font-semibold before:absolute before:h-[2px] before:bottom-0 py-1 hover:text-black hover:before:w-full before:transition-[width] before:duration-300 before:bg-purple-600 
                  ${
                    isActive
                      ? "text-black before:w-full font-black"
                      : "text-slate-700 before:w-0"
                  }
                  `;
                  }}
                >
                  Brands
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="/orders"
                  className={({ isActive }) => {
                    return ` relative font-semibold before:absolute before:h-[2px] before:bottom-0 py-1 hover:text-black hover:before:w-full before:transition-[width] before:duration-300 before:bg-purple-600 
                  ${
                    isActive
                      ? "text-black before:w-full font-semibold"
                      : "text-slate-700 before:w-0"
                  }
                  `;
                  }}
                >
                  Orders
                </NavLink>
              </li>
            </ul>

            <ul className="text-2xl flex items-center gap-6">
              <Link to="/cart">
                <li className="relative w-10">
                  <GiShoppingBag className="absolute text-[40px] text-purple-500 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]" />
                  {cartProducts === null ? (
                    <span
                      className="absolute flex items-center justify-center text-white rounded-full font-semibold
                      bg-purple-500 text-sm md:text-lg -top-[5px] left-1/2 translate-x-[-50%] w-4 h-4 md:w-5 md:h-5 "
                    >
                      0
                    </span>
                  ) : (
                    <>
                      {token ? (
                        <span
                          className="absolute flex items-center justify-center text-white rounded-full font-semibold
                      bg-purple-500 text-sm md:text-lg -top-[5px] left-1/2 translate-x-[-50%] w-4 h-4 md:w-5 md:h-5 "
                        >
                          {cartProducts.numOfCartItems || 0}
                        </span>
                      ) : (
                        <span
                          className="absolute flex items-center justify-center text-white rounded-full font-semibold
                      bg-purple-500 text-sm md:text-lg -top-[5px] left-1/2 translate-x-[-50%] w-4 h-4 md:w-5 md:h-5 "
                        >
                          0
                        </span>
                      )}
                    </>
                  )}
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
      {/* mobile screen */}
      <nav
        className={`${
          isActive
            ? `fixed top-0 left-0 z-[10000] w-full shadow-lg`
            : ""
        } block lg:hidden bg-slate-100 border-b-2 px-4 md:px-0`}
      >
        <div className="container">
          <div className="">
            <div className=" flex items-center justify-between py-2 ">
              <h2 className="text-xl md:text-2xl lg:text-[26px] font-bold">
                <Link to="/" className="flex items-center gap-2">
                  <img src={logo} alt="" className="w-6 md:w-8 lg:w-10" />
                  MegaStore
                </Link>
              </h2>
              <p
                onClick={() => {
                  setIsShow(true);
                }}
                className={
                  isShow
                    ? `cursor-pointer relative before:absolute before:top-[50%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:w-[5000px] before:h-[5000px] before:rounded-full before:bg-black before:bg-opacity-80 transition before:duration-1000 z-[90]`
                    : `cursor-pointer relative before:absolute before:top-[50%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:w-0 before:h-0 before:rounded-full before:bg-black before:bg-opacity-80 transition before:duration-500  z-[90]`
                }
              >
                <PiListBold className="text-3xl" />
              </p>
            </div>

            {isShow === true && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                }}
                exit={{ opacity: 1 }}
                className="w-[400px] h-[420px] rounded-xl bg-opacity-70 bg-white fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[100] p-10"
              >
                <FaXmark
                  onClick={() => {
                    setIsShow(false);
                  }}
                  className="absolute right-4 top-4 text-3xl cursor-pointer hover:text-orange-500 hover:rotate-90 transition duration-300 "
                />
                <div className="flex flex-col justify-between h-full w-full">
                  <ul className="flex flex-col justify-center text-xl gap-6">
                    <li
                      onClick={() => {
                        setIsShow(false);
                      }}
                      className=""
                    >
                      <NavLink
                        to="/"
                        className={({ isActive }) => {
                          return ` relative font-semibold before:absolute before:h-[2px] before:bottom-0 py-1 hover:text-black hover:before:w-full before:transition-[width] before:duration-300 before:bg-purple-600 
                      ${
                        isActive
                          ? "text-black before:w-full font-bold"
                          : "text-slate-700 before:w-0"
                      }
                      `;
                        }}
                      >
                        Home
                      </NavLink>
                    </li>
                    <li
                      onClick={() => {
                        setIsShow(false);
                      }}
                      className=""
                    >
                      <NavLink
                        to="/products"
                        className={({ isActive }) => {
                          return ` relative font-semibold before:absolute before:h-[2px] before:bottom-0 py-1 hover:text-black hover:before:w-full before:transition-[width] before:duration-300 before:bg-purple-600 
                      ${
                        isActive
                          ? "text-black before:w-full font-black"
                          : "text-slate-700 before:w-0"
                      }
                      `;
                        }}
                      >
                        Products
                      </NavLink>
                    </li>
                    <li
                      onClick={() => {
                        setIsShow(false);
                      }}
                      className=""
                    >
                      <NavLink
                        to="/categories"
                        className={({ isActive }) => {
                          return ` relative font-semibold before:absolute before:h-[2px] before:bottom-0 py-1 hover:text-black hover:before:w-full before:transition-[width] before:duration-300 before:bg-purple-600 
                      ${
                        isActive
                          ? "text-black before:w-full font-black"
                          : "text-slate-700 before:w-0"
                      }
                      `;
                        }}
                      >
                        Categories
                      </NavLink>
                    </li>
                    <li
                      onClick={() => {
                        setIsShow(false);
                      }}
                      className=""
                    >
                      <NavLink
                        to="/brands"
                        className={({ isActive }) => {
                          return ` relative font-semibold before:absolute before:h-[2px] before:bottom-0 py-1 hover:text-black hover:before:w-full before:transition-[width] before:duration-300 before:bg-purple-600 
                      ${
                        isActive
                          ? "text-black before:w-full font-black"
                          : "text-slate-700 before:w-0"
                      }
                      `;
                        }}
                      >
                        Brands
                      </NavLink>
                    </li>
                    <li
                      onClick={() => {
                        setIsShow(false);
                      }}
                      className=""
                    >
                      <NavLink
                        to="/orders"
                        className={({ isActive }) => {
                          return ` relative font-semibold before:absolute before:h-[2px] before:bottom-0 py-1 hover:text-black hover:before:w-full before:transition-[width] before:duration-300 before:bg-purple-600 
                      ${
                        isActive
                          ? "text-black before:w-full font-black"
                          : "text-slate-700 before:w-0"
                      }
                      `;
                        }}
                      >
                        Orders
                      </NavLink>
                    </li>
                  </ul>
                  <ul className="flex items-center justify-between border-y-[1px] border-purple-500 py-3">
                    <li
                      onClick={() => {
                        setIsShow(false);
                      }}
                      className="relative w-10"
                    >
                      <Link to="/cart">
                        <GiShoppingBag className="absolute text-[40px] text-purple-700 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]" />
                        {cartProducts === null ? (
                          <span
                            className="absolute flex items-center justify-center text-white rounded-full font-semibold
                          bg-purple-700 text-sm md:text-lg -top-[5px] left-1/2 translate-x-[-50%] w-4 h-4 md:w-5 md:h-5 "
                          >
                            0
                          </span>
                        ) : (
                          <>
                            {token ? (
                              <span
                                className="absolute flex items-center justify-center text-white rounded-full font-semibold
                          bg-purple-700 text-sm md:text-lg -top-[5px] left-1/2 translate-x-[-50%] w-4 h-4 md:w-5 md:h-5 "
                              >
                                {cartProducts.numOfCartItems || 0}
                              </span>
                            ) : (
                              <span
                                className="absolute flex items-center justify-center text-white rounded-full font-semibold
                          bg-purple-700 text-sm md:text-lg -top-[5px] left-1/2 translate-x-[-50%] w-4 h-4 md:w-5 md:h-5 "
                              >
                                0
                              </span>
                            )}
                          </>
                        )}
                      </Link>
                    </li>
                    <li
                      onClick={() => {
                        setIsShow(false);
                      }}
                      className="text-lg font-semibold"
                    >
                      <Link to="/wishlist" className="">
                        <li className="text-purple-700">
                          {wishlistProducts === null ? (
                            <span className="">
                              Wishlist (
                              <span className="text-black font-bold"> 0 </span>)
                            </span>
                          ) : (
                            <>
                              {token ? (
                                <span className="p-0">
                                  Wishlist ({" "}
                                  <span className=" text-black font-bold">
                                    {wishlistProducts.data.length || 0}
                                  </span>{" "}
                                  )
                                </span>
                              ) : (
                                <span className="">
                                  Wishlist (
                                  <span className="text-black font-bold">
                                    {" "}
                                    0{" "}
                                  </span>
                                  )
                                </span>
                              )}
                            </>
                          )}
                        </li>
                      </Link>
                    </li>
                  </ul>
                  <ul className="flex items-center justify-center gap-20 text-xl">
                    <Link to="">
                      <li className="group relative flex justify-center items-center">
                        <span className="absolute p-1 rounded-md bg-[#ff4800] text-white font-bold group-hover:opacity-0  group-hover:rounded-[50%] transition-all duration-500  group-hover:from-[#331029]  group-hover:to-[#310413]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            strokeWidth="0"
                            fill="currentColor"
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                          </svg>
                        </span>
                        <span className="absolute text-xs font-bold opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-base duration-700">
                          Instagram
                        </span>
                      </li>
                    </Link>
                    <Link to="">
                      <li className="group relative flex justify-center items-center">
                        <span
                          className="absolute p-1 rounded-md bg-[#0d9eff] text-white
                        font-bold group-hover:opacity-0  group-hover:rounded-[50%]
                      transition-all duration-500  group-hover:from-[#331029]
                        group-hover:to-[#310413]"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            height="24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            className="w-4 h-4"
                          >
                            <path
                              clipRule="evenodd"
                              d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                              fillRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                        <span className="absolute text-xs font-bold opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-base duration-700">
                          Twitter
                        </span>
                      </li>
                    </Link>
                    <Link to="">
                      <li className="group relative flex justify-center items-center">
                        <span className="absolute p-1 rounded-md bg-[#0554ff] text-white font-bold group-hover:opacity-0  group-hover:rounded-[50%] transition-all duration-500  group-hover:from-[#331029]  group-hover:to-[#310413]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1.1em"
                            viewBox="0 0 448 512"
                            strokeWidth="0"
                            fill="currentColor"
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>
                          </svg>
                        </span>
                        <span className="absolute text-xs font-bold opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-base duration-700">
                          Facebook
                        </span>
                      </li>
                    </Link>
                  </ul>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

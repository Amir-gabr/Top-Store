//
//
//
import { GiShoppingBag } from "react-icons/gi";
//
import { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
//
import logo from "../assets/images/logo.png";
//
import {
  cartContext,
  userContext,
} from "../context/createContext/CreateContext";

export default function Navbar() {
  const { token } = useContext(userContext);
  //
  const { cartProducts, getProductsCart } = useContext(cartContext);
  //

  useEffect(() => {
    getProductsCart();
  }, []);

  //
  return (
    <>
      <nav className="bg-slate-100 border-b-2 ">
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
    </>
  );
}

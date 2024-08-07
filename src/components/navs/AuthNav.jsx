//
//
//

import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  wishlistContext,
  userContext,
  // cartContext,
} from "../../context/createContext/CreateContext";
import { useContext } from "react";

export default function AuthNav() {
  //
  const { token, userName, signOut } = useContext(userContext);
  //
  const { wishlistProducts, getProductsWishlist } = useContext(wishlistContext);
  //
  useEffect(() => {
    getProductsWishlist();
  }, []);
  return (
    <>
      {/* disk top screen */}
      <div className="hidden lg:block border-b-[1px] py-[5px]">
        <div className="container flex items-center justify-between ">
          <ul className="flex items-center gap-6 text-xl">
            <ul className="flex items-center gap-3 text-xl">
              <li className="">
                <p className="text-sm">( Phone: 0123456789 )</p>
              </li>
              <li className=" text-lg font-semibold">
                <Link to="/wishlist" className="">
                  <li className="text-purple-500">
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
                            <span className="text-black font-bold"> 0 </span>)
                          </span>
                        )}
                      </>
                    )}
                  </li>
                </Link>
              </li>
            </ul>
          </ul>
          <ul className="flex items-center gap-20 text-xl">
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
          <div className="flex items-center gap-10">
            <ul className="flex items-center gap-4">
              {!token ? (
                <>
                  <li className="">
                    <NavLink
                      to="signIn"
                      className="text-sm md:text-base font-semibold "
                    >
                      SignIn
                    </NavLink>
                  </li>
                  <li className="bg-purple-800 p-1 rounded duration-300 hover:bg-purple-600">
                    <NavLink
                      to="signUp"
                      className="text-sm md:text-base font-semibold text-white"
                    >
                      SignUp
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <NavLink to="signIn">
                    <li onClick={signOut} className="relative ps-8 pe-1">
                      <button className="Btn">
                        <div className="sign">
                          <svg viewBox="0 0 512 512">
                            <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                          </svg>
                        </div>
                        <div className="text">Logout</div>
                      </button>
                      <p className="font-semibold">
                        Hello:{" "}
                        <span className="text-purple-600">
                          {userName ? userName : "Unknown"}
                        </span>{" "}
                      </p>
                    </li>
                  </NavLink>
                  /
                  <NavLink to="myAccount">
                    <li className="">My Account</li>
                  </NavLink>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
      {/* mobile screen */}
      <div className="block lg:hidden border-b-[1px] py-[5px] px-4 md:px-0 ">
        <div className="container flex items-center justify-between ">
          <ul className="flex items-center gap-6 text-xl">
            <ul className="flex items-center gap-3 text-xl">
              <li className="">
                <p className="text-[12px] sm:text-sm">( Phone: 0123456789 )</p>
              </li>
            </ul>
          </ul>
          <div className="flex items-center gap-10">
            <ul className="flex items-center gap-4">
              {!token ? (
                <>
                  <li className="">
                    <NavLink
                      to="signIn"
                      className="text-sm md:text-base font-semibold "
                    >
                      SignIn
                    </NavLink>
                  </li>
                  <li className="bg-purple-800 p-1 rounded duration-300 hover:bg-purple-600">
                    <NavLink
                      to="signUp"
                      className="text-sm md:text-base font-semibold text-white"
                    >
                      SignUp
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <NavLink to="signIn">
                    <li onClick={signOut} className="relative ps-8 pe-1">
                      <button className="Btn">
                        <div className="sign">
                          <svg viewBox="0 0 512 512">
                            <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                          </svg>
                        </div>
                        <div className="text">Logout</div>
                      </button>
                      <p className="font-semibold text-xs md:text-base">
                        Hello:{" "}
                        <span className="text-purple-600">
                          {userName ? userName : "Unknown"}
                        </span>{" "}
                      </p>
                    </li>
                  </NavLink>
                  /
                  <NavLink to="myAccount">
                    <li className="text-xs md:text-base">My Account</li>
                  </NavLink>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

//
//
import axios from "axios";
import { useContext, useRef, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
//
import { FaRegHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
//
import {
  userContext,
  cartContext,
  wishlistContext,
} from "../context/createContext/CreateContext";
//
import Loader from "../components/Loader";
import PageTransition from "../components/PageTransition";
import toast from "react-hot-toast";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function Details() {
  //
  const { id } = useParams();
  //
  const { token } = useContext(userContext);
  //
  const [prodDetails, setProdDetails] = useState(null);
  //
  const [matchedProduct, setMatchedProduct] = useState(null);
  //
  const [isMatched, setIsMatched] = useState();
  //
  const { addProductToCart, updateProducts } = useContext(cartContext);
  //
  const { addProductToWishlist } = useContext(wishlistContext);
  //
  console.log(matchedProduct);
  // this is a function checks if the product is in the cart or not
  async function getProductsCart({ prodId }) {
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/cart",
        method: "GET",
        headers: {
          token,
        },
      };
      const { data } = await axios.request(options);
      // here we search about specific product in the cart
      let matchedProduct = data.data.products.find(
        (product) => product.product._id === prodId
      );

      // here a condition checks if the product is in the cart or not
      if (matchedProduct) {
        setIsMatched("yes");
        setMatchedProduct(matchedProduct);
      } else {
        setIsMatched("no");
        setMatchedProduct(null);
      }
    } catch (error) {
      console.log(error);
    }
  }

  // this is a function for get specific product details by its id
  async function getProdDetails(id) {
    const options = {
      url: `https://ecommerce.routemisr.com/api/v1/products/${id}`,
      method: "GET",
    };

    const { data } = await axios.request(options);
    setProdDetails(data.data);
  }
  // we use here useEffect hook to displayed on the screen directly
  useEffect(() => {
    getProdDetails(id);
  }, [id]);

  return (
    <>
      <PageTransition>
        <section className="">
          {prodDetails ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="">
                <Swiper
                  className="w-full h-full"
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                >
                  {prodDetails.images.map((img, index) => (
                    <SwiperSlide
                      key={index}
                      className="flex justify-center h-full"
                    >
                      <div className="">
                        <img
                          key={index}
                          src={img}
                          alt="image..."
                          className="w-80 border-[1px] border-purple-500 rounded-md"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="flex flex-col justify-between bg-slate-200 p-10 rounded-xl">
                <div className="flex flex-col justify-center gap-3">
                  <h2 className="text-2xl font-bold">{prodDetails.title}</h2>
                  <p className="font-bold">{`${prodDetails.price} Egy`}</p>
                  <p className="text-slate-700">{prodDetails.description}</p>
                  <p className="text-lg leading-tight text-amber-500 flex items-center gap-1">
                    <FaStar />
                    <span className="text-base text-neutral-800  font-bold">
                      {prodDetails.ratingsAverage}
                    </span>
                  </p>
                </div>
                {/* here we check if there is a product in the cart matched the product in the details page or not  */}
                {matchedProduct ? (
                  // if there is a product in the cart matched the product in the details page
                  //we display the quantity of the product in the cart
                  <div className="flex items-center gap-4">
                    <p className="text-xl">Quantity:</p>
                    <div className="flex items-center gap-4">
                      <FaMinus
                        onClick={() => {
                          getProductsCart({ prodId: prodDetails.id });
                          if (isMatched === "yes") {
                            matchedProduct.count > 1
                              ? updateProducts({
                                  id: matchedProduct.product.id,
                                  count: matchedProduct.count - 1,
                                })
                              : null;
                          } else {
                            null;
                          }
                        }}
                        className="cursor-pointer bg-purple-500 p-1 text-white rounded-md text-2xl"
                      />

                      <p className="text-xl font-semibold">
                        {matchedProduct.count || 1}
                      </p>

                      <FaPlus
                        onClick={() => {
                          getProductsCart({ prodId: prodDetails.id });
                          if (isMatched === "yes") {
                            updateProducts({
                              id: matchedProduct.product.id,
                              count: matchedProduct.count + 1,
                            });
                          } else {
                            null;
                          }
                        }}
                        className="cursor-pointer bg-purple-500 p-1 text-white rounded-md text-2xl"
                      />
                    </div>
                  </div>
                ) : (
                  // if there is no product in the cart matched the product in the details page
                  //we display the quantity of 1 and ask the user to add product to the cart first
                  <div className="flex items-center gap-4">
                    <p className="text-xl">Quantity:</p>
                    <div className="flex items-center gap-4">
                      <FaMinus
                        onClick={() => {
                          toast.error("Add the product to cart first");
                        }}
                        className="cursor-pointer bg-purple-500 p-1 text-white rounded-md text-2xl"
                      />
                      <p className="text-xl font-semibold">1</p>
                      <FaPlus
                        onClick={() => {
                          toast.error("Add the product to cart first");
                        }}
                        className="cursor-pointer bg-purple-500 p-1 text-white rounded-md text-2xl"
                      />
                    </div>
                  </div>
                )}
                <div className="">
                  {token ? (
                    <>
                      <button
                        onClick={() => {
                          addProductToCart({ id: prodDetails.id });
                          //I put this function here to get the data ech click
                          setTimeout(() => {
                            getProductsCart({ prodId: prodDetails.id });
                          }, 1000);
                        }}
                        className="flex items-center justify-center gap-3 w-full text-lg text-white py-1 rounded-md bg-purple-500 mb-2"
                      >
                        <FaCartPlus />
                        Add To Cart
                      </button>
                      <button
                        onClick={() =>
                          addProductToWishlist({ id: prodDetails.id })
                        }
                        className="flex items-center justify-center gap-3 w-full text-lg py-1 rounded-md border-2 border-purple-500 "
                      >
                        <FaRegHeart />
                        Wishlist
                      </button>
                    </>
                  ) : (
                    <>
                      <Link to="/signIn">
                        <button className="flex items-center justify-center gap-3 w-full text-lg text-white py-1 rounded-md bg-purple-500 mb-2">
                          <FaCartPlus />
                          Add To Cart
                        </button>
                      </Link>
                      <Link to="/signIn">
                        <button className="flex items-center justify-center gap-3 w-full text-lg py-1 rounded-md border-2 border-purple-500 ">
                          <FaRegHeart />
                          Wishlist
                        </button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <Loader />
          )}
        </section>
      </PageTransition>
    </>
  );
}

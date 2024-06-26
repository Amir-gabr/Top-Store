//
//
//
import { useContext, useEffect, useState } from "react";
import PageTransition from "../components/PageTransition";
import { userContext } from "../context/createContext/CreateContext";
import emptyCartAnimation from "../assets/animation/emptyCart.json";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import Loader from "../components/Loader";
import Lottie from "lottie-react";
import { NavLink } from "react-router-dom";

export default function Orders() {
  const { token } = useContext(userContext);

  const { id } = jwtDecode(token);

  const [orders, setOrders] = useState(null);

  console.log(orders);

  async function getOrderData() {
    const options = {
      url: `https://ecommerce.routemisr.com/api/v1/orders/user/${id}`,
      method: "GET",
    };

    const { data } = await axios.request(options);

    setOrders(data);
  }

  useEffect(() => {
    getOrderData();
  }, []);
  return (
    <>
      <PageTransition>
        <section className="">
          <h1 className="my-10 w-fit mx-auto text-2xl md:text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-white bg-purple-600 py-2 px-4 rounded-ss-3xl rounded-br-3xl">
            All Orders
          </h1>
          {orders === null ? (
            <>
              {token ? (
                <Loader />
              ) : (
                <div className="flex flex-col gap-3 justify-center items-center my-14 max-h-screen">
                  <Lottie className="w-80" animationData={emptyCartAnimation} />
                  <NavLink to="/" className="">
                    {" "}
                    <p className="text-lg font-semibold w-full rounded-md py-2 px-5 bg-purple-600 hover:bg-purple-700 text-white">
                      Make your first order
                    </p>
                  </NavLink>
                </div>
              )}
            </>
          ) : (
            <>
              {orders.totalOrderPrice === 0 && token ? (
                <>
                  {orders.map((order) => (
                    <div key={order.id} className="p-6 border">
                      <div className="flex items-center justify-between mb-4">
                        <div className="space-y-2">
                          <p className="font-semibold text-lg">
                            order{" "}
                            <span className="border px-2 rounded-md text-white bg-slate-400">
                              {" "}
                              {order.paymentMethodType}
                            </span>{" "}
                          </p>
                          <p className="font-semibold text-lg">{`#${order.id}`}</p>
                        </div>
                        <div className="space-y-2">
                          {order.isDelivered ? (
                            <p className="bg-green-500 py-1 px-3 rounded-md font-semibold text-white">
                              تم التوصيل
                            </p>
                          ) : (
                            <p className="bg-blue-500 py-1 px-3 rounded-md font-semibold text-white">
                              قيد التوصيل
                            </p>
                          )}
                          {order.isPaid ? (
                            <p className="bg-green-500 py-1 px-3 rounded-md font-semibold text-white">
                              تم الدفع
                            </p>
                          ) : (
                            <p className="bg-red-500 py-1 px-3 rounded-md font-semibold text-white">
                              لم يتم الدفع
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4  lg:grid-cols-5">
                        {order.cartItems.map((item) => (
                          <div key={item._id} className="border">
                            <img
                              src={item.product.imageCover}
                              alt="image.."
                              className="w-full h-44 border"
                            />
                            <p className="font-semibold text-lg px-2">
                              {item.product.title}
                            </p>
                            <p className="px-2">{item.price} L.E</p>
                          </div>
                        ))}
                      </div>
                      <div className="py-6 text-xl font-semibold text-purple-500">
                        Total {order.totalOrderPrice} L.E
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <div className="flex flex-col gap-3 justify-center items-center my-14 max-h-screen">
                  <Lottie className="w-80" animationData={emptyCartAnimation} />
                  <NavLink to="/" className="">
                    {" "}
                    <p className="text-lg font-semibold w-full rounded-md py-2 px-5 bg-purple-600 hover:bg-purple-700 text-white">
                      Make your first order
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

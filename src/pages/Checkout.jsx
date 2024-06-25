//
//
//

import { useFormik } from "formik";
import { useContext, useState } from "react";
import {
  cartContext,
  userContext,
} from "../context/createContext/CreateContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();
  //
  const { token } = useContext(userContext);
  //
  const { cartProducts, setCartProducts } = useContext(cartContext);
  //
  const [orderType, setOrderType] = useState(null);
  async function createOnlineOrder(values) {
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartProducts.data._id}?url=http://localhost:5173`,
        method: "POST",
        headers: {
          token,
        },
        data: {
          values,
        },
      };

      const { data } = await axios.request(options);
      console.log(data);

      if (data.status === "success") {
        window.location.href = data.session.url;
      }
      //   setCartProducts([]);
    } catch (error) {
      console.log(error);
    }
  }
  async function createCashOrder(values) {
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/orders/${cartProducts.data._id}`,
        method: "POST",
        headers: {
          token,
        },
        data: {
          values,
        },
      };

      const { data } = await axios.request(options);
      console.log(data);
      setCartProducts([]);
      navigate("/orders");
    } catch (error) {
      console.log(error);
    }
  }

  const formik = useFormik({
    initialValues: {
      shippingAddress: {
        details: "",
        phone: "",
        city: "",
      },
    },
    onSubmit: (values) => {
      if (orderType === "cash") createCashOrder(values);
      else createOnlineOrder(values);
    },
  });
  return (
    <>
      <section className="">
        <h2 className="text-xl md:text-2xl font-semibold py-6 ">
          Shipping Address
        </h2>
        <form
          autoComplete="off"
          onSubmit={formik.handleSubmit}
          className="flex flex-col space-y-2"
        >
          <input
            type="text"
            className="form-control"
            name="shippingAddress.city"
            value={formik.values.shippingAddress.city}
            onChange={formik.handleChange}
            placeholder="city"
          />
          <input
            type="tel"
            className="form-control"
            name="shippingAddress.phone"
            value={formik.values.shippingAddress.phone}
            onChange={formik.handleChange}
            placeholder="phone"
          />
          <textarea
            className="p-2 form-control resize-none"
            name="shippingAddress.details"
            value={formik.values.shippingAddress.details}
            onChange={formik.handleChange}
            rows="3"
            placeholder="details"
          ></textarea>
          <div className="space-x-3 py-4">
            <button
              onClick={() => {
                setOrderType("cash");
              }}
              type="submit"
              className="btn"
            >
              cash order
            </button>
            <button
              onClick={() => {
                setOrderType("online");
              }}
              type="submit"
              className="btn"
            >
              online order
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

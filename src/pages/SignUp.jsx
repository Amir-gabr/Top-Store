//
//
//

import { useFormik } from "formik";
import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import * as yup from "yup";
import { userContext } from "../context/createContext/CreateContext";
import { Link } from "react-router-dom";
export default function SignUp() {
  //
  const { signUpData } = useContext(userContext);
  //
  const phoneRegex =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

  //
  const validationForm = yup.object({
    name: yup
      .string()
      .required("Name is required")
      .min("3", "Name must be more than 3 characters ")
      .max(20, "Name must be less than 20 characters "),
    email: yup
      .string()
      .required("Email is required")
      .email("Email is not valid")
      .matches(emailRegex, "Please enter a valid email address"),
    phone: yup
      .string()
      .required("Phone is required")
      .matches(phoneRegex, "Phone number is not valid"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        passwordRegex,
        "Your password must be at least 8 characters long, contain at least one number and have a mixture of uppercase and lowercase letters."
      ),
    rePassword: yup
      .string()
      .required("Confirm password is required")
      .oneOf(
        [yup.ref("password")],
        "Confirm password is not match the password"
      ),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    onSubmit: signUpData,
    validationSchema: validationForm,
  });

  return (
    <>
      <section className="">
        <h2 className="text-2xl mb-6 flex items-center gap-2 text-purple-600">
          <FaUserCircle />
          <span className="">Register Now.</span>
        </h2>
        <form onSubmit={formik.handleSubmit} className="space-y-3">
          <div className="">
            <input
              type="text"
              aria-autocomplete="off"
              placeholder="Username"
              className="form-control w-full"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.errors.name && formik.touched.name ? (
              <span className="input-error">* {formik.errors.name}</span>
            ) : (
              ""
            )}
          </div>
          <div className="">
            <input
              type="email"
              aria-autocomplete="off"
              placeholder="Email"
              className="form-control w-full"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email ? (
              <span className="input-error">* {formik.errors.email}</span>
            ) : (
              ""
            )}
            {/* {errorMes ? <span className="input-error">* {errorMes}</span> : ""} */}
          </div>
          <div className="">
            <input
              type="tel"
              aria-autocomplete="off"
              placeholder="Phone"
              className="form-control w-full"
              name="phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            {formik.errors.phone && formik.touched.phone ? (
              <span className="input-error">* {formik.errors.phone}</span>
            ) : (
              ""
            )}
          </div>
          <div className="">
            <input
              type="password"
              aria-autocomplete="off"
              placeholder="Password"
              className="form-control w-full"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password ? (
              <span className="input-error">* {formik.errors.password}</span>
            ) : (
              ""
            )}
          </div>
          <div className="">
            <input
              type="password"
              aria-autocomplete="off"
              placeholder="Confirm Password"
              className="form-control w-full"
              name="rePassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.rePassword}
            />
            {formik.errors.rePassword && formik.touched.rePassword ? (
              <span className="input-error">* {formik.errors.rePassword}</span>
            ) : (
              ""
            )}
            <p className="flex justify-end font-semibold text-lg py-2 space-x-2 px-4">
              <span className="text-xl font-bold">OR</span>{" "}
              <Link to="/signIn ">
                <span className="text-sm md:text-lg text-purple-500 font-bold hover:text-purple-700">
                  {" "}
                  Sign In{" "}
                </span>{" "}
              </Link>
            </p>
          </div>
          <button type="submit" className="btn">
            Register
          </button>
        </form>
      </section>
    </>
  );
}

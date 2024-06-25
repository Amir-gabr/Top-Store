//
//
//

//
//
//

import { useFormik } from "formik";
import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import * as yup from "yup";
import { userContext } from "../context/createContext/CreateContext";
import { Link } from "react-router-dom";

export default function SignIn() {
  //
  const { signInData, errorMes } = useContext(userContext);
  //
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  //
  const validationForm = yup.object({
    email: yup
      .string()
      .required("Email is required")
      .email("Email is not valid")
      .matches(emailRegex, "Please enter a valid email address"),

    password: yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: signInData,
    validationSchema: validationForm,
  });

  return (
    <>
      <section className="">
        <h2 className="text-2xl mb-6 flex items-center gap-2 text-purple-600">
          <FaUserCircle />
          <span className="capitalize">sign in</span>
        </h2>
        <form onSubmit={formik.handleSubmit} className="space-y-3">
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
            {errorMes ? <span className="input-error">* {errorMes}</span> : ""}
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
            <p className="flex justify-end font-semibold text-lg py-2 space-x-2">
              <Link to="/forgotPassword">
                <span className=""> Forgot password? </span>
              </Link>
              <span className="text-xl font-bold">OR</span>{" "}
              <Link to="/signUp">
                <span className="text-purple-500 font-bold hover:text-purple-700">
                  {" "}
                  Sign Up{" "}
                </span>{" "}
              </Link>
            </p>
          </div>
          <button type="submit" className="btn">
            Sign In
          </button>
        </form>
      </section>
    </>
  );
}

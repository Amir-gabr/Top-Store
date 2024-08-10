//
//
//

//
//
//

import * as yup from "yup";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaUserCircle } from "react-icons/fa";
import { userContext } from "../context/createContext/CreateContext";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = (type) => {
    switch (type) {
      case "show":
        setShowPassword(!showPassword);
    }
  };
  //
  const { signInData, errorMes } = useContext(userContext);
  //
  console.log(errorMes);
  //
  const validationForm = yup.object({
    email: yup.string().required("Email is required"),

    password: yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: signInData,
    validationSchema: validationForm,
    enableReinitialize: true,
  });

  return (
    <>
      <section className="min-h-[70vh] flex justify-center items-center">
        <div className="bg-purple-200 p-6 rounded-xl shadow-xl w-[80vw] md:w-[60vw] mx-auto">
          <h2 className="text-2xl mb-6 flex items-center gap-2 text-purple-800">
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
              {errorMes.includes("Incorrect") ? (
                <span className="input-error">* {errorMes}</span>
              ) : (
                ""
              )}
            </div>
            <div className="">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  aria-autocomplete="off"
                  placeholder="Password"
                  className="form-control w-full"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility("show")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  {showPassword ? (
                    <FaEyeSlash className="h-6 w-6 text-gray-600" />
                  ) : (
                    <FaEye className="h-6 w-6 text-gray-600" />
                  )}
                </button>
              </div>
              {formik.errors.password && formik.touched.password ? (
                <span className="input-error">* {formik.errors.password}</span>
              ) : (
                ""
              )}
            </div>
            <p className="flex justify-end items-center font-semibold text-lg py-2 space-x-2">
              <Link to="/forgotPassword">
                <span className="text-base md:text-xl"> Forgot password? </span>
              </Link>
              <span className="text-sm">OR</span>{" "}
              <Link to="/signUp">
                <span className="text-base md:text-xl underline text-purple-800 font-bold hover:text-purple-700">
                  {" "}
                  Create Account?{" "}
                </span>{" "}
              </Link>
            </p>
            <button type="submit" className="btn">
              Sign In
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

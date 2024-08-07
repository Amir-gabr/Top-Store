//
//
//
import * as Yup from "yup";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSquareXmark } from "react-icons/fa6";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import PasswordStrengthBar from "react-password-strength-bar";
import { userContext } from "../../context/createContext/CreateContext";

export default function ChangePassModel() {
  const navigate = useNavigate();
  const { errorMes, changePassword, changePass, signOut } =
    useContext(userContext);
  console.log(errorMes);
  console.log(changePass);

  const [showModel, setShowModel] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = (type) => {
    switch (type) {
      case "current":
        setShowCurrentPassword(!showCurrentPassword);
        break;
      case "new":
        setShowNewPassword(!showNewPassword);
        break;
      case "confirm":
        setShowConfirmPassword(!showConfirmPassword);
        break;
      default:
        break;
    }
  };

  const validationSchema = Yup.object({
    currentPassword: Yup.string().required("Current password is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .required("New password is required"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  });

  function handleSubmit(resetForm) {
    setTimeout(() => {
      if (changePass === "success") {
        setShowModel(false);
        resetForm();
        signOut();
        navigate("/signIn");
      } else {
        null;
      }
    }, 1000);
  }

  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      password: "",
      rePassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      changePassword(values).then(() => {
        handleSubmit(resetForm);
      });
    },
  });

  return (
    <div className="">
      <div id="button" className="flex items-center">
        <button
          onClick={() => setShowModel(true)}
          className="bg-purple-400 py-2 px-4 rounded text-white"
        >
          Update password
        </button>
      </div>
      <div
        id="modal"
        className={`${showModel ? "flex" : "hidden"} items-center`}
      >
        <div className="absolute w-full h-full inset-0 bg-black bg-opacity-25 flex flex-col justify-center items-center z-[999]">
          <div className="relative max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg w-full">
            <p
              onClick={() => setShowModel(false)}
              className="absolute top-2 right-2"
            >
              <FaSquareXmark className="text-3xl" />
            </p>
            <h2 className="text-2xl font-bold mb-6 text-center">
              Change User Password
            </h2>
            <form onSubmit={formik.handleSubmit} className="space-y-4">
              <div className="flex items-center border-b border-gray-400 py-2">
                <label htmlFor="currentPassword" className="w-1/3">
                  Current Password
                </label>
                <div className="w-2/3">
                  <div className="relative">
                    <input
                      type={showCurrentPassword ? "text" : "password"}
                      id="currentPassword"
                      name="currentPassword"
                      placeholder="Enter your current password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.currentPassword}
                      required
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                    <button
                      type="button"
                      onClick={() => togglePasswordVisibility("current")}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      {showCurrentPassword ? (
                        <FaEyeSlash className="h-6 w-6 text-gray-600" />
                      ) : (
                        <FaEye className="h-6 w-6 text-gray-600" />
                      )}
                    </button>
                  </div>
                  {formik.errors.currentPassword &&
                    formik.touched.currentPassword && (
                      <span className="input-error">
                        * {formik.errors.currentPassword}
                      </span>
                    )}
                  {errorMes.includes("fail") && (
                    <span className="input-error">
                      * This password is wrong
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center border-b border-gray-400 py-2">
                <label htmlFor="password" className="w-1/3">
                  New Password
                </label>
                <div className="w-2/3">
                  <div className="relative">
                    <input
                      type={showNewPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      placeholder="Enter your new password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                      required
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                    <button
                      type="button"
                      onClick={() => togglePasswordVisibility("new")}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      {showNewPassword ? (
                        <FaEyeSlash className="h-6 w-6 text-gray-600" />
                      ) : (
                        <FaEye className="h-6 w-6 text-gray-600" />
                      )}
                    </button>
                  </div>
                  <PasswordStrengthBar password={formik.values.password} />
                  {formik.errors.password && formik.touched.password && (
                    <span className="input-error">
                      * {formik.errors.password}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center border-b border-gray-400 py-2">
                <label htmlFor="rePassword" className="w-1/3">
                  Confirm Password
                </label>
                <div className="w-2/3">
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="rePassword"
                      name="rePassword"
                      placeholder="Confirm your new password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.rePassword}
                      required
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                    <button
                      type="button"
                      onClick={() => togglePasswordVisibility("confirm")}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      {showConfirmPassword ? (
                        <FaEyeSlash className="h-6 w-6 text-gray-600" />
                      ) : (
                        <FaEye className="h-6 w-6 text-gray-600" />
                      )}
                    </button>
                  </div>
                  {formik.errors.rePassword && formik.touched.rePassword && (
                    <span className="input-error">
                      * {formik.errors.rePassword}
                    </span>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Change Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

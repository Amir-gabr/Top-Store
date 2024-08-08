//
//
//

import * as yup from "yup";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import { userContext } from "../../context/createContext/CreateContext";
import { FaSquareXmark } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
export default function ChangeUserModel() {
  const { changeUser, changeUserInfo, signOut } =
    useContext(userContext);
  
  const navigate = useNavigate();
  
  const [showModel, setShowModel] = useState(false);

  console.log(changeUser);

  const phoneRegex = /^01[0125][0-9]{8}$/;
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Name is required")
      .min(3, "Name must be more than 3 characters")
      .max(20, "Name must be less than 20 characters"),
    email: yup
      .string()
      .required("Email is required")
      .email("Email is not valid")
      .matches(emailRegex, "Please enter a valid email address"),
    phone: yup
      .string()
      .required("Phone is required")
      .matches(phoneRegex, "This not a valid Egyptian phone number."),
  });

  function handleSubmit(resetForm) {
    setTimeout(() => {
      if (changeUser === "success") {
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
      name: "",
      email: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      changeUserInfo(values).then(() => {
        handleSubmit(resetForm);
      });
    },
  });

  return (
    <div>
      <div id="button" className="flex items-center">
        <button
          onClick={() => setShowModel(true)}
          className="bg-purple-400 py-2 px-4 rounded text-white"
        >
          Update User Info
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
              className="absolute top-2 right-2 cursor-pointer"
            >
              <FaSquareXmark className="text-3xl" />
            </p>
            <h2 className="text-2xl font-bold mb-6 text-center">
              Change User Info
            </h2>
            <form onSubmit={formik.handleSubmit} className="space-y-4">
              <div className="flex items-center border-b border-gray-400 py-2">
                <label htmlFor="name" className="w-1/3">
                  Name
                </label>
                <div className="w-2/3">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    required
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                  {formik.errors.name && formik.touched.name && (
                    <span className="input-error">* {formik.errors.name}</span>
                  )}
                </div>
              </div>
              <div className="flex items-center border-b border-gray-400 py-2">
                <label htmlFor="email" className="w-1/3">
                  Email
                </label>
                <div className="w-2/3">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    required
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                  {formik.errors.email && formik.touched.email && (
                    <span className="input-error">* {formik.errors.email}</span>
                  )}
                </div>
              </div>
              <div className="flex items-center border-b border-gray-400 py-2">
                <label htmlFor="phone" className="w-1/3">
                  Phone
                </label>
                <div className="w-2/3">
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    required
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                  {formik.errors.phone && formik.touched.phone && (
                    <span className="input-error">* {formik.errors.phone}</span>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="w-full cursor-pointer bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

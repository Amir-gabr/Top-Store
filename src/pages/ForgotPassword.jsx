//
//
//
import * as yup from "yup";
import Lottie from "lottie-react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import PasswordStrengthBar from "react-password-strength-bar";

//
import { FaArrowAltCircleLeft } from "react-icons/fa";
import forgotPass from "../assets/animation/forgotPass.json";
import codeVerify from "../assets/animation/code-verify.json";
//
import { userContext } from "../context/createContext/CreateContext";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

export default function ForgotPassWord() {
  const [showPassword, setShowPassword] = useState(false);
  //
  let navigate = useNavigate();

  const togglePasswordVisibility = (type) => {
    switch (type) {
      case "show":
        setShowPassword(!showPassword);
    }
  };
  const {
    forgotPassword,
    resetVerifyCode,
    resetPassword,
    errorMes,
    codeSended,
    verifyCode,
    succNewPass,
  } = useContext(userContext);
  //

  console.log("Error message", errorMes);
  console.log("Code State", verifyCode);
  console.log("Email send code", codeSended);
  console.log("new password", succNewPass);

  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

  //
  const validationForm = yup.object({
    newPassword: yup
      .string()
      .required("Password is required")
      .matches(
        passwordRegex,
        "Your password must be at least 8 characters long, contain at least one number and have a mixture of uppercase and lowercase letters."
      ),
  });

  const emailFormik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: forgotPassword,
    enableReinitialize: true,
  });

  const verifyCodeFormik = useFormik({
    initialValues: {
      resetCode: "",
    },
    onSubmit: resetVerifyCode,
    enableReinitialize: true,
  });

  const resetPassFormik = useFormik({
    initialValues: {
      email: "",
      newPassword: "",
    },
    onSubmit: resetPassword,
    validationSchema: validationForm,
    enableReinitialize: true,
  });

  return (
    <>
      <section className="">
        <div className="my-6 mx-auto max-w-2xl">
          <div className=" flex flex-col gap-5  w-full  p-5">
            {codeSended == "success" ? (
              codeSended == "success" && verifyCode == "Success" ? (
                // reset new Password
                <>
                  <form
                    onSubmit={resetPassFormik.handleSubmit}
                    className="space-y-3"
                  >
                    <div className="">
                      <input
                        type="email"
                        aria-autocomplete="off"
                        placeholder="Enter Your Email"
                        className="form-control w-full"
                        name="email"
                        onChange={resetPassFormik.handleChange}
                        onBlur={resetPassFormik.handleBlur}
                        value={resetPassFormik.values.email}
                      />

                      {errorMes.includes("no") ? (
                        <span className="input-error">*{errorMes}</span>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="">
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          aria-autocomplete="off"
                          placeholder="New Password"
                          className="form-control w-full"
                          name="newPassword"
                          onChange={resetPassFormik.handleChange}
                          onBlur={resetPassFormik.handleBlur}
                          value={resetPassFormik.values.newPassword}
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
                      <PasswordStrengthBar
                        className=""
                        password={resetPassFormik.values.newPassword}
                      />
                      {resetPassFormik.errors.newPassword &&
                      resetPassFormik.touched.newPassword ? (
                        <span className="input-error">
                          * {resetPassFormik.errors.newPassword}
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                    <button
                      onClick={() =>
                        errorMes.includes("no") ? navigate("/signIn") : null
                      }
                      type="submit"
                      className="btn"
                    >
                      Reset Password
                    </button>
                  </form>
                </>
              ) : (
                // Check sended code or not and is valid or expire
                <>
                  <div className="flex flex-col items-center justify-center pb-6 ">
                    <Lottie animationData={codeVerify} className="w-32" />
                    <h3 className=" text-2xl font-bold  py-1 px-3 rounded-md">
                      Check your mail inbox ?
                    </h3>
                  </div>
                  {/*body*/}
                  <form
                    onSubmit={verifyCodeFormik.handleSubmit}
                    className="space-y-3"
                  >
                    <div className="">
                      <input
                        type="text"
                        aria-autocomplete="off"
                        placeholder="Enter Verify Code"
                        className="form-control w-full"
                        name="resetCode"
                        onChange={verifyCodeFormik.handleChange}
                        onBlur={verifyCodeFormik.handleBlur}
                        value={verifyCodeFormik.values.resetCode}
                      />
                      {codeSended == "success" && ""}
                      {errorMes == "Reset code is invalid or has expired" ? (
                        <span className="input-error">
                          * Reset code is invalid or has expired
                        </span>
                      ) : (
                        ""
                      )}
                    </div>

                    <button type="submit" className="btn">
                      Check Code
                    </button>
                  </form>
                </>
              )
            ) : (
              // Check if your email is exist or not
              <>
                <div className="flex flex-col items-center justify-center pb-6 ">
                  <Lottie animationData={forgotPass} className="w-32" />
                  <h3 className=" text-2xl font-semibold  py-1 px-3 rounded-md">
                    Forgot Password ?
                  </h3>
                </div>
                <form onSubmit={emailFormik.handleSubmit} className="space-y-3">
                  <div className="">
                    <input
                      type="email"
                      aria-autocomplete="off"
                      placeholder="Enter Your Email"
                      className="form-control w-full"
                      name="email"
                      onChange={emailFormik.handleChange}
                      onBlur={emailFormik.handleBlur}
                      value={emailFormik.values.email}
                    />
                    {errorMes.includes("no") ? (
                      <span className="input-error">* {errorMes}</span>
                    ) : (
                      ""
                    )}
                  </div>
                  <button type="submit" className="btn">
                    Send Code
                  </button>
                </form>
              </>
            )}

            {/*footer*/}
            <div className="flex flex-col items-center justify-center gap-2 py-3 border-t border-solid border-blue-200 rounded-b">
              <h6 className="text-sm text-gray-500">Remember your password?</h6>
              <div className="flex items-center gap-10">
                <Link to="/signIn">
                  <button className="flex items-center gap-2" type="button">
                    <FaArrowAltCircleLeft className="text-2xl text-purple-500" />
                    Back to sign in
                  </button>
                </Link>
                {codeSended == "success" && verifyCode == undefined ? (
                  <form onSubmit={emailFormik.handleSubmit}>
                    <button type="submit" className="btn">
                      Send Code again?
                    </button>
                  </form>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

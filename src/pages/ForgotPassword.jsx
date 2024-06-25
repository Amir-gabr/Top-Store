//
//
//
import Lottie from "lottie-react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useContext } from "react";
//
import { FaArrowAltCircleLeft } from "react-icons/fa";
import forgotPass from "../assets/animation/forgotPass.json";
import codeVerify from "../assets/animation/code-verify.json";
//
import { userContext } from "../context/createContext/CreateContext";

export default function ForgotPassWord() {
  //
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
  });

  const verifyCodeFormik = useFormik({
    initialValues: {
      resetCode: "",
    },
    onSubmit: resetVerifyCode,
  });

  const resetPassFormik = useFormik({
    initialValues: {
      email: "",
      newPassword: "",
    },
    onSubmit: resetPassword,
    validationSchema: validationForm,
  });

  return (
    <>
      <div className="my-6 mx-auto max-w-2xl">
        {/*content*/}
        <div className=" flex flex-col gap-5  w-full  p-5">
          {/*header*/}
          <div className="flex flex-col items-center justify-center pb-6 ">
            <Lottie animationData={forgotPass} className="w-32" />
            <h3 className=" text-2xl font-semibold  py-1 px-3 rounded-md">
              Forgot Password ?
            </h3>
          </div>
          {/*body*/}

          {codeSended === "success" ? (
            codeSended === "success" && verifyCode === "Success" ? (
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
                  {errorMes ? (
                    <span className="input-error">* {errorMes}</span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="">
                  <input
                    type="password"
                    aria-autocomplete="off"
                    placeholder="New Password"
                    className="form-control w-full"
                    name="newPassword"
                    onChange={resetPassFormik.handleChange}
                    onBlur={resetPassFormik.handleBlur}
                    value={resetPassFormik.values.newPassword}
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
                <button type="submit" className="btn">
                  Reset Password
                </button>
              </form>
            ) : (
              <>
                {/*header*/}
                <div className="flex flex-col items-center justify-center pb-6 ">
                  <Lottie animationData={codeVerify} className="w-32" />
                  <h3 className=" text-2xl font-semibold  py-1 px-3 rounded-md">
                    Forgot Password ?
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
                    {verifyCodeFormik.errors.resetCode &&
                    verifyCodeFormik.touched.resetCode ? (
                      <span className="input-error">
                        * {verifyCodeFormik.errors.resetCode}
                      </span>
                    ) : (
                      ""
                    )}
                    {errorMes ? (
                      <span className="input-error">* {errorMes}</span>
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
                {verifyCodeFormik.errors.email &&
                verifyCodeFormik.touched.email ? (
                  <span className="input-error">
                    * {verifyCodeFormik.errors.email}
                  </span>
                ) : (
                  ""
                )}
                {errorMes ? (
                  <span className="input-error">* {errorMes}</span>
                ) : (
                  ""
                )}
              </div>
              <button type="submit" className="btn">
                Send Code
              </button>
            </form>
          )}

          {/*footer*/}
          <div className="flex flex-col items-center justify-center gap-2 py-3 border-t border-solid border-blue-200 rounded-b">
            <p className="text-sm text-gray-500">Remember your password?</p>

            <Link to="/signIn">
              <button className="flex items-center gap-2" type="button">
                <FaArrowAltCircleLeft className="text-2xl text-purple-500" />
                Back to signIn
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

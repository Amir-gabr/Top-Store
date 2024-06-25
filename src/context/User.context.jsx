//
//
//

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { userContext } from "../context/createContext/CreateContext";
import { useNavigate } from "react-router-dom";

export default function UserContextProvider( {children} ) {
  //
  const [token, setToken] = useState(localStorage.getItem("token"));
  //
  const [errorMes, setErrorMes] = useState("");
  //
  const [userInfo, setUserInfo] = useState(localStorage.getItem("userName"));
  //
  const [codeSended, setCodeSended] = useState();
  //
  const [verifyCode, setVerifyCode] = useState();
  //
  const [succNewPass, setSuccNewPass] = useState();
  //
  const navigate = useNavigate();

  async function signUpData(values) {
    let id;
    //
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/auth/signup",
        method: "POST",
        data: values,
      };
      //
      id = toast.loading("Waiting . . .");
      const { data } = await axios.request(options);
      setUserInfo(data.user);
      toast.dismiss(id);
      toast.success("User is created successfully");

      setTimeout(() => {
        if (data.message === "success") {
          navigate("/signIn");
        }
      }, 2000);
    } catch (error) {
      toast.dismiss(id);
      toast.error(error.response.data.message);
      // setErrorMes(error.response.data.message)
    }
  }

  async function signInData(values) {
    let id;
    //
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/auth/signin",
        method: "POST",
        data: values,
      };
      //
      id = toast.loading("Waiting . . .");
      const { data } = await axios.request(options);
      toast.dismiss(id);
      toast.success("Sign in successfully");
      localStorage.setItem("userName", data.user.name);
      setUserInfo(data.user.name);
      setTimeout(() => {
        if (data.message === "success") {
          localStorage.setItem("token", data.token);
          setToken(data.token);
          navigate("/");
        }
      }, 2500);
    } catch (error) {
      toast.dismiss(id);
      toast.error(error.response.data.message);
      setErrorMes(error.response.data.message);
    }
  }

  function signOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    setToken(null);
    setUserInfo(null);
  }

  async function forgotPassword(values) {
    let id;
    //
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
        method: "POST",
        data: values,
      };
      //
      id = toast.loading("Waiting . . .");
      const { data } = await axios.request(options);
      setCodeSended(data.statusMsg);

      toast.dismiss(id);
      if (data.statusMsg === "success") {
        toast.success(data.message);
        localStorage.setItem("code stat", data.statusMsg);
      }
    } catch (error) {
      toast.dismiss(id);
      toast.error(error.response.data.message);
      setErrorMes(error.response.data.message);
    }
  }
  async function resetVerifyCode(values) {
    let id;
    //
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",
        method: "POST",
        data: values,
      };
      //
      id = toast.loading("Waiting . . .");
      const { data } = await axios.request(options);
      setVerifyCode(data.status);

      toast.dismiss(id);
      if (data.status === "Success") {
        toast.success("Code verify successfully");
        localStorage.setItem("code verify", data.status);
      }
    } catch (error) {
      toast.dismiss(id);
      toast.error(error.response.data.message);
      setErrorMes(error.response.data.message);
    }
  }

  async function resetPassword(values) {
    let id;
    //
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/auth/resetPassword",
        method: "PUT",
        data: values,
      };
      //
      id = toast.loading("Waiting . . .");
      const { data } = await axios.request(options);
      setSuccNewPass(data);
      //
      toast.dismiss(id);
      if (data.token ) {
        toast.success("Password Reset Successfully ");
        navigate("/signIn");
      }
      //
    } catch (error) {
      toast.dismiss(id);
      toast.error(error.response.data.message);
      setErrorMes(error.response.data.message);
    }
  }

  return (
    <userContext.Provider
      value={{
        token,
        userInfo,
        errorMes,
        codeSended,
        verifyCode,
        succNewPass,
        signUpData,
        signInData,
        signOut,
        forgotPassword,
        resetVerifyCode,
        resetPassword,
      }}
    >
      {children}
    </userContext.Provider>
  );
}

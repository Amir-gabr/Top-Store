//
//
//
import { useContext } from "react";
import { userContext } from "../context/createContext/CreateContext";
import ChangeUserModel from "../components/models/ChangeUserModel";
import ChangePassModel from "../components/models/ChangePassModel";
import PageTransition from "../components/PageTransition";

export default function MyAccount() {
  const { userInfo } = useContext(userContext);

  Object.keys(userInfo).forEach((key) => {
    return userInfo[key];
  });
  return (
    <>
      <PageTransition>
        <section className="min-h-[80vh] flex flex-col items-center gap-10 py-4">
          <div className="rounded-lg bg-purple-200 shadow-xl p-5 space-y-10">
            <h1 className="text-4xl text-purple-900 font-bold text-center">
              {" "}
              My Account
            </h1>
            <div className="flex flex-col gap-6">
              <div className="mx-auto text-center">
                <p className="text-2xl font-bold border bg-slate-200 py-2 px-4 rounded-lg mb-2">
                  Name:{" "}
                  <span className="font-semibold text-xl text-purple-500">
                    {userInfo?.name}
                  </span>
                </p>
                <p className="text-2xl font-bold border bg-slate-200 py-2 px-4 rounded-lg">
                  Email:{" "}
                  <span className="font-semibold text-xl text-purple-500">
                    {userInfo?.email}
                  </span>
                </p>
              </div>
              <div className="">
                <div className="flex items-center justify-between">
                  <ChangeUserModel />
                  <ChangePassModel />
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageTransition>
    </>
  );
}

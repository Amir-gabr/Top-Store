//
//
//

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import PageTransition from "../components/PageTransition";

export default function Categories() {
  const [categories, setCategories] = useState(null);
  async function getCategoriesData() {
    const options = {
      url: "https://ecommerce.routemisr.com/api/v1/categories",
      method: "GET",
    };
    const { data } = await axios.request(options);
    // console.log(data.data);
    setCategories(data.data);
  }

  useEffect(() => {
    getCategoriesData();
  }, []);
  return (
    <PageTransition>
      <section className="pb-8">
        <div className="flex justify-center items-center">
          <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
            <div className="flex flex-col justify-center items-center space-y-10">
              <div className="flex flex-col justify-center items-center space-y-2">
                <h1 className="text-2xl md:text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-white bg-purple-600 py-2 px-4 rounded-ss-3xl rounded-br-3xl">
                  Shop By Category
                </h1>
              </div>
              {categories ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 w-full">
                  {categories.map((category) => (
                    <div
                      key={category._id}
                      className="self-center relative group flex justify-center items-center h-full w-full"
                    >
                      <Link to={`/category/${category._id}`}>
                        <div className="w-72 h-[340px]">
                          <img
                            className="object-cover h-full w-full"
                            src={category.image}
                            alt="image..."
                          />
                        </div>
                        <h3 className="text-center left-[50%] -translate-x-1/2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-[54px] z-10 absolute text-base font-medium text-white py-3 w-36 bg-slate-800 bg-opacity-50">
                          {category.name}
                        </h3>
                        <div className="absolute opacity-0 left-[50%] -translate-x-1/2 group-hover:opacity-100 transition duration-500 bottom-[50px] py-7 z-0 px-20 w-36 bg-white bg-opacity-50" />
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <Loader />
              )}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

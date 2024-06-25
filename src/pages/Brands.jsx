//
//
//
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import PageTransition from "../components/PageTransition";

export default function Brands() {
  const [brands, setBrands] = useState(null);

  async function getBrandsData() {
    const options = {
      url: "https://ecommerce.routemisr.com/api/v1/brands",
      method: "GET",
    };
    const { data } = await axios.request(options);
    // console.log(data.data);
    setBrands(data.data);
  }

  useEffect(() => {
    getBrandsData();
  }, []);
  //
  return (
    <>
      <PageTransition>
        <section className="pb-8">
          <div className="flex flex-col justify-center items-center space-y-2 py-10">
            <h1 className="text-2xl md:text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-white bg-purple-600 py-2 px-4 rounded-ss-3xl rounded-br-3xl">
              Shop By Brands
            </h1>
          </div>
          {brands ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 py-8 gap-4">
              {brands.map((brand) => (
                <Link
                  key={brand._id}
                  to={`/brand/${brand._id}`}
                  className="shadow-lg"
                >
                  <div className="w-40">
                    <img src={brand.image} alt="" className="w-full h-full" />
                  </div>
                  {/* <h3 className="text-center">{brand.name}</h3> */}
                </Link>
              ))}
            </div>
          ) : (
            <Loader />
          )}
        </section>
      </PageTransition>
    </>
  );
}

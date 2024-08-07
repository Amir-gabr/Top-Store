//
//
//
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default function BrandsSlider() {
  const [brands, setBrands] = useState([]);

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

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          arrows: false,
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 900,
        settings: {
          dots: false,
          arrows: false,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          arrows: false,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          arrows: false,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          arrows: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
        },
      },
    ],
  };
  //
  return (
    <>
      <section className="">
        <h2 className="text-center py-1 mb-6 mx-auto text-2xl md:text-3xl font-bold border-b-[4px] border-purple-500 w-fit">
          Popular Brands
        </h2>
        <Slider {...settings}>
          {brands.map((brand) => (
            <div key={brand._id} className="shadow-lg w-full h-full p-4">
              <Link to={`/brand/${brand._id}`}>
                <div className="">
                  <img
                    src={brand.image}
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                {/* <h3 className="text-center">{brand.name}</h3> */}
              </Link>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
}

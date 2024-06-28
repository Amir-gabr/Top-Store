//
//

import Slider from "react-slick";
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";
import BannerText from "./BannerText";

export default function Banner() {
//
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
    nextArrow: false,
    prevArrow: false,
  };
  return (
    <div className="relative">
      <Slider {...settings} className="h-full">
        <div className="relative w-full h-[30vh] md:h-[70vh]">
          <img
            src={banner1}
            alt="photo"
            className="w-full h-full object-cover object-center"
          />
          <BannerText title={"Outware Picks"} />
        </div>
        <div className="relative w-full h-[30vh] md:h-[70vh]">
          <img
            src={banner2}
            alt="photo"
            className="w-full h-full object-cover object-center"
          />
          <BannerText title={"Seasonal Offers"} />
        </div>
        <div className="relative w-full h-[30vh] md:h-[70vh]">
          <img
            src={banner3}
            alt="photo"
            className="w-full h-full object-cover object-center"
          />
          <BannerText title={"Best for men"} />
        </div>
      </Slider>
      <div className="absolute z-10 h-40 w-full bg-gradient-to-t from-gray-100 to-transparent left-0 bottom-0" />
    </div>
  );
}




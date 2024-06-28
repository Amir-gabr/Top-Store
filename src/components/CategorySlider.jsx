//
//
//
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";




export default function CategorySlider() {
  const [categories, setCategories] = useState([]);

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
    <>
      <section className="category py-8">
        <h2 className="text-center py-1 mb-6 mx-auto text-2xl md:text-3xl font-bold border-b-[4px] border-purple-500 w-fit">
          Popular Categories
        </h2>
        <Swiper
          className="py-10"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          slidesPerView={2}
          // spaceBetween={10}

          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            900: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1220: {
              slidesPerView: 5,
            },
            1536: {
              slidesPerView: 6,
            },
          }}
        >
          {categories.map((category) => (
            <SwiperSlide key={category._id}>
              <Link to={`/category/${category._id}`}>
                <div className="h-72">
                  <img
                    src={category.image}
                    alt=""
                    className="w-full h-full object-cover "
                  />
                </div>
                <h3 className="text-center">{category.name}</h3>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}

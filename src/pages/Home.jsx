//
//
//

import CategorySlider from "../components/sliders/CategorySlider";
import ProductsSlider from "../components/sliders/ProductsSlider";
import PageTransition from "../components/PageTransition";
import BrandsSlider from "../components/sliders/BrandsSlider";
import Banner from "../components/banners/Banner";
export default function Home() {
  return (
    <>
      <PageTransition>
        <section className="">
          <Banner />
          <CategorySlider />
          <ProductsSlider />
          <BrandsSlider />
        </section>
      </PageTransition>
    </>
  );
}

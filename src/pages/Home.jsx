//
//
//

import CategorySlider from "../components/CategorySlider";
import ProductsSlider from "../components/ProductsSlider";
import PageTransition from "../components/PageTransition";
import BrandsSlider from "../components/BrandsSlider";
import Banner from "../components/Banner";
export default function Home() {
  return (
    <>
      <PageTransition>
        <section className="">
          <Banner/>
          <CategorySlider />
          <ProductsSlider />
          <BrandsSlider />
        </section>
      </PageTransition>
    </>
  );
}

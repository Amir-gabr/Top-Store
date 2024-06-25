//
//
//

import Lottie from "lottie-react";
import notFoundAnimation from "../assets/animation/not found.json"
// import unfounded from "../assets/images/error.svg";
import PageTransition from "../components/PageTransition";

export default function Unfounded() {
  return (
    <>
      <PageTransition>
        <section className="w-full py-10">
          <Lottie className="mx-auto w-80" animationData={notFoundAnimation} />
        </section>
      </PageTransition>
    </>
  );
}

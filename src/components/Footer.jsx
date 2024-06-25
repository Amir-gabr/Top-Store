//
//
//
//
import amazonpayment from "../assets/images/amazon-pay.png";
import americanpayment from "../assets/images/american-express-color.png";
import mastercard from "../assets/images/mastercard.webp";
import slidImage1 from "../assets/images/blog-img-2.jpeg";
import paypal from "../assets/images/paypal.png";

export default function Footer() {
  return (
    <>
      <footer className="bg-slate-100 border-t-2">
        <div className="container py-8">
          <div className="2xl:mx-auto 2xl:container mx-4">
            <div className="w-full h-80 relative flex items-center justify-center">
              <img
                src={slidImage1}
                alt=""
                className="w-full h-full absolute z-0 "
              />
              <div className="bg-gray-600 bg-opacity-80 md:my-10 lg:py-8 py-6 w-full h-full md:h-5/6  md:mx-16 md:px-8 px-4 flex flex-col items-center justify-center relative z-40">
                <h1 className="text-2xl md:text-3xl font-semibold leading-9 text-white text-center">
                  Don’t miss out!
                </h1>
                <p className=" text-sm md:text-base leading-normal text-center text-white mt-4">
                  Subscribe to your newsletter to stay in the loop. Our
                  newsletter is sent once in <br />a week on every friday so
                  subscribe to get latest news and updates.
                </p>
                <div className="sm:border border-white flex-col sm:flex-row  flex items-center lg:w-8/12 w-full mt-8 space-y-4 sm:space-y-0">
                  <input
                    className="border border-white sm:border-transparent text-base w-full font-medium leading-none text-white p-4 focus:outline-none bg-transparent placeholder-white"
                    placeholder="Email Address"
                  />
                  <button className="focus:outline-none focus:ring-offset-2 focus:ring border border-white sm:border-transparent w-full sm:w-auto bg-white py-4 px-6 hover:bg-opacity-75">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-1 md:gap-4 mt-4 items-center justify-between border-t-2">
            <div className="flex gap-4 mt-6 items-center">
              <p className="text-xl">Payment Partners</p>
              <div className="flex items-center gap-4">
                <img src={amazonpayment} alt="image..." className="w-16" />
                <img src={americanpayment} alt="image..." className="w-16" />
                <img src={mastercard} alt="image..." className="w-16" />
                <img src={paypal} alt="image..." className="w-16" />
              </div>
            </div>
            <div className="flex gap-4 md:mt-6 items-center">
              <p className="text-center py-3 text-gray-500">
                &copy; 2024. Amir. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

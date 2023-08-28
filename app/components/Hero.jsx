import styles from "../styles";
import FindOutMore from "./FindOutMore";

export default function Hero() {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col mb-5 ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col md:pr-0 md:pl-7 px-5 `}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">We Specialise In Manufacturing </span>
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]  ">
            Quality Custom <br className=" sm:block hidden" />{" "}
            <span className="text-gradient">Stainless Steel</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <FindOutMore />
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Exhaust Systems
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts can use the latest CNC mandrel bending technology
          in addition to pressure bending and traditional mandrel bending
          options to manufacture a custom exhaust system that deliver unmatched
          durability.
        </p>
      </div>
      <div
        className={`flex-1 flex  md:my-0  relative`}
      >
        <img
          src="/jag-2.png
        "
          alt="Hero-car"
          className="m min-w-full object-contain mt-20 w-[100%] h-[100%] relative z-[5] "
        />
        {/* gradient start */}
        <div className="absolute z-[0] w-[70%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[100%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[100%] h-[20%] right-20 bottom-20 green__gradient" />
        {/* gradient end */}
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <FindOutMore />
      </div>
    </section>
  );
}

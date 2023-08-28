import styles from "../styles";

export default function Stats() {
  return (
    <section className="w-full flex md:flex-row px-1 md:px-5 mb-2 py-5 justify-around ">
      <div className=" flex justify-center">
        <div className="flex items-center ">
          <h1 className=" mr:0 md:mr-3 text-center font-poppins font-semibold xs:text-[12px] md:text-[30px] text-gradient xs:leading-[53.16px] leading-[43.16px] text-white">
            Facebook
          </h1>
          <img
            src="/rating.png"
            alt="rating"
            className="w-[100px] md:w-[150px] ml-3 "
          />
        </div>
      </div>

      <div className=" flex justify-center">
        <div className="flex  items-center ">
          <h1 className="md:mr-3 text-center font-poppins font-semibold xs:text-[12px] md:text-[30px] text-gradient xs:leading-[53.16px] leading-[43.16px] text-white">
            Google
          </h1>
          <div>
            <img
              src="/rating.png"
              alt="rating"
              className="w-[100px] md:w-[150px] ml-3 "
            />
          </div>
        </div>
      </div>
      <div className=" flex justify-center">
        <div className="flex  items-center ">
          <h1 className="md:mr-3 text-center font-poppins font-semibold xs:text-[12px] text-gradient md:text-[30px] xs:leading-[53.16px] leading-[43.16px] text-white">
            Trust Pilot
          </h1>
          <div>
            <img
              src="/rating.png"
              alt="rating"
              className="w-[100px] md:w-[150px] ml-3 "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

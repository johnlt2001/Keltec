import styles from "../styles";

export default function FindOutMore() {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] mt-8 rounded-full bg-green-600 p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-black-gradient w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient">Find Out</span>
          </p>
          <img
            src="/arrow-up.svg"
            alt="arrow-up"
            className="w-[23px] h-[23px] object-contain"
          />
        </div>

        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">More!</span>
        </p>
      </div>
    </div>
  );
}

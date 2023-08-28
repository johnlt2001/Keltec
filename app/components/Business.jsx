import { features } from "../constants";
import styles, { layout } from "../styles";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px]  ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card `}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className="flex md:flex-row flex-col mb-8 mx-10 ">
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Why Wouldn't You Want <br className="sm:block hidden" /> A Keltec Performance Exhaust System?
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With many years of experience Keltec Performance is one of the
        pioneering performance exhaust manufactures serving the UK from our
        west Yorkshire factory. We provide the consumer
        with unrivalled customer service. We make sure all the products we
        manufacture are of exemplary quality.
      </p>

      <Button styles={`mt-10`} text={"Get Started"} />
    </div>

    <div className={`${layout.sectionImg} flex-col lg:pt-10`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;

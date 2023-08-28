import styles from "../styles";
import Button from "./Button";

const CTA = () => (
  <section
    className={`flex flex-col md:flex-row-reverse ${styles.marginY} ${styles.padding} bg-black-gradient-2 rounded-[20px] box-shadow m-10`}
  >
    <div className="flex-1 flex flex-col">
      <div className="flex flex-col p-4">
        <h2 className={`${styles.heading2} text-center sm:text-left`}>
          What Are You Waiting For!
        </h2>
        <p
          className={`${styles.paragraph} text-center sm:text-left max-w-[470px] mt-5`}
        >
          Contact us to get a free quote and see how we can help you.
        </p>
      </div>

      <div className="mt-4 p-4 text-center md:text-left">
        <Button text="Contact Us" />
      </div>
    </div>

    <div className="mt-4 md:mt-0 md:ml-4 md:pl-4 w-full md:w-1/2">
      <img
        src="/custom-exhaust-system.jpeg"
        alt="Custom Exhaust System"
        className="w-full object-cover"
      />
    </div>
  </section>
);

export default CTA;

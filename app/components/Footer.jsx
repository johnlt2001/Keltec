import styles from "../styles";

import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section
    className={`${styles.flexCenter} ${styles.paddingY} flex-col p-4 border-t-[1px] border-t-[#3F3E45]`}
  >
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src="/Logo_Keltec-1400x368-green-600.png"
          alt="hoobank"
          className="w-[266px] h-[72.14px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          Quality Custom Stainless Steel Exhausts in Leeds, West Yorkshire.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-around flex-wrap md:mt-0 mt-10 p-8">
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <div className="w-full text-center">
        <p className="font-poppins font-normal text-[16px] leading-[27px] text-gray-500">
          Copyright Ⓒ 2023 Keltec Performance. All Rights Reserved.
        </p>
      </div>
      <div className="flex flex-row md:mt-0 mt-6 mr-4">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
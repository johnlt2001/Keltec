const platforms = ["Facebook", "Google", "Trust Pilot"];

export default function Stats() {
  return (
    <section className="w-full flex flex-wrap px-1 md:px-5 mb-2 py-5 justify-around">
      {platforms.map((platform) => (
        <div
          key={platform}
          className="flex justify-center w-full xs:w-auto mb-4 xs:mb-0"
        >
          <div className="flex flex-col xs:flex-row items-center justify-center w-full">
            <h1 className="text-center font-poppins font-semibold text-lg xs:text-[20px] md:text-[30px] text-gradient leading-[53.16px] md:leading-[43.16px] text-white mb-2 xs:mb-0 xs:mr-3">
              {platform}
            </h1>
            <img
              src="/rating.png"
              alt="rating"
              className="w-[100px] xs:w-[125px] md:w-[150px]"
            />
          </div>
        </div>
      ))}
    </section>
  );
}

import RecommendedHolidaysCard from "./RecommendedHolidaysCard";

const RecommendedHolidaysContainer = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-center gap-[1.12rem] text-left text-[1.4rem] text-darkslategray-300 font-components-button-large">
      <div className="self-stretch flex flex-row items-center justify-start">
        <b className="flex-1 relative tracking-[0.04em] capitalize sm:text-[1.38rem]">
          Recommended Holidays
        </b>
        <a
          className="[text-decoration:none] rounded-[23.17px] bg-primary-contrast w-[9.34rem] flex flex-row items-start justify-start gap-[0.47rem] text-right text-[0.84rem] text-cornflowerblue-300 md:hidden"
          href="#"
        >
          <div className="relative tracking-[0.04em] font-medium inline-block w-[7.75rem] shrink-0">
            View all holidays
          </div>
          <img
            className="relative w-[1.12rem] h-[1.12rem] overflow-hidden shrink-0"
            alt=""
            src="/arrowright2.svg"
          />
        </a>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start ml-[-1rem] mr-[-1rem] md:ml-[-1rem] md:mr-[-1rem] md:flex-wrap">
        <RecommendedHolidaysCard
          imageDimensions="/unsplash5mv818tzxeo@2x.png"
          locationName="Bali"
          packageDuration="4D3N"
          price="$899"
        />
        <RecommendedHolidaysCard
          imageDimensions="/unsplashj82dskoxvy8@2x.png"
          locationName="Switzerland"
          packageDuration="6D5N"
          price="$900"
          propWidth="3.5rem"
        />
        <RecommendedHolidaysCard
          imageDimensions="/unsplash4ezkckxolre@2x.png"
          locationName="Boracay"
          packageDuration="5D4N"
          price="$699"
          propWidth="3.36rem"
        />
        <RecommendedHolidaysCard
          imageDimensions="/unsplashuyqmxhjr3ne@2x.png"
          locationName="Palawan"
          packageDuration="4D3N"
          price="$789"
          propWidth="3.27rem"
        />
      </div>
      <div className="rounded-[23.17px] bg-primary-contrast w-[9.34rem] hidden flex-row items-start justify-start gap-[0.47rem] text-right text-[0.84rem] text-cornflowerblue-300 md:flex md:[mrgin-top:16px]">
        <div className="relative tracking-[0.04em] font-medium inline-block w-[7.75rem] shrink-0 md:w-auto">
          View all holidays
        </div>
        <img
          className="relative w-[1.12rem] h-[1.12rem] overflow-hidden shrink-0"
          alt=""
          src="/arrowright3.svg"
        />
      </div>
    </div>
  );
};

export default RecommendedHolidaysContainer;

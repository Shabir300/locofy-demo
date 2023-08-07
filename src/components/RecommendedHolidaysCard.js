import { useMemo } from "react";

const RecommendedHolidaysCard = ({
  imageDimensions,
  locationName,
  packageDuration,
  price,
  propWidth,
}) => {
  const div1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <button className="cursor-pointer [border:none] py-[0rem] px-[0.75rem] bg-[transparent] flex-1 flex flex-col box-border items-center justify-start w-3/12 md:w-6/12 md:mb-[2rem] sm:w-full sm:mb-[2rem]">
      <img
        className="self-stretch relative rounded-t-[7.48px] rounded-b-none max-w-full overflow-hidden h-[11.31rem] shrink-0 object-cover"
        alt=""
        src={imageDimensions}
      />
      <div className="self-stretch rounded-t-none rounded-b-[7.48px] bg-primary-contrast flex flex-col py-[0.93rem] px-[0.75rem] items-center justify-center border-[0.7px] border-solid border-whitesmoke">
        <div className="self-stretch flex flex-row items-center justify-start">
          <div className="flex-1 flex flex-col items-start justify-start gap-[0.14rem]">
            <div className="self-stretch relative text-[0.93rem] tracking-[0.02em] font-medium font-components-button-large text-darkslategray-200 text-left">
              {locationName}
            </div>
            <div className="self-stretch relative text-[0.75rem] tracking-[0.02em] font-components-button-large text-darkgray text-left">
              {packageDuration}
            </div>
          </div>
          <div
            className="relative text-[1.5rem] leading-[1.59rem] font-baloo-bhai text-cornflowerblue-200 text-right inline-block w-[3.36rem] h-[1.59rem] shrink-0"
            style={div1Style}
          >
            {price}
          </div>
        </div>
      </div>
    </button>
  );
};

export default RecommendedHolidaysCard;

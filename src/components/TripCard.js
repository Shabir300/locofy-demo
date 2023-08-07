import { useMemo } from "react";

const TripCard = ({
  destinationPrice,
  destinationPriceRange,
  propBackgroundImage,
  propWidth,
  propWidth1,
  propLeft,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const frameDiv1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const divStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const fromStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <button className="cursor-pointer [border:none] py-[0rem] px-[0.75rem] bg-[transparent] w-3/12 flex flex-col box-border items-center justify-center md:p-[1rem] md:box-border md:w-6/12 sm:w-full">
      <div
        className="w-[13.46rem] h-[8.5rem] overflow-hidden shrink-0 flex flex-col items-center justify-start bg-[url(/public/frame-696@3x.png)] bg-cover bg-no-repeat bg-[top]"
        style={frameDivStyle}
      >
        <div className="w-[13.43rem] flex flex-row py-[0.37rem] px-[0.56rem] box-border items-start justify-start">
          <b className="flex-1 relative text-[0.93rem] tracking-[0.02em] font-components-button-large text-primary-contrast text-left">
            {destinationPrice}
          </b>
          <div
            className="w-[4.25rem] h-[2.76rem] flex flex-col py-[0rem] px-[0rem] box-border items-end justify-start gap-[0.06rem]"
            style={frameDiv1Style}
          >
            <div
              className="relative text-[0.75rem] tracking-[0.04em] uppercase font-components-button-large text-primary-contrast text-right inline-block w-[2.45rem] h-[0.89rem] shrink-0"
              style={fromStyle}
            >
              from
            </div>
            <div
              className="relative text-[1.78rem] leading-[1.78rem] font-baloo-bhai text-primary-contrast text-right inline-block w-[4.25rem] h-[1.78rem] shrink-0"
              style={divStyle}
            >
              {destinationPriceRange}
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default TripCard;

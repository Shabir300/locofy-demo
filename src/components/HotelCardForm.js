import { useMemo } from "react";

const HotelCardForm = ({
  roomDimensions,
  accommodationType,
  accommodationName,
  pricePerNight,
  reviewCount,
  rating,
  imageDimensions,
  propWidth,
  propWidth1,
  propRight,
}) => {
  const reviewsStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const vectorIconStyle = useMemo(() => {
    return {
      width: propWidth1,
      right: propRight,
    };
  }, [propWidth1, propRight]);

  return (
    <div className="self-stretch flex-1 flex flex-row py-[0rem] px-[0.56rem] box-border items-start justify-center w-3/12 text-left text-[0.75rem] text-darkslategray-300 font-components-button-large md:w-[33.33%] sm:w-full sm:flex-[unset] sm:self-stretch">
      <a
        className="[text-decoration:none] self-stretch flex-1 rounded-[7.48px] bg-primary-contrast box-border flex flex-col py-[0.7rem] px-[0.61rem] items-start justify-start gap-[1.07rem] w-3/12 text-[inherit] border-[0.7px] border-solid border-whitesmoke hover:bg-gainsboro-200 lg:w-[25%!important] md:w-full sm:w-[100%!important] sm:mb-[1.25rem]"
        href="#"
      >
        <img
          className="self-stretch relative rounded-[7.48px] max-w-full overflow-hidden h-[9.34rem] shrink-0 object-cover"
          alt=""
          src={roomDimensions}
        />
        <div className="self-stretch flex-1 flex flex-row items-start justify-start">
          <div className="flex-1 flex flex-col items-start justify-start gap-[0.28rem]">
            <div className="self-stretch relative tracking-[0.02em] text-gray-100">
              {accommodationType}
            </div>
            <b className="self-stretch relative text-[1.03rem] tracking-[0.04em] capitalize sm:text-[1.25rem]">
              {accommodationName}
            </b>
            <div className="self-stretch relative text-[0.84rem] tracking-[0.04em]">
              {pricePerNight}
            </div>
          </div>
        </div>
        <div className="relative w-[12.62rem] h-[0.89rem] text-cornflowerblue-200">
          <div
            className="absolute top-[0rem] left-[2.51rem] tracking-[0.04em] inline-block w-[10.11rem] h-[0.89rem]"
            style={reviewsStyle}
          >
            {reviewCount}
          </div>
          <div className="absolute top-[0rem] left-[0rem] w-[2.07rem] h-[0.89rem] text-darkslategray-300">
            <div className="absolute top-[0rem] left-[0.95rem] tracking-[0.04em] font-medium inline-block w-[1.12rem] h-[0.89rem]">
              {rating}
            </div>
            <img
              className="absolute h-[90.47%] w-[37.54%] top-[0%] right-[62.46%] bottom-[9.53%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src={imageDimensions}
              style={vectorIconStyle}
            />
          </div>
        </div>
        <button className="cursor-pointer p-0 bg-[transparent] self-stretch rounded-[2.99px] box-border h-[2.15rem] overflow-hidden shrink-0 flex flex-col items-center justify-center border-[0.7px] border-solid border-lavender sm:w-[100%!important]">
          <div className="relative text-[0.7rem] tracking-[0.34px] leading-[1.22rem] uppercase font-medium font-components-button-large text-cornflowerblue-200 text-left inline-block w-[5.09rem] h-[1.22rem] shrink-0">
            More details
          </div>
        </button>
      </a>
    </div>
  );
};

export default HotelCardForm;
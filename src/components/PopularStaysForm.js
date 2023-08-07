import HotelCardForm1 from "./HotelCardForm1";
import HotelCardForm from "./HotelCardForm";

const PopularStaysForm = () => {
  return (
    <form className="self-stretch flex flex-col items-start justify-start gap-[0.93rem]">
      <div className="self-stretch flex flex-row items-center justify-center">
        <b className="relative text-[1.4rem] tracking-[0.04em] capitalize inline-block font-components-button-large text-darkslategray-300 text-left w-[51.64rem] h-[1.64rem] shrink-0 sm:text-[1.38rem]">
          Popular Stays
        </b>
        <a
          className="[text-decoration:none] rounded-[23.17px] bg-primary-contrast flex flex-row items-start justify-start gap-[0.47rem] md:hidden"
          href="#"
        >
          <div className="relative text-[0.84rem] tracking-[0.04em] font-medium font-components-button-large text-cornflowerblue-300 text-right inline-block w-[6.57rem] shrink-0">
            View all stays
          </div>
          <img
            className="relative w-[1.12rem] h-[1.12rem] overflow-hidden shrink-0"
            alt=""
            src="/arrowright4.svg"
          />
        </a>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start ml-[-0.75rem] mr-[-0.75rem] lg:pr-[2.5rem] lg:box-border lg:ml-[-0.75rem] lg:mr-[-3.12rem] md:mr-[-3.12rem] md:ml-[-0.75rem] sm:flex-col sm:pr-[0rem] sm:box-border sm:mr-[-0.75rem] sm:ml-[-0.75rem]">
        <HotelCardForm1
          imageDimensions="/unsplashrlwe8f8anoc@2x.png"
          accommodationType="Entire bungalow"
          accommodationName="Matterhorn Suites"
          pricePerNight="$575/night"
          roomDimensions="/video1.svg"
          reviewCount="(60 reviews)"
          rating="4.9"
          imageDimensions2="/vector4.svg"
        />
        <HotelCardForm
          roomDimensions="/unsplashtsn8bpopveo@2x.png"
          accommodationType="2-Story beachfront suite"
          accommodationName="Discovery Shores"
          pricePerNight="$360/night"
          reviewCount="(116 reviews)"
          rating="4.8"
          imageDimensions="/vector5.svg"
        />
        <HotelCardForm
          roomDimensions="/unsplashrlwe8f8anoc1@2x.png"
          accommodationType="Single deluxe hut"
          accommodationName="Arctic Hut "
          pricePerNight="$420/night"
          reviewCount="(78 reviews)"
          rating="4.7"
          imageDimensions="/vector6.svg"
          propWidth="10.1rem"
          propWidth1="37.58%"
          propRight="62.42%"
        />
        <HotelCardForm1
          imageDimensions="/unsplashyqrybvxug5q@2x.png"
          accommodationType="Deluxe King Room"
          accommodationName="Lake Louise Inn"
          pricePerNight="$244/night"
          roomDimensions="/video2.svg"
          reviewCount="(63 reviews)"
          rating="4.6"
          imageDimensions2="/vector7.svg"
        />
      </div>
      <div className="rounded-[23.17px] bg-primary-contrast hidden flex-row items-start justify-start gap-[0.47rem] md:flex md:mt-[1rem]">
        <div className="relative text-[0.84rem] tracking-[0.04em] font-medium font-components-button-large text-cornflowerblue-300 text-right inline-block w-[6.57rem] shrink-0 md:w-auto">
          View all stays
        </div>
        <img
          className="relative w-[1.12rem] h-[1.12rem] overflow-hidden shrink-0"
          alt=""
          src="/arrowright5.svg"
        />
      </div>
    </form>
  );
};

export default PopularStaysForm;

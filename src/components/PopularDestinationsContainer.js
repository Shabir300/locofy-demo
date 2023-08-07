import TripCard from "./TripCard";

const PopularDestinationsContainer = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[1.12rem] text-left text-[0.84rem] text-cornflowerblue-300 font-components-button-large">
      <div className="self-stretch flex flex-row items-center justify-start sm:flex-col sm:self-start">
        <div className="flex-1 flex flex-col items-start justify-start gap-[0.28rem] sm:flex-[unset] sm:self-stretch">
          <b className="self-stretch relative tracking-[0.04em] uppercase">
            Plan your next trip
          </b>
          <b className="self-stretch relative text-[1.4rem] tracking-[0.04em] capitalize text-darkslategray-300 sm:text-[1.38rem]">
            Most Popular Destinations
          </b>
        </div>
        <a
          className="[text-decoration:none] rounded-[23.17px] bg-primary-contrast w-[10.81rem] flex flex-row items-start justify-start gap-[0.47rem] text-right text-[inherit] md:hidden"
          href="#"
        >
          <div className="relative tracking-[0.04em] font-medium inline-block w-[9.22rem] shrink-0">
            View all destinations
          </div>
          <img
            className="relative w-[1.12rem] h-[1.12rem] overflow-hidden shrink-0"
            alt=""
            src="/arrowright.svg"
          />
        </a>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start ml-[-1rem] mr-[-1rem] md:ml-[-1rem] md:mr-[-1rem] md:flex-wrap md:mt-[-1rem] md:mb-[-1rem]">
        <TripCard destinationPrice="Paris" destinationPriceRange="$699" />
        <TripCard
          destinationPrice="Greece"
          destinationPriceRange="$1079"
          propBackgroundImage={`url("/frame-697@3x.png")`}
          propWidth="4.67rem"
          propWidth1="4.63rem"
          propLeft="unset"
        />
        <TripCard
          destinationPrice="Norway"
          destinationPriceRange="$895"
          propBackgroundImage={`url("/frame-698@3x.png")`}
          propWidth="4.25rem"
          propWidth1="4.25rem"
          propLeft="unset"
        />
        <TripCard
          destinationPrice="Tuscany"
          destinationPriceRange="$1245"
          propBackgroundImage={`url("/frame-699@3x.png")`}
          propWidth="4.7rem"
          propWidth1="4.7rem"
          propLeft="unset"
        />
      </div>
      <div className="rounded-[23.17px] bg-primary-contrast w-[10.81rem] hidden flex-row items-start justify-start gap-[0.47rem] text-right md:flex md:mt-[1rem]">
        <div className="relative tracking-[0.04em] font-medium inline-block w-[9.22rem] shrink-0 md:w-auto">
          View all destinations
        </div>
        <img
          className="relative w-[1.12rem] h-[1.12rem] overflow-hidden shrink-0"
          alt=""
          src="/arrowright1.svg"
        />
      </div>
    </div>
  );
};

export default PopularDestinationsContainer;

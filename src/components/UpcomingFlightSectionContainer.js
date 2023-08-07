const UpcomingFlightSectionContainer = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[0.93rem] text-left text-[0.84rem] text-darkslategray-300 font-components-button-large md:block">
      <b className="relative tracking-[0.04em] uppercase inline-block w-[59.25rem]">
        Upcoming Flight
      </b>
      <form className="self-stretch flex flex-row items-start justify-start gap-[1.68rem] md:flex-col">
        <a className="[text-decoration:none] rounded-[5.98px] flex flex-col p-[0.93rem] items-start justify-start gap-[0.98rem] border-[0.7px] border-solid border-whitesmoke lg:w-[32.5rem] md:w-full md:block md:mb-[1.88rem]">
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="w-[3.36rem] h-[2.15rem] flex flex-col items-start justify-start gap-[0.06rem]">
              <b className="relative text-[1.12rem] tracking-[0.04em] capitalize inline-block font-components-button-large text-cornflowerblue-300 text-left w-[2.09rem] h-[1.31rem] shrink-0">
                SIN
              </b>
              <div className="relative text-[0.65rem] tracking-[0.02em] capitalize font-components-button-large text-gray text-left inline-block w-[3.36rem] h-[0.75rem] shrink-0">
                Singapore
              </div>
            </div>
            <div className="w-[5.48rem] h-[2.06rem] flex flex-col items-center justify-start gap-[0.19rem]">
              <img
                className="relative w-[5.48rem] h-[1.12rem]"
                alt=""
                src="/group-17.svg"
              />
              <b className="relative text-[0.65rem] tracking-[0.02em] capitalize inline-block font-components-button-large text-gray text-left w-[3.07rem] h-[0.75rem] shrink-0">
                15H 55M
              </b>
            </div>
            <div className="w-[4.08rem] h-[2.15rem] flex flex-col py-[0rem] px-[0rem] box-border items-end justify-start gap-[0.06rem]">
              <b className="relative text-[1.12rem] tracking-[0.04em] capitalize inline-block font-components-button-large text-cornflowerblue-300 text-right w-[2.4rem] h-[1.31rem] shrink-0">
                LAX
              </b>
              <div className="relative text-[0.65rem] tracking-[0.02em] capitalize font-components-button-large text-gray text-right inline-block w-[4.08rem] h-[0.75rem] shrink-0">
                Los Angeles
              </div>
            </div>
          </div>
          <div className="self-stretch relative box-border h-[0.05rem] border-t-[0.7px] border-solid border-whitesmoke md:w-full" />
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="relative text-[0.65rem] tracking-[0.02em] capitalize font-components-button-large text-gray text-left inline-block w-[9.53rem] shrink-0">
              Departs on: 1 May, 08:00 AM
            </div>
            <div className="relative text-[0.65rem] tracking-[0.02em] text-gray text-right inline-block w-[4.08rem] shrink-0">
              <b className="font-components-button-large">4 days</b>
              <span className="font-components-button-large"> to go</span>
            </div>
          </div>
        </a>
        <div className="relative box-border w-[0.05rem] h-[6.82rem] border-r-[0.7px] border-solid border-whitesmoke md:hidden" />
        <div className="flex-1 flex flex-col items-start justify-start gap-[0.93rem] md:w-full md:flex-[unset] md:self-stretch">
          <div className="self-stretch relative text-[0.84rem] tracking-[0.04em] uppercase font-components-button-large text-lightgray text-left">
            Prepare for your trip
          </div>
          <div className="self-stretch flex flex-row items-start justify-between sm:flex-row sm:text-center sm:flex-wrap sm:justify-between sm:ml-[-1.75rem] sm:mr-[-1.75rem]">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[0.37rem] sm:pb-[1.25rem] sm:box-border sm:w-[33.33%] sm:text-center">
              <img
                className="relative w-[3.06rem] h-[3.06rem]"
                alt=""
                src="/group-21.svg"
              />
              <div className="relative text-[0.7rem] tracking-[0.04em] font-components-button-large text-gray text-left inline-block w-[1.82rem] h-[0.84rem] shrink-0">
                Hotel
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[0.37rem] sm:pb-[1.25rem] sm:box-border sm:w-[33.33%] sm:text-center">
              <img
                className="relative rounded-[11.96px] w-[3.06rem] h-[3.06rem]"
                alt=""
                src="/frame-21.svg"
              />
              <div className="relative text-[0.7rem] tracking-[0.04em] font-components-button-large text-gray text-center inline-block w-[3.74rem] h-[0.84rem] shrink-0">
                Attractions
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[0.37rem] sm:pb-[1.25rem] sm:box-border sm:w-[33.33%] sm:text-center">
              <img
                className="relative w-[3.06rem] h-[3.06rem]"
                alt=""
                src="/group-211.svg"
              />
              <div className="relative text-[0.7rem] tracking-[0.04em] font-components-button-large text-gray text-center inline-block w-[1.5rem] h-[0.84rem] shrink-0">
                Eats
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[0.37rem] sm:pb-[1.25rem] sm:box-border sm:w-[33.33%] sm:text-center">
              <button className="cursor-pointer [border:none] p-0 bg-gold relative rounded-[11.96px] w-[3.06rem] h-[3.06rem]">
                <img
                  className="absolute h-[48.43%] w-[41.17%] top-[26.51%] right-[29.42%] bottom-[25.06%] left-[29.42%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector2.svg"
                />
              </button>
              <div className="relative text-[0.7rem] tracking-[0.04em] font-components-button-large text-gray text-center inline-block w-[3.27rem] h-[0.84rem] shrink-0">
                Commute
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[0.37rem] sm:pb-[1.25rem] sm:box-border sm:w-[33.33%] sm:text-center">
              <button className="cursor-pointer [border:none] p-0 bg-cornflowerblue-100 relative rounded-[11.96px] w-[3.27rem] h-[3.06rem]">
                <img
                  className="absolute h-[40.15%] w-[40.52%] top-[29.63%] right-[29.74%] bottom-[30.22%] left-[29.74%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector3.svg"
                />
              </button>
              <div className="relative text-[0.7rem] tracking-[0.04em] font-components-button-large text-gray text-center inline-block w-[1.5rem]">
                Taxi
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[0.37rem] sm:pb-[1.25rem] sm:box-border sm:w-[33.33%] sm:text-center">
              <img
                className="relative rounded-[11.96px] w-[3.06rem] h-[3.06rem]"
                alt=""
                src="/frame-211.svg"
              />
              <div className="relative text-[0.7rem] tracking-[0.04em] font-components-button-large text-gray text-center inline-block w-[2.43rem] h-[0.84rem] shrink-0">
                Movies
              </div>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpcomingFlightSectionContainer;

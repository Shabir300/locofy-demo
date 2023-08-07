const Header = () => {
  return (
    <header className="self-stretch bg-primary-contrast h-[3.6rem] flex flex-row py-[1.03rem] px-[3.74rem] box-border items-center justify-center sticky w-full top-[0] [background:white] lg:pl-[2.5rem] lg:pr-[2.5rem] lg:box-border md:items-center md:justify-between md:pl-[1.5rem] md:pr-[1.5rem] md:box-border md:sticky md:w-full md:top-[0] md:[background:white] md:flex">
      <div className="flex-1 flex flex-row items-center justify-between md:flex-1 md:flex-row md:gap-[0rem] md:items-center md:justify-around md:pl-[0.63rem] md:pr-[0.63rem] md:box-border md:relative md:w-full md:top-[0] md:[background:white] md:flex sm:items-start sm:justify-around sm:relative sm:w-full sm:top-[0] sm:[background:white] sm:flex">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[8.13rem] h-[1.54rem] overflow-hidden shrink-0">
          <img
            className="absolute h-[96.97%] w-[99.82%] top-[1.59%] right-[0.18%] bottom-[1.44%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/combinedshape.svg"
          />
        </button>
        <div className="flex flex-row items-center justify-end gap-[1.68rem] sm:flex">
          <div className="flex flex-row items-center justify-end gap-[1.4rem] md:hidden">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-[0.65rem] font-components-button-large text-cornflowerblue-200 text-left inline-block w-[2.2rem] h-[0.75rem] shrink-0">
              Explore
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-[0.65rem] font-components-button-large text-darkslategray-200 text-left inline-block w-[2.01rem] h-[0.75rem] shrink-0">
              Search
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-[0.65rem] font-components-button-large text-darkslategray-200 text-left inline-block w-[1.92rem] h-[0.75rem] shrink-0">
              Hotels
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-[0.65rem] font-components-button-large text-darkslategray-200 text-left inline-block w-[1.82rem] h-[0.75rem] shrink-0">
              Offers
            </button>
          </div>
          <div className="flex flex-row items-center justify-center gap-[0.56rem]">
            <img
              className="relative w-[1.12rem] h-[1.12rem] overflow-hidden shrink-0 hidden md:flex"
              alt=""
              src="/notification.svg"
            />
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[1.12rem] h-[1.12rem] overflow-hidden shrink-0">
              <img
                className="absolute h-[81.01%] w-[82.78%] top-[4.93%] right-[8.75%] bottom-[14.06%] left-[8.47%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector.svg"
              />
              <img
                className="absolute h-[6.33%] w-[14.61%] top-[88.72%] right-[42.83%] bottom-[4.94%] left-[42.56%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector1.svg"
              />
              <div className="absolute h-[33.33%] w-[33.33%] top-[5.99%] right-[6.43%] bottom-[60.68%] left-[60.24%] rounded-[50%] bg-orange box-border border-[0.7px] border-solid border-primary-contrast" />
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] rounded-[28.41px] w-[1.68rem] h-[1.68rem] bg-[url(/public/top_avatar@2x.png)] bg-cover bg-no-repeat bg-[top]" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

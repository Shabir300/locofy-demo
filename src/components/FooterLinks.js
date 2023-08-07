const FooterLinks = () => {
  return (
    <footer className="self-stretch [background:linear-gradient(91.74deg,_#0b5ba8_25.38%,_#299bd8)] flex flex-row py-[1.54rem] px-[3.92rem] items-start justify-start gap-[2.06rem] text-left text-[0.84rem] text-primary-contrast font-components-button-large lg:p-[2.5rem] lg:box-border md:flex-col md:pt-[2.5rem] md:px-[1.5rem] md:pb-[1.88rem] md:box-border sm:py-[1.88rem] sm:px-[1.5rem] sm:box-border">
      <div className="flex-1 flex flex-col items-start justify-start gap-[0.65rem] mb-[40px!important] md:flex-[unset] md:self-stretch">
        <img
          className="relative w-[8.13rem] h-[1.54rem] overflow-hidden shrink-0"
          alt=""
          src="/logo.svg"
        />
        <div className="self-stretch relative leading-[1.26rem]">
          Fickle Flight is your one-stop travel portal. We offer hassle free
          flight and hotel bookings. We also have all your flight needs in you
          online shop.
        </div>
        <img
          className="relative w-[6.07rem] h-[1.4rem]"
          alt=""
          src="/social-icons.svg"
        />
      </div>
      <div className="relative box-border w-[0.05rem] h-[7.38rem] border-r-[0.7px] border-solid border-gray-400 md:hidden" />
      <div className="flex-1 flex flex-row items-start justify-between text-[0.75rem] md:flex-[unset] md:self-stretch sm:flex-col">
        <div className="relative w-[9.22rem] h-[7.46rem] sm:mb-[40px!important]">
          <a className="[text-decoration:none] absolute top-[2.23rem] left-[0rem] text-[inherit] inline-block w-[6.34rem] h-[0.89rem]">
            About Us
          </a>
          <div className="absolute top-[0rem] left-[0rem] text-[0.93rem] leading-[1.26rem] font-medium inline-block w-[8.16rem] h-[1.26rem]">
            Company
          </div>
          <div className="absolute top-[3.68rem] left-[0rem] inline-block w-[3.94rem] h-[0.89rem]">
            News
          </div>
          <div className="absolute top-[5.13rem] left-[0rem] inline-block w-[5.38rem] h-[0.89rem]">
            Careers
          </div>
          <div className="absolute top-[6.58rem] left-[0rem] inline-block w-[9.22rem] h-[0.89rem]">
            How we work
          </div>
        </div>
        <div className="relative w-[9.22rem] h-[7.46rem] sm:mb-[40px!important]">
          <div className="absolute top-[2.23rem] left-[0rem] inline-block w-[5.12rem] h-[0.89rem]">
            Account
          </div>
          <div className="absolute top-[0rem] left-[0rem] text-[0.93rem] leading-[1.26rem] font-medium inline-block w-[6.15rem] h-[1.26rem]">
            Support
          </div>
          <div className="absolute top-[3.68rem] left-[0rem] inline-block w-[9.22rem] h-[0.89rem]">
            Support Center
          </div>
          <div className="absolute top-[5.13rem] left-[0rem] inline-block w-[2.48rem] h-[0.89rem]">
            FAQ
          </div>
          <div className="absolute top-[6.58rem] left-[0rem] inline-block w-[7.68rem] h-[0.89rem]">
            Accessibility
          </div>
        </div>
        <div className="relative w-[9.22rem] h-[7.46rem]">
          <div className="absolute top-[2.23rem] left-[0rem] inline-block w-[8.08rem] h-[0.89rem]">
            Covid Advisory
          </div>
          <div className="absolute top-[0rem] left-[0rem] text-[0.93rem] leading-[1.26rem] font-medium inline-block w-[3.58rem] h-[1.26rem]">
            More
          </div>
          <div className="absolute top-[3.68rem] left-[0rem] inline-block w-[6.32rem] h-[0.89rem]">
            Airline Fees
          </div>
          <div className="absolute top-[5.13rem] left-[0rem] inline-block w-[2.36rem] h-[0.89rem]">
            Tips
          </div>
          <div className="absolute top-[6.58rem] left-[0rem] inline-block w-[9.22rem] h-[0.89rem]">
            Quarantine Rules
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterLinks;

import { useState } from "react";
import { Autocomplete, TextField, Icon, Button } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import PopularDestinationsContainer from "../components/PopularDestinationsContainer";
import RecommendedHolidaysContainer from "../components/RecommendedHolidaysContainer";
import PopularStaysForm from "../components/PopularStaysForm";
import VariantContainedSizeLarge from "../components/VariantContainedSizeLarge";
import FooterLinks from "../components/FooterLinks";

const CoverFrame = () => {
  const [dateFieldDateTimePickerValue, setDateFieldDateTimePickerValue] =
    useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="relative bg-primary-contrast w-full h-[60rem] overflow-hidden text-left text-[1.25rem] text-primary-contrast font-components-button-large">
        <div className="absolute top-[0rem] left-[0rem] bg-whitesmoke w-[120rem] h-[60rem]" />
        <img
          className="absolute top-[0rem] left-[18.62rem] w-[81.38rem] h-[60rem] object-cover"
          alt=""
          src="/group-16@2x.png"
        />
        <img
          className="absolute h-[7.2%] w-[22.92%] top-[44.34%] right-[3.36%] bottom-[48.46%] left-[73.72%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/weblogo-1.svg"
        />
        <div className="absolute top-[54.7rem] left-[73.33rem] text-skyblue">
          Made by Team Locofy
        </div>
        <div className="absolute top-[51.71rem] left-[73.33rem] text-[2.13rem] font-medium">
          Travel Website
        </div>
        <div className="absolute top-[4.38rem] left-[1.81rem] rounded-2xl bg-primary-contrast w-[69.44rem] h-[53.19rem] overflow-hidden flex flex-col items-center justify-start gap-[3.22rem] text-center text-[0.84rem] hover:[background:linear-gradient(#fff,_#fff),_#87550a] sm:w-full sm:hover:bg-orange">
          <div className="self-stretch flex flex-col items-center justify-start text-[2.85rem] font-baloo-bhai">
            <header className="self-stretch bg-primary-contrast h-[3.6rem] flex flex-row py-[1.03rem] px-[3.74rem] box-border items-center justify-center sticky w-full top-[0] [background:white] text-left text-[0.65rem] text-darkslategray-200 font-components-button-large lg:pl-[2.5rem] lg:pr-[2.5rem] lg:box-border md:pl-[1.5rem] md:pr-[1.5rem] md:box-border">
              <div className="flex-1 flex flex-row items-center justify-between">
                <img
                  className="relative w-[8.13rem] h-[1.54rem] overflow-hidden shrink-0"
                  alt=""
                  src="/fickleflight-logo.svg"
                />
                <div className="flex flex-row items-center justify-end gap-[1.68rem] sm:flex">
                  <div className="flex flex-row items-center justify-end gap-[1.4rem] md:hidden">
                    <div className="relative text-cornflowerblue-200 inline-block w-[2.2rem] h-[0.75rem] shrink-0">
                      Explore
                    </div>
                    <div className="relative inline-block w-[2.01rem] h-[0.75rem] shrink-0">
                      Search
                    </div>
                    <div className="relative inline-block w-[1.92rem] h-[0.75rem] shrink-0">
                      Hotels
                    </div>
                    <div className="relative inline-block w-[1.82rem] h-[0.75rem] shrink-0">
                      Offers
                    </div>
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
                    <img
                      className="rounded-[28.41px] w-[1.68rem] h-[1.68rem] object-cover"
                      alt=""
                      src="/top_avatar@2x.png"
                    />
                  </div>
                </div>
              </div>
            </header>
            <div className="self-stretch relative h-[36.25rem] bg-[url(/public/search-section@3x.png)] bg-cover bg-no-repeat bg-[top]">
              <div className="absolute top-[0rem] left-[0rem] w-full h-[27.19rem] flex flex-col py-[0rem] px-[6.54rem] box-border items-center justify-center gap-[1.25rem] md:pl-[1.88rem] md:pr-[1.88rem] md:box-border">
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.23rem]">
                  <div className="self-stretch relative leading-[3.13rem] sm:text-[2.63rem] sm:leading-[3rem]">{`Let’s explore & travel the world`}</div>
                  <div className="self-stretch relative text-[1.12rem] leading-[1.5rem] font-components-button-large">
                    Find the best destinations and the most popular stays!
                  </div>
                </div>
                <div className="rounded-[7.48px] bg-primary-contrast w-[fit] flex flex-row p-[0.93rem] box-border items-start justify-start h-[fit] text-left text-[0.56rem] text-gray-200 font-components-button-large md:flex-col">
                  <div className="flex-1 h-[0.06rem] flex flex-row items-start justify-start md:flex-col md:w-full md:flex-[unset] md:self-stretch sm:flex-col">
                    <div className="flex-1 flex flex-col p-[0.23rem] items-center justify-center md:flex-[unset] md:self-stretch sm:w-full sm:flex-[unset] sm:self-stretch">
                      <Autocomplete
                        className="self-stretch"
                        disablePortal
                        options={[
                          "Singapore (SIN)",
                          "Sydney (SYD)",
                          "Siem Reap (REP)",
                          "Shanghai (PVG)Sanya (SYX)",
                        ]}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            color="primary"
                            label="Departure"
                            variant="outlined"
                            placeholder=""
                            helperText=""
                          />
                        )}
                        defaultValue="Singapore -  Changi (SIN)"
                        size="medium"
                      />
                    </div>
                    <div className="flex-1 flex flex-col p-[0.23rem] items-center justify-center md:flex-[unset] md:self-stretch sm:w-full sm:flex-[unset] sm:self-stretch">
                      <div className="self-stretch h-[2.62rem] flex flex-col items-start justify-start">
                        <div className="self-stretch rounded-[2.99px] box-border h-[2.62rem] flex flex-col py-[0rem] px-[0.56rem] items-start justify-start border-[0.7px] border-solid border-gray-300">
                          <div className="bg-primary-contrast h-[0.09rem] flex flex-row py-[0rem] px-[0.19rem] box-border items-center justify-start">
                            <div className="relative tracking-[0.11px] leading-[0.56rem] flex items-center w-[1.64rem] h-[0.56rem] shrink-0">
                              Arrival
                            </div>
                          </div>
                          <div className="self-stretch overflow-hidden flex flex-row py-[0.7rem] px-[0rem] items-center justify-start gap-[0.37rem] text-center text-dimgray">
                            <div className="hidden flex-row items-start justify-start gap-[0.37rem]">
                              <div className="flex flex-col items-start justify-start">
                                <div className="rounded-[11.96px] bg-gainsboro-100 flex flex-row p-[0.19rem] items-center justify-start">
                                  <div className="rounded-[47.84px] bg-silver w-[1.12rem] h-[1.12rem] overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                                    <div className="self-stretch flex-1 relative tracking-[0.3px] leading-[166%] flex items-center justify-center">
                                      F
                                    </div>
                                  </div>
                                  <div className="flex flex-col py-[0.14rem] px-[0.28rem] items-start justify-start text-left text-[0.61rem] text-text-primary">
                                    <div className="relative tracking-[0.12px] leading-[0.84rem]">
                                      Chip
                                    </div>
                                  </div>
                                  <img
                                    className="relative w-[1.12rem] h-[1.12rem] overflow-hidden shrink-0"
                                    alt=""
                                    src="/cancel.svg"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start">
                                <div className="rounded-[11.96px] bg-gainsboro-100 flex flex-row p-[0.19rem] items-center justify-start">
                                  <div className="rounded-[47.84px] bg-silver w-[1.12rem] h-[1.12rem] overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                                    <div className="self-stretch flex-1 relative tracking-[0.3px] leading-[166%] flex items-center justify-center">
                                      F
                                    </div>
                                  </div>
                                  <div className="flex flex-col py-[0.14rem] px-[0.28rem] items-start justify-start text-left text-[0.61rem] text-text-primary">
                                    <div className="relative tracking-[0.12px] leading-[0.84rem]">
                                      Chip
                                    </div>
                                  </div>
                                  <img
                                    className="relative w-[1.12rem] h-[1.12rem] overflow-hidden shrink-0"
                                    alt=""
                                    src="/cancel1.svg"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex-1 relative text-[0.75rem] tracking-[0.11px] leading-[1.12rem] text-text-primary text-left">
                              Los Angeles (LA)
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col p-[0.23rem] items-center justify-center md:flex-[unset] md:self-stretch sm:w-full sm:flex-[unset] sm:self-stretch">
                      <div className="self-stretch">
                        <DatePicker
                          label="Date"
                          value={dateFieldDateTimePickerValue}
                          onChange={(newValue) => {
                            setDateFieldDateTimePickerValue(newValue);
                          }}
                          slotProps={{
                            textField: {
                              variant: "outlined",
                              size: "medium",
                              fullWidth: true,
                              color: "primary",
                            },
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col p-[0.23rem] items-center justify-center md:flex-row md:w-full md:text-left">
                    <Button
                      sx={{ width: 122.59650421142578 }}
                      variant="contained"
                      name="flightSearchBtn"
                      id="flight-search-btn"
                      color="primary"
                      startIcon={<Icon>search_sharp</Icon>}
                    >
                      Search Flight
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col py-[0rem] px-[3.74rem] box-border items-center justify-start gap-[3.74rem] max-w-[80rem] text-left text-darkslategray-300 md:pl-[1.88rem] md:pr-[1.88rem] md:box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.93rem] md:block">
              <b className="relative tracking-[0.04em] uppercase inline-block w-[59.25rem]">
                Upcoming Flight
              </b>
              <form className="self-stretch flex flex-row items-start justify-start gap-[1.68rem] md:flex-col">
                <div className="rounded-[5.98px] flex flex-col p-[0.93rem] items-start justify-start gap-[0.98rem] border-[0.7px] border-solid border-whitesmoke lg:w-[32.5rem] md:w-full md:block md:mb-[1.88rem]">
                  <div className="self-stretch flex flex-row items-center justify-between">
                    <div className="relative w-[3.36rem] h-[2.15rem]">
                      <b className="absolute top-[0rem] left-[0rem] text-[1.12rem] tracking-[0.04em] capitalize inline-block font-components-button-large text-cornflowerblue-300 text-left w-[2.09rem] h-[1.31rem]">
                        SIN
                      </b>
                      <div className="absolute top-[1.4rem] left-[0rem] text-[0.65rem] tracking-[0.02em] capitalize font-components-button-large text-gray-100 text-left inline-block w-[3.36rem] h-[0.75rem]">
                        Singapore
                      </div>
                    </div>
                    <div className="relative w-[5.48rem] h-[2.06rem]">
                      <b className="absolute top-[1.31rem] left-[1.11rem] text-[0.65rem] tracking-[0.02em] capitalize inline-block font-components-button-large text-gray-100 text-left w-[3.07rem] h-[0.75rem]">
                        15H 55M
                      </b>
                      <img
                        className="absolute top-[0rem] left-[0rem] w-[5.48rem] h-[1.12rem]"
                        alt=""
                        src="/group-17.svg"
                      />
                    </div>
                    <div className="relative w-[4.08rem] h-[2.15rem]">
                      <b className="absolute top-[0rem] left-[1.68rem] text-[1.12rem] tracking-[0.04em] capitalize inline-block font-components-button-large text-cornflowerblue-300 text-right w-[2.4rem] h-[1.31rem]">
                        LAX
                      </b>
                      <div className="absolute top-[1.4rem] left-[0rem] text-[0.65rem] tracking-[0.02em] capitalize font-components-button-large text-gray-100 text-right inline-block w-[4.08rem] h-[0.75rem]">
                        Los Angeles
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch relative box-border h-[0.05rem] border-t-[0.7px] border-solid border-whitesmoke md:w-full" />
                  <div className="self-stretch flex flex-row items-center justify-between">
                    <div className="relative text-[0.65rem] tracking-[0.02em] capitalize font-components-button-large text-gray-100 text-left inline-block w-[9.53rem] shrink-0">
                      Departs on: 1 May, 08:00 AM
                    </div>
                    <div className="relative text-[0.65rem] tracking-[0.02em] text-gray-100 text-right inline-block w-[4.08rem] shrink-0">
                      <b className="font-components-button-large">4 days</b>
                      <span className="font-components-button-large">
                        {" "}
                        to go
                      </span>
                    </div>
                  </div>
                </div>
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
                      <div className="relative text-[0.7rem] tracking-[0.04em] font-components-button-large text-gray-100 text-left inline-block w-[1.82rem] h-[0.84rem] shrink-0">
                        Hotel
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[0.37rem] sm:pb-[1.25rem] sm:box-border sm:w-[33.33%] sm:text-center">
                      <img
                        className="relative rounded-[11.96px] w-[3.06rem] h-[3.06rem]"
                        alt=""
                        src="/frame-21.svg"
                      />
                      <div className="relative text-[0.7rem] tracking-[0.04em] font-components-button-large text-gray-100 text-center inline-block w-[3.74rem] h-[0.84rem] shrink-0">
                        Attractions
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[0.37rem] sm:pb-[1.25rem] sm:box-border sm:w-[33.33%] sm:text-center">
                      <img
                        className="relative w-[3.06rem] h-[3.06rem]"
                        alt=""
                        src="/group-211.svg"
                      />
                      <div className="relative text-[0.7rem] tracking-[0.04em] font-components-button-large text-gray-100 text-center inline-block w-[1.5rem] h-[0.84rem] shrink-0">
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
                      <div className="relative text-[0.7rem] tracking-[0.04em] font-components-button-large text-gray-100 text-center inline-block w-[3.27rem] h-[0.84rem] shrink-0">
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
                      <div className="relative text-[0.7rem] tracking-[0.04em] font-components-button-large text-gray-100 text-center inline-block w-[1.5rem]">
                        Taxi
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[0.37rem] sm:pb-[1.25rem] sm:box-border sm:w-[33.33%] sm:text-center">
                      <img
                        className="relative rounded-[11.96px] w-[3.06rem] h-[3.06rem]"
                        alt=""
                        src="/frame-211.svg"
                      />
                      <div className="relative text-[0.7rem] tracking-[0.04em] font-components-button-large text-gray-100 text-center inline-block w-[2.43rem] h-[0.84rem] shrink-0">
                        Movies
                      </div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <PopularDestinationsContainer />
            <RecommendedHolidaysContainer />
            <PopularStaysForm />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-cornflowerblue-300">
            <div className="self-stretch relative h-[24.72rem] overflow-hidden shrink-0 bg-[url(/public/frame-708@3x.png)] bg-cover bg-no-repeat bg-[top]">
              <div className="[position:relative!important] top-[2.43rem] left-[auto!important] w-[25.65rem] flex flex-col p-[0.93rem] box-border items-center justify-start gap-[1.4rem] ml-[auto] mr-[auto] md:py-[1.5rem] md:px-[0rem] md:box-border sm:pl-[1.5rem] sm:pr-[1.5rem] sm:box-border sm:ml-[auto] sm:mr-[auto] sm:[position:relative!important] sm:left-[auto!important] sm:w-full">
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.33rem]">
                  <b className="self-stretch relative tracking-[0.04em] uppercase">
                    subscribe to our newsletter
                  </b>
                  <b className="self-stretch relative text-[1.4rem] text-darkslategray-100">
                    Get weekly updates
                  </b>
                </div>
                <form className="self-stretch rounded-[8.97px] bg-primary-contrast shadow-[0px_0px_17.94px_rgba(0,_0,_0,_0.03)] flex flex-col py-[1.31rem] px-[1.4rem] items-start justify-start gap-[0.79rem] border-[0.7px] border-solid border-whitesmoke">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch relative text-[0.84rem] leading-[1.59rem] font-components-button-large text-slategray text-left">
                      Fill in your details to join the party!
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[0.47rem]">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <TextField
                        className="[border:none] bg-[transparent] self-stretch"
                        color="primary"
                        variant="outlined"
                        type="text"
                        label="Your name"
                        size="medium"
                        margin="none"
                      />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <TextField
                        className="[border:none] bg-[transparent] self-stretch"
                        color="primary"
                        variant="outlined"
                        type="text"
                        label="Email address"
                        size="medium"
                        margin="none"
                      />
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] p-0 bg-orange rounded-[2.99px] w-[7.66rem] h-[2.62rem] overflow-hidden shrink-0 flex flex-col items-center justify-center hover:bg-saddlebrown sm:w-full sm:hover:bg-peru">
                    <VariantContainedSizeLarge
                      button="submit"
                      variantContainedSizeLargePosition="unset"
                      variantContainedSizeLargePadding="0.37rem 1.03rem"
                      variantContainedSizeLargeBoxSizing="border-box"
                      buttonFontSize="0.7rem"
                      buttonLineHeight="1.22rem"
                      buttonColor="#fff"
                      buttonDisplay="inline-block"
                    />
                  </button>
                </form>
              </div>
            </div>
            <FooterLinks />
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default CoverFrame;

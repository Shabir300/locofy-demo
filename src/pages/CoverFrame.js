import { useState } from "react";
import { Autocomplete, TextField, Icon, Button } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Header from "../components/Header";
import UpcomingFlightSectionContainer from "../components/UpcomingFlightSectionContainer";
import PopularDestinationsContainer from "../components/PopularDestinationsContainer";
import RecommendedHolidaysContainer from "../components/RecommendedHolidaysContainer";
import PopularStaysForm from "../components/PopularStaysForm";
import NewsletterContainer from "../components/NewsletterContainer";

const CoverFrame = () => {
  const [dateFieldDateTimePickerValue, setDateFieldDateTimePickerValue] =
    useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="relative bg-primary-contrast w-full overflow-hidden flex flex-col items-center justify-center text-center text-[2.85rem] text-primary-contrast font-baloo-bhai">
        <div className="rounded-2xl bg-primary-contrast w-[69.44rem] h-[53.19rem] overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[3.22rem] hover:[background:linear-gradient(#fff,_#fff),_#87550a] md:rounded-2xl sm:w-full sm:hover:bg-orange">
          <div className="self-stretch flex flex-col items-center justify-start">
            <Header />
            <div className="w-[69.44rem] h-[36.25rem] flex flex-col   bg-[url(/public/search-section@3x.png)] bg-cover bg-no-repeat bg-[top]">
              <div className="w-full h-[27.19rem] flex flex-col py-[0rem] px-[6.54rem] box-border items-center justify-center  md:pl-[1.88rem] md:pr-[1.88rem] md:box-border">
                <div className=" flex flex-col items-center justify-center gap-[0.23rem]">
                  <div className=" relative leading-[3.13rem] sm:text-[1.3rem] sm:leading-[3rem]">{`Let’s explore & travel the world`}</div>
                  <div className=" relative text-[1.12rem]  leading-[1.5rem] font-components-button-large">
                    Find the best destinations and the most popular stays!
                  </div>
                </div>
                <div className=" rounded-[10px] bg-primary-contrast h-fit flex flex-row justify-between py-[0.93rem] px-10 mt-3 box-border md:flex-col">
                  <div className="flex-1  flex flex-row items-start justify-start md:flex-col md:w-full sm:flex-col">
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
                      <Autocomplete
                        className="self-stretch"
                        disablePortal
                        options={[]}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            color="primary"
                            label="Arrival"
                            variant="outlined"
                            placeholder=""
                            helperText=""
                          />
                        )}
                        defaultValue="Los Angeles (LA)"
                        size="medium"
                      />
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
                  <div className="flex flex-col  items-center justify-center px-5 md:flex-row md:w-full md:text-left  sm:h-auto sm:w-full sm:text-left">
                    <Button
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
          <div className="w-full flex flex-col py-[0rem] px-[3.74rem] box-border items-center justify-start gap-[3.74rem] max-w-[80rem] md:pl-[1.88rem] md:pr-[1.88rem] md:box-border sm:gap-[0rem]">
            <UpcomingFlightSectionContainer />
            <PopularDestinationsContainer />
            <RecommendedHolidaysContainer />
            <PopularStaysForm />
          </div>
          <NewsletterContainer />
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default CoverFrame;

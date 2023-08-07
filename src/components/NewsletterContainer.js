import { TextField } from "@mui/material";
import VariantContainedSizeLarge from "./VariantContainedSizeLarge";

const NewsletterContainer = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start text-center text-[0.84rem] text-cornflowerblue-300 font-components-button-large">
      <div className="w-[69.44rem] h-[24.72rem] overflow-hidden shrink-0 flex flex-col py-[1.91rem] px-[20.81rem] box-border items-start justify-end bg-[url(/public/frame-708@3x.png)] bg-cover bg-no-repeat bg-[top]">
        <div className="w-[25.65rem] flex flex-col p-[0.93rem] box-border items-center justify-start gap-[1.4rem] ml-[auto] mr-[auto] [position:relative!important] left-[auto!important] md:py-[1.5rem] md:px-[0rem] md:box-border sm:pl-[1.5rem] sm:pr-[1.5rem] sm:box-border sm:ml-[auto] sm:mr-[auto] sm:[position:relative!important] sm:left-[auto!important] sm:w-full">
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
    </div>
  );
};

export default NewsletterContainer;

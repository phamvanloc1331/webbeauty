import { FunctionComponent, memo } from "react";
import { TextField } from "@mui/material";
import DiscountOfferContainer from "./discount-offer-container";
import FormContainer2 from "./form-container2";

const DiscountCard: FunctionComponent = memo(() => {
  return (
    <div className="absolute top-[6258px] left-[calc(50%_-_961px)] bg-aliceblue-100 w-[1920px] h-[930px] flex flex-col items-center justify-center text-left text-mini text-slategray font-manrope">
      <div className="w-[1199px] flex flex-row items-center justify-start gap-[115px]">
        <div className="w-[534px] flex flex-col items-start justify-start gap-[37px]">
          <div className="w-[534px] flex flex-col items-start justify-start gap-[14px]">
            <div className="w-[435px] flex flex-col items-start justify-start gap-[9px]">
              <div className="relative tracking-[0.1em] leading-[154.5%] uppercase font-semibold">{`Flat Discount `}</div>
              <b className="relative text-26xl tracking-[-0.01em] leading-[130%] inline-block font-playfair-display text-gray-200 w-[435px]">
                <p className="m-0">Claim upto 50% off er</p>
                <p className="m-0">on ‍the most popular services...</p>
              </b>
            </div>
            <div className="relative text-lg leading-[175%] text-dimgray inline-block w-[534px] h-[92px] shrink-0">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, buying to
              injected humour, or randomised words.
            </div>
          </div>
          <DiscountOfferContainer />
        </div>
        <div className="bg-white shadow-[0px_20px_40px_rgba(42,_68,_75,_0.13)] w-[550px] flex flex-row items-start justify-start py-[66px] px-[75px] box-border text-center text-sm text-white">
          <div className="w-[400px] flex flex-col items-center justify-start gap-[15px]">
            <FormContainer2 />
            <FormContainer2 />
            <FormContainer2 />
            <FormContainer2 />
            <TextField
              className="relative"
              color="primary"
              label="Any Note For Us"
              sx={{ width: 399 }}
              variant="standard"
              multiline
            />
            <div className="bg-slategray flex flex-row items-center justify-center py-[23px] px-[109px]">
              <div className="relative tracking-[0.12em] leading-[125%] uppercase font-extrabold">
                GET AN APPOINTMENT
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default DiscountCard;

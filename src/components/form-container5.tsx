import { FunctionComponent, memo } from "react";
import DiscountOfferContainer from "./discount-offer-container";

const FormContainer5: FunctionComponent = memo(() => {
  return (
    <div className="absolute top-[4294px] left-[calc(50%_-_960px)] bg-aliceblue-200 w-[1920px] h-[670px] flex flex-col items-center justify-center text-center text-mini text-slategray font-manrope">
      <div className="w-[654px] flex flex-col items-center justify-start gap-[37px]">
        <div className="w-[534px] flex flex-col items-center justify-start gap-[14px]">
          <div className="w-[435px] flex flex-col items-center justify-start gap-[9px]">
            <div className="relative tracking-[0.1em] leading-[154.5%] uppercase font-semibold">{`Flat Discount `}</div>
            <b className="relative text-26xl tracking-[-0.01em] leading-[130%] inline-block font-playfair-display text-gray-200 w-[626px]">
              <p className="m-0">Claim upto 50% offer</p>
              <p className="m-0">on the most popular services...</p>
            </b>
          </div>
          <div className="relative text-lg leading-[175%] text-dimgray inline-block w-[644px]">
            <p className="m-0">
              Our Retreat is not meant to be an occasional treat, but rather a
              part of your
            </p>
            <p className="m-0">
              routine that restores balance to your daily life.
            </p>
          </div>
        </div>
        <DiscountOfferContainer />
      </div>
    </div>
  );
});

export default FormContainer5;

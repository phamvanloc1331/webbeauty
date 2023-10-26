import { FunctionComponent, memo } from "react";

const DiscountOfferContainer: FunctionComponent = memo(() => {
  return (
    <div className="h-[145px] flex flex-row items-center justify-start text-left text-sm text-gray-200 font-manrope">
      <div className="bg-white flex flex-col items-start justify-start pt-[18px] px-10 pb-[19px] border-[1px] border-solid border-lightblue">
        <div className="w-52 flex flex-col items-start justify-start gap-[18px]">
          <div className="w-52 flex flex-row items-start justify-start gap-[19px]">
            <img
              className="relative w-[30px] h-[45px]"
              alt=""
              src="/pattern.svg"
            />
            <div className="relative leading-[150%] inline-block w-[159px] shrink-0">
              <p className="m-0 tracking-[0.08em] uppercase font-extrabold">
                MAIL US :
              </p>
              <p className="m-0 text-mini font-medium">info@beautyness.com</p>
            </div>
          </div>
          <div className="w-[185px] flex flex-row items-start justify-start gap-[19px]">
            <img
              className="relative w-[30px] h-[45px]"
              alt=""
              src="/pattern.svg"
            />
            <div className="relative leading-[150%] inline-block w-[136px] shrink-0">
              <p className="m-0 tracking-[0.08em] uppercase font-extrabold">
                CALL US :
              </p>
              <p className="m-0 text-mini font-medium">(+22) 123 4568 009</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-darkslategray-200 w-[167px] flex flex-row items-start justify-center py-3 px-[34px] box-border text-center text-mini text-white">
        <div className="w-[99px] flex flex-col items-center justify-start gap-[6px]">
          <div className="w-[99px] flex flex-row items-center justify-center gap-[6px]">
            <div className="relative box-border w-1.5 h-px border-t-[1px] border-solid border-white" />
            <div className="relative tracking-[0.1em] leading-[175%] uppercase font-extrabold">
              Get Flat
            </div>
            <div className="relative box-border w-1.5 h-px border-t-[1px] border-solid border-white" />
          </div>
          <div className="w-[97.6px] flex flex-col items-center justify-start gap-[8px] text-lg">
            <img
              className="relative w-[97.6px] h-[48.8px]"
              alt=""
              src="/50.svg"
            />
            <div className="relative tracking-[0.02em] leading-[175%] font-extrabold">
              Discount
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default DiscountOfferContainer;

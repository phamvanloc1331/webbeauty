import { FunctionComponent, memo } from "react";

const AttitudePersonalityContainer: FunctionComponent = memo(() => {
  return (
    <div className="absolute top-[1536px] left-[calc(50%_-_960px)] bg-aliceblue-200 shadow-[0px_37px_60px_rgba(0,_0,_0,_0.02)] w-[1920px] h-[884px] flex flex-col items-center justify-center text-left text-mini text-white font-manrope">
      <div className="w-[1200px] flex flex-row items-center justify-start">
        <img
          className="relative w-[547px] h-[610px] object-cover"
          alt=""
          src="/image5@2x.png"
        />
        <div className="bg-darkslategray-200 w-[653px] flex flex-col items-start justify-start py-[74px] px-[72px] box-border">
          <div className="w-[508px] flex flex-col items-start justify-start gap-[14px]">
            <div className="w-[460px] flex flex-col items-start justify-start gap-[9px]">
              <div className="relative tracking-[0.1em] leading-[154.5%] uppercase font-semibold">
                About Us
              </div>
              <b className="relative text-26xl tracking-[-0.01em] leading-[130%] inline-block font-playfair-display w-[460px]">{`Style is a Reflection of your Attitude & your Personality`}</b>
            </div>
            <div className="relative text-lg leading-[175%] inline-block w-[508px] h-[131px] shrink-0">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, buying to
              injected humour, or randomised words which don't look even many
              desktop publishing packages.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default AttitudePersonalityContainer;

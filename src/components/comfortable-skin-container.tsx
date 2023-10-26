import { FunctionComponent, memo } from "react";
import CardContainer from "./card-container";

const ComfortableSkinContainer: FunctionComponent = memo(() => {
  return (
    <div className="absolute top-[1840px] left-[calc(50%_-_961px)] bg-aliceblue-200 shadow-[0px_37px_60px_rgba(0,_0,_0,_0.02)] w-[1920px] h-[914px] flex flex-col items-center justify-center text-left text-mini text-slategray font-manrope">
      <div className="w-[1200px] h-[707px] flex flex-row items-center justify-start gap-[125px]">
        <div className="w-[529px] flex flex-col items-start justify-start gap-[37px]">
          <div className="w-[529px] flex flex-col items-start justify-start gap-[16px]">
            <div className="w-[435px] flex flex-col items-start justify-start gap-[9px]">
              <div className="relative tracking-[0.1em] leading-[154.5%] uppercase font-semibold">
                About Us
              </div>
              <b className="relative text-26xl tracking-[-0.01em] leading-[130%] inline-block font-playfair-display text-gray-200 w-[435px]">
                <p className="m-0">{`The Beauty is about `}</p>
                <p className="m-0">being Comfortable</p>
                <p className="m-0">in your own skin!</p>
              </b>
            </div>
            <div className="relative text-lg leading-[165%] text-dimgray inline-block w-[529px]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, buying to
              injected humour, or randomised words which don't look even many
              desktop publishing packages.
            </div>
          </div>
          <div className="w-[515px] flex flex-row items-start justify-start gap-[10px] text-center text-3xl text-gray-200 font-playfair-display">
            <div className="bg-white box-border w-[165px] flex flex-col items-center justify-start py-[21px] px-[11px] border-[1px] border-solid border-darkslategray-200">
              <div className="w-[143px] flex flex-col items-center justify-start gap-[14px]">
                <img
                  className="relative w-[48.5px] h-[72px]"
                  alt=""
                  src="/icon1.svg"
                />
                <b className="relative leading-[120%] inline-block w-[143px]">
                  Beauty Experts
                </b>
              </div>
            </div>
            <CardContainer
              dimensions="/icon2.svg"
              ratingPercentage="Great"
              serviceDescription="Services"
            />
            <CardContainer
              dimensions="/vector1.svg"
              ratingPercentage="100%"
              serviceDescription="Genuine"
              propPadding="17px 33px 19px"
              propHeight="unset"
              propWidth="65.3px"
              propHeight1="78px"
            />
          </div>
        </div>
        <img
          className="relative w-[586px] h-[674px] object-cover"
          alt=""
          src="/image12@2x.png"
        />
      </div>
    </div>
  );
});

export default ComfortableSkinContainer;

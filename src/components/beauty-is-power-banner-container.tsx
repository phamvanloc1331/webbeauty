import { FunctionComponent, memo } from "react";

const BeautyIsPowerBannerContainer: FunctionComponent = memo(() => {
  return (
    <div className="absolute top-[175px] left-[calc(50%_-_960px)] w-[1920px] h-[925px] flex flex-row items-center justify-end text-left text-mini text-slategray font-manrope">
      <div className="relative bg-aliceblue-200 w-[1920px] h-[925px]">
        <img
          className="absolute top-[0px] left-[1020px] w-[900px] h-[925px] object-cover"
          alt=""
          src="/background1@2x.png"
        />
        <div className="absolute top-[190px] left-[942px] bg-darkgray-100 shadow-[0px_20px_60px_rgba(47,_68,_73,_0.46)] w-[550px] h-[545px]" />
        <img
          className="absolute top-[190px] right-[428px] w-[550px] h-[545px] object-cover"
          alt=""
          src="/image@2x.png"
        />
        <div className="absolute top-[235px] left-[255px] w-[510px] h-[455px] flex flex-col items-start justify-start gap-[24px]">
          <div className="w-[510px] flex flex-col items-start justify-start gap-[7px]">
            <div className="w-[278px] h-[23px] flex flex-row items-center justify-start gap-[9px]">
              <img
                className="relative w-[22px] h-[20.9px]"
                alt=""
                src="/vector2.svg"
              />
              <div className="relative tracking-[0.1em] leading-[154.5%] uppercase font-semibold">
                Welcome to Beautyness!!!
              </div>
            </div>
            <b className="relative text-51xl tracking-[-0.01em] leading-[115%] inline-block font-playfair-display text-gray-200 w-[510px]">
              Beauty is power a smile is its sword.
            </b>
          </div>
          <div className="w-[508px] flex flex-col items-start justify-start gap-[34px] text-lgi text-dimgray">
            <div className="relative leading-[170%] inline-block w-[508px] h-[62px] shrink-0">
              There are many variation of passages are Ipsum available, majority
              have suffered alteration in some form.
            </div>
            <div className="bg-slategray flex flex-row items-center justify-center pt-[23px] px-9 pb-6 text-center text-sm text-white">
              <div className="relative tracking-[0.12em] leading-[125%] uppercase font-extrabold">
                Make a reservation
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default BeautyIsPowerBannerContainer;

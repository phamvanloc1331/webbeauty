import { FunctionComponent, memo } from "react";

type FormContainerType = {
  packageName?: string;
  packagePrice?: string;
  packageType?: string;
};

const FormContainer: FunctionComponent<FormContainerType> = memo(
  ({ packageName, packagePrice, packageType }) => {
    return (
      <div className="w-[584px] flex flex-row items-start justify-start text-left text-7xl text-white font-playfair-display">
        <div className="bg-darkslategray-200 w-[445px] flex flex-col items-start justify-start py-[39px] px-10 box-border">
          <div className="w-[365px] flex flex-col items-start justify-center">
            <div className="w-[274px] flex flex-col items-start justify-start gap-[27px]">
              <div className="w-[274px] flex flex-col items-start justify-start gap-[16px]">
                <b className="relative tracking-[-0.01em] leading-[130%]">
                  {packageName}
                </b>
                <div className="relative w-[274px] h-[200px] text-lg font-manrope">
                  <div className="absolute top-[0%] left-[17.88%] leading-[220%] font-medium">
                    <p className="m-0">Releases muscle tension</p>
                    <p className="m-0">Relieves lower back pain</p>
                    <p className="m-0">Heals sports injuries</p>
                    <p className="m-0">Increases mobility</p>
                    <p className="m-0">Increases muscle strength</p>
                  </div>
                  <img
                    className="absolute top-[169.5px] left-[0px] w-6 h-6 overflow-hidden"
                    alt=""
                    src="/checkcircle.svg"
                  />
                  <img
                    className="absolute top-[129.5px] left-[0px] w-6 h-6 overflow-hidden"
                    alt=""
                    src="/checkcircle.svg"
                  />
                  <img
                    className="absolute top-[89.5px] left-[0px] w-6 h-6 overflow-hidden"
                    alt=""
                    src="/checkcircle.svg"
                  />
                  <img
                    className="absolute top-[49.5px] left-[0px] w-6 h-6 overflow-hidden"
                    alt=""
                    src="/checkcircle.svg"
                  />
                  <img
                    className="absolute top-[8.5px] left-[0px] w-6 h-6 overflow-hidden"
                    alt=""
                    src="/checkcircle.svg"
                  />
                </div>
              </div>
              <div className="bg-lightslategray flex flex-row items-center justify-center pt-[23px] px-14 pb-6 text-center text-sm font-manrope">
                <div className="relative tracking-[0.12em] leading-[125%] uppercase font-extrabold">
                  SUBSCRIBE NOW
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-darkslategray-200 w-[139px] flex flex-row items-start justify-center text-center text-36xl font-manrope">
          <div className="w-[139px] flex flex-col items-center justify-start">
            <div className="bg-gray-100 w-[139px] flex flex-col items-center justify-start py-[25px] px-[19px] box-border">
              <div className="flex flex-col items-center justify-start">
                <div className="relative tracking-[-0.01em] leading-[130%] font-extrabold">
                  {packagePrice}
                </div>
                <div className="relative text-xl leading-[130%] font-playfair-display mt-[-7px]">
                  per month
                </div>
              </div>
            </div>
            <div className="w-[139px] h-[280px] flex flex-col items-end justify-end py-0 pr-0 pl-[86.99998474121094px] box-border text-left text-21xl">
              <div className="relative leading-[130%] uppercase font-extrabold [transform:_rotate(-90deg)] [transform-origin:0_0] opacity-[0.2]">
                {packageType}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default FormContainer;

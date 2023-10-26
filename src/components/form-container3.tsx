import { FunctionComponent, memo } from "react";

type FormContainer3Type = {
  dimensionCode?: string;
  dimensionCodeImageUrl?: string;
};

const FormContainer3: FunctionComponent<FormContainer3Type> = memo(
  ({ dimensionCode, dimensionCodeImageUrl }) => {
    return (
      <div className="w-[1200px] flex flex-row items-start justify-start gap-[36px] text-left text-lgi text-gray-200 font-manrope">
        <div className="w-[582px] flex flex-col items-start justify-start">
          <div className="bg-white w-[582px] flex flex-col items-start justify-start py-11 pr-11 pl-[49px] box-border">
            <div className="w-[485px] h-[146px] flex flex-col items-center justify-start">
              <div className="relative leading-[180%] inline-block w-[485px]">
                “ It is a long established fact that a reader will be tracked
                distracted by the readable content of a page is when looking at
                its layout. The point of using Lorem of distribution it look
                like readable English “
              </div>
            </div>
          </div>
          <div className="bg-darkslategray-200 w-[582px] h-[125px] flex flex-col items-center justify-end py-[25px] px-0 box-border text-xl text-white font-playfair-display">
            <div className="w-[480px] flex flex-row items-center justify-start gap-[178px]">
              <div className="w-[232px] flex flex-row items-center justify-start gap-[20px]">
                <img
                  className="relative w-[78px] h-[78px] object-cover"
                  alt=""
                  src="/image3@2x.png"
                />
                <div className="w-[138px] flex flex-col items-start justify-start">
                  <img
                    className="relative w-[81px] h-[16.2px]"
                    alt=""
                    src={dimensionCode}
                  />
                  <b className="relative tracking-[-0.01em] leading-[160%] inline-block mt-[-1px]">
                    James Williams
                  </b>
                  <div className="relative text-sm tracking-[0.03em] leading-[160%] font-semibold font-manrope mt-[-1px]">
                    United States
                  </div>
                </div>
              </div>
              <img
                className="relative w-[70px] h-[55.3px]"
                alt=""
                src="/icon.svg"
              />
            </div>
          </div>
        </div>
        <div className="w-[582px] flex flex-col items-start justify-start">
          <div className="bg-white w-[582px] flex flex-col items-start justify-start py-11 pr-11 pl-[49px] box-border">
            <div className="w-[485px] h-[146px] flex flex-col items-center justify-start">
              <div className="relative leading-[180%] inline-block w-[485px]">
                “ It is a long established fact that a reader will be tracked
                distracted by the readable content of a page is when looking at
                its layout. The point of using Lorem of distribution it look
                like readable English “
              </div>
            </div>
          </div>
          <div className="bg-darkslategray-200 w-[582px] h-[125px] flex flex-col items-center justify-end py-[25px] px-0 box-border text-xl text-white font-playfair-display">
            <div className="w-[480px] flex flex-row items-center justify-start gap-[178px]">
              <div className="w-[232px] flex flex-row items-center justify-start gap-[20px]">
                <img
                  className="relative w-[78px] h-[78px] object-cover"
                  alt=""
                  src="/image4@2x.png"
                />
                <div className="w-[138px] flex flex-col items-start justify-start">
                  <img
                    className="relative w-[81px] h-[16.2px]"
                    alt=""
                    src={dimensionCodeImageUrl}
                  />
                  <b className="relative tracking-[-0.01em] leading-[160%] inline-block mt-[-1px]">
                    Lieo Jessica
                  </b>
                  <div className="relative text-sm tracking-[0.03em] leading-[160%] font-semibold font-manrope mt-[-1px]">
                    United Kingdom
                  </div>
                </div>
              </div>
              <img
                className="relative w-[70px] h-[55.3px]"
                alt=""
                src="/icon.svg"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default FormContainer3;

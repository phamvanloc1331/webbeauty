import { FunctionComponent, memo } from "react";

type ContainerType = {
  faceMasks?: string;
  prop?: string;
  prop1?: string;
};

const Container: FunctionComponent<ContainerType> = memo(
  ({ faceMasks, prop, prop1 }) => {
    return (
      <div className="w-[530px] flex flex-col items-start justify-start gap-[22px] text-left text-3xl text-gray-200 font-playfair-display">
        <div className="w-[529px] flex flex-col items-start justify-start gap-[5px]">
          <div className="w-[529px] h-[29px] flex flex-row items-center justify-end">
            <div className="relative leading-[130%] inline-block w-[529px] shrink-0">
              <span>
                <b className="font-playfair-display">{`Face masks   `}</b>
                <span>
                  <span className="tracking-[0.05em]">{prop}</span>
                </span>
              </span>
              <span>
                <span className="text-lg">from</span>
                <span>
                  {`   `}
                  <span className="tracking-[0.05em]">$48.00</span>
                </span>
              </span>
            </div>
          </div>
          <div className="relative text-lg tracking-[0.02em] leading-[165%] font-manrope text-dimgray inline-block w-[527px] h-[27px] shrink-0">
            The versions have evolved over the sometimes by accident.
          </div>
        </div>
        <div className="relative box-border w-[531px] h-px opacity-[0.5] border-t-[1px] border-solid border-darkgray-200" />
      </div>
    );
  }
);

export default Container;

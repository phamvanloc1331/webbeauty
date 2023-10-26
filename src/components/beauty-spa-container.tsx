import { FunctionComponent, memo, useMemo, type CSSProperties } from "react";

type BeautySpaContainerType = {
  imageDimensions?: string;
  beautySpaDescription?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
};

const BeautySpaContainer: FunctionComponent<BeautySpaContainerType> = memo(
  ({ imageDimensions, beautySpaDescription, propLeft }) => {
    const divStyle: CSSProperties = useMemo(() => {
      return {
        left: propLeft,
      };
    }, [propLeft]);

    return (
      <div
        className="absolute top-[0px] left-[830px] w-[370px] flex flex-col items-start justify-start text-left text-smi text-slategray font-manrope"
        style={divStyle}
      >
        <img
          className="relative w-[370px] h-[325px] object-cover"
          alt=""
          src={imageDimensions}
        />
        <div className="bg-aliceblue-100 flex flex-col items-start justify-start py-[30px] pr-[27px] pl-[26px]">
          <div className="w-[317px] h-[194px] flex flex-col items-start justify-start gap-[8px]">
            <div className="relative w-[306.4px] h-4">
              <b className="absolute top-[0px] left-[167.9px] tracking-[0.06em] leading-[125%] uppercase flex items-center w-[138.5px]">
                BY PETER BERGSON
              </b>
              <div className="absolute top-[9px] left-[136.2px] box-border w-[21.8px] h-0.5 border-t-[2px] border-solid border-darkslategray-100" />
              <b className="absolute top-[0px] left-[0px] tracking-[0.06em] leading-[125%] uppercase flex items-center w-[130px]">
                11TH AUGUST 2021
              </b>
            </div>
            <div className="w-[317.6px] flex flex-col items-start justify-start gap-[14px] text-3xl text-gray-200 font-playfair-display">
              <b className="relative tracking-[0.02em] leading-[140%] inline-block w-[289.9px]">
                {beautySpaDescription}
              </b>
              <div className="relative text-lg tracking-[0.02em] leading-[155%] font-manrope text-dimgray inline-block w-[317.6px] h-[85px] shrink-0">
                The point of using Lorem Ipsum hiter that using making it look
                like others readable will get end.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default BeautySpaContainer;

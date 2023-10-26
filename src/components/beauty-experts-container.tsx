import { FunctionComponent, memo, useMemo, type CSSProperties } from "react";

type BeautyExpertsContainerType = {
  imageDimensions?: string;
  serviceDescription?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propFlexShrink?: CSSProperties["flexShrink"];
};

const BeautyExpertsContainer: FunctionComponent<BeautyExpertsContainerType> =
  memo(
    ({ imageDimensions, serviceDescription, propHeight, propFlexShrink }) => {
      const theMajorityHaveStyle: CSSProperties = useMemo(() => {
        return {
          height: propHeight,
          flexShrink: propFlexShrink,
        };
      }, [propHeight, propFlexShrink]);

      return (
        <div className="w-[590px] flex flex-row items-start justify-start gap-[32px] text-left text-3xl text-gray-200 font-playfair-display">
          <img
            className="relative w-[100px] h-[100px]"
            alt=""
            src={imageDimensions}
          />
          <div className="w-[458px] flex flex-col items-start justify-start gap-[8px]">
            <b className="relative leading-[120%] inline-block w-[157px]">
              {serviceDescription}
            </b>
            <div
              className="relative text-lg leading-[175%] font-manrope text-dimgray inline-block w-[458px] h-[90px] shrink-0"
              style={theMajorityHaveStyle}
            >
              The majority have suffered alteration in some form, buying to
              injected humour, or randomised words which desktop publishing
              packages.
            </div>
          </div>
        </div>
      );
    }
  );

export default BeautyExpertsContainer;

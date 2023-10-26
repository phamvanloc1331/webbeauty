import { FunctionComponent, memo } from "react";
import BeautyExpertsContainer from "./beauty-experts-container";

const BeautyExpertsContainer1: FunctionComponent = memo(() => {
  return (
    <div className="w-[620px] flex flex-col items-start justify-start gap-[36px] text-left text-3xl text-gray-200 font-playfair-display">
      <BeautyExpertsContainer
        imageDimensions="/icon4.svg"
        serviceDescription="Beauty Experts"
      />
      <div className="relative box-border w-[621px] h-px border-t-[1px] border-solid border-lightgray" />
      <BeautyExpertsContainer
        imageDimensions="/icon5.svg"
        serviceDescription="Great Services"
        propHeight="unset"
        propFlexShrink="unset"
      />
      <div className="relative box-border w-[621px] h-px border-t-[1px] border-solid border-lightgray" />
      <BeautyExpertsContainer
        imageDimensions="/icon6.svg"
        serviceDescription="100% Genuine"
        propHeight="90px"
        propFlexShrink="0"
      />
    </div>
  );
});

export default BeautyExpertsContainer1;

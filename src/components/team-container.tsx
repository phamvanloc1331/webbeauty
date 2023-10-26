import { FunctionComponent, memo } from "react";
import FormContainer1 from "./form-container1";

const TeamContainer: FunctionComponent = memo(() => {
  return (
    <div className="bg-white w-[1920px] h-[1630px] flex flex-col items-center justify-start py-[129px] px-0 box-border text-center text-mini text-slategray font-manrope">
      <div className="w-[1200px] flex flex-col items-center justify-start gap-[33px]">
        <div className="w-[659px] flex flex-col items-center justify-start gap-[9px]">
          <div className="relative tracking-[0.1em] leading-[154.5%] uppercase font-semibold">
            Meet our Experts
          </div>
          <b className="relative text-26xl tracking-[-0.01em] leading-[130%] inline-block font-playfair-display text-gray-200 w-[659px]">
            The amazing women behind Beautyness
          </b>
        </div>
        <FormContainer1
          imageDimensions="/image6@2x.png"
          personName="Sherlin D’Cruz"
          imageDimensionsAlt="/image7@2x.png"
          playerImageUrl="Maria Sharapova"
          imageDimensionsAlt2="/image8@2x.png"
          personNameAlt3="Angeline Jenifer"
        />
        <FormContainer1
          imageDimensions="/image27@2x.png"
          personName="Bonham Carter"
          imageDimensionsAlt="/image28@2x.png"
          playerImageUrl="Evanna Lynch"
          imageDimensionsAlt2="/image29@2x.png"
          personNameAlt3="Natalia Tena"
        />
      </div>
    </div>
  );
});

export default TeamContainer;

import { FunctionComponent, memo } from "react";
import { Link } from "react-router-dom";
import FormContainer1 from "./form-container1";

const TeamContainer1: FunctionComponent = memo(() => {
  return (
    <div className="absolute top-[2549px] left-[calc(50%_-_600px)] w-[1200px] flex flex-col items-center justify-start gap-[33px] text-center text-mini text-slategray font-manrope">
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
      <Link
        className="cursor-pointer [text-decoration:none] bg-slategray flex flex-row items-center justify-center pt-[23px] px-[72px] pb-6 text-sm text-white"
        to="/team"
      >
        <div className="relative tracking-[0.12em] leading-[125%] uppercase font-extrabold">
          ABOUT US
        </div>
      </Link>
    </div>
  );
});

export default TeamContainer1;

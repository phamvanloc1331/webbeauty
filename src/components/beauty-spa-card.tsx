import { FunctionComponent, memo } from "react";
import BeautySpaContainer1 from "./beauty-spa-container1";

const BeautySpaCard: FunctionComponent = memo(() => {
  return (
    <div className="absolute top-[620px] left-[calc(50%_-_600px)] w-[1200px] flex flex-col items-center justify-start gap-[60px] text-left text-smi text-slategray font-manrope">
      <BeautySpaContainer1
        imageDescription="/image9@2x.png"
        beautySpaDescription="Experience the beauty at our beauty spa"
        imageCode="/image10@2x.png"
        bodyImprovementTips="Tips to improve your body via cleansing"
        imageCodeDescription="/image11@2x.png"
        hydrotherapyOrSwimDescrip="The energy efficiency of the hydrotherapy or swim"
      />
      <BeautySpaContainer1
        imageDescription="/image22@2x.png"
        beautySpaDescription="How to make the make-up stay last"
        imageCode="/image23@2x.png"
        bodyImprovementTips="Fell the natural reverse aging process"
        imageCodeDescription="/image24@2x.png"
        hydrotherapyOrSwimDescrip="The best and perfect skincare strategy"
      />
      <div className="flex flex-row items-center justify-center pt-[23px] px-[41px] pb-6 text-center text-sm text-gray-200 border-[2px] border-solid border-slategray">
        <div className="relative tracking-[0.12em] leading-[125%] uppercase font-extrabold">
          VIEW MORE STORIES
        </div>
      </div>
    </div>
  );
});

export default BeautySpaCard;

import { FunctionComponent, memo } from "react";
import { Link } from "react-router-dom";

type FormContainer1Type = {
  imageDimensions?: string;
  personName?: string;
  imageDimensionsAlt?: string;
  playerImageUrl?: string;
  imageDimensionsAlt2?: string;
  personNameAlt3?: string;
};

const FormContainer1: FunctionComponent<FormContainer1Type> = memo(
  ({
    imageDimensions,
    personName,
    imageDimensionsAlt,
    playerImageUrl,
    imageDimensionsAlt2,
    personNameAlt3,
  }) => {
    return (
      <div className="w-[1200px] flex flex-row items-start justify-center gap-[45px] text-center text-5xl text-gray-200 font-playfair-display">
        <Link
          className="cursor-pointer [text-decoration:none] w-[370px] flex flex-col items-center justify-start gap-[25px] text-[inherit]"
          to="/teamsingle"
        >
          <img
            className="relative w-[370px] h-[350px] object-cover"
            alt=""
            src={imageDimensions}
          />
          <div className="w-[336px] flex flex-col items-center justify-start gap-[8px]">
            <div className="w-[315px] flex flex-col items-center justify-start gap-[4px]">
              <b className="relative leading-[120%] flex items-center justify-center w-[315px]">
                {personName}
              </b>
              <div className="relative text-mini tracking-[0.1em] leading-[154.5%] uppercase font-semibold font-manrope text-slategray">
                Beautyness Expert
              </div>
            </div>
            <div className="w-[336px] flex flex-col items-center justify-start gap-[23px] text-lg text-dimgray font-manrope">
              <div className="relative leading-[160%] inline-block w-[336px]">
                I must explain to you how all this mistaken idea of denouncing
                pleasure that will araise praising pain
              </div>
              <div className="w-[100px] flex flex-row items-center justify-center gap-[30px] text-base text-gray-200 font-font-awesome-5-brands">
                <div className="relative tracking-[0.06em] leading-[120%] uppercase">
                  
                </div>
                <div className="relative tracking-[0.06em] leading-[120%] uppercase">
                  
                </div>
                <div className="relative tracking-[0.06em] leading-[120%] uppercase">
                  
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link
          className="cursor-pointer [text-decoration:none] w-[370px] flex flex-col items-center justify-start gap-[25px] text-[inherit]"
          to="/teamsingle"
        >
          <img
            className="relative w-[370px] h-[350px] object-cover"
            alt=""
            src={imageDimensionsAlt}
          />
          <div className="w-[336px] flex flex-col items-center justify-start gap-[8px]">
            <div className="w-[315px] flex flex-col items-center justify-start gap-[4px]">
              <b className="relative leading-[120%] flex items-center justify-center w-[315px]">
                {playerImageUrl}
              </b>
              <div className="relative text-mini tracking-[0.1em] leading-[154.5%] uppercase font-semibold font-manrope text-slategray">
                Beautyness Expert
              </div>
            </div>
            <div className="w-[336px] flex flex-col items-center justify-start gap-[23px] text-lg text-dimgray font-manrope">
              <div className="relative leading-[160%] inline-block w-[336px]">
                I must explain to you how all this mistaken idea of denouncing
                pleasure that will araise praising pain
              </div>
              <div className="w-[100px] flex flex-row items-center justify-center gap-[30px] text-base text-gray-200 font-font-awesome-5-brands">
                <div className="relative tracking-[0.06em] leading-[120%] uppercase">
                  
                </div>
                <div className="relative tracking-[0.06em] leading-[120%] uppercase">
                  
                </div>
                <div className="relative tracking-[0.06em] leading-[120%] uppercase">
                  
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link
          className="cursor-pointer [text-decoration:none] w-[370px] flex flex-col items-center justify-start gap-[25px] text-[inherit]"
          to="/teamsingle"
        >
          <img
            className="relative w-[370px] h-[350px] object-cover"
            alt=""
            src={imageDimensionsAlt2}
          />
          <div className="w-[336px] flex flex-col items-center justify-start gap-[8px]">
            <div className="w-[315px] flex flex-col items-center justify-start gap-[4px]">
              <b className="relative leading-[120%] flex items-center justify-center w-[315px]">
                {personNameAlt3}
              </b>
              <div className="relative text-mini tracking-[0.1em] leading-[154.5%] uppercase font-semibold font-manrope text-slategray">
                Beautyness Expert
              </div>
            </div>
            <div className="w-[336px] flex flex-col items-center justify-start gap-[23px] text-lg text-dimgray font-manrope">
              <div className="relative leading-[160%] inline-block w-[336px]">
                I must explain to you how all this mistaken idea of denouncing
                pleasure that will araise praising pain
              </div>
              <div className="w-[100px] flex flex-row items-center justify-center gap-[30px] text-base text-gray-200 font-font-awesome-5-brands">
                <div className="relative tracking-[0.06em] leading-[120%] uppercase">
                  
                </div>
                <div className="relative tracking-[0.06em] leading-[120%] uppercase">
                  
                </div>
                <div className="relative tracking-[0.06em] leading-[120%] uppercase">
                  
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
);

export default FormContainer1;

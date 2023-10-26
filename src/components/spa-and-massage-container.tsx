import { FunctionComponent, memo, useMemo, type CSSProperties } from "react";
import { Link } from "react-router-dom";

type SpaAndMassageContainerType = {
  serviceImageUrl?: string;
  categoryImageUrl?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
};

const SpaAndMassageContainer: FunctionComponent<SpaAndMassageContainerType> =
  memo(({ serviceImageUrl, categoryImageUrl, propWidth, propHeight }) => {
    const photoIconStyle: CSSProperties = useMemo(() => {
      return {
        width: propWidth,
        height: propHeight,
      };
    }, [propWidth, propHeight]);

    return (
      <div className="w-[330px] flex flex-col items-start justify-start gap-[26px] text-left text-7xl text-gray-200 font-playfair-display">
        <div className="relative w-[330px] h-[250px]">
          <div className="absolute top-[0px] left-[0px] bg-silver w-[330px] h-[250px]" />
          <img
            className="absolute top-[0px] left-[0px] w-[398px] h-[265px] object-cover"
            alt=""
            src={serviceImageUrl}
            style={photoIconStyle}
          />
        </div>
        <div className="w-[327px] flex flex-col items-start justify-start gap-[30px]">
          <div className="w-[327px] flex flex-col items-start justify-start gap-[11px]">
            <b className="relative leading-[120%] flex items-center w-[210px]">
              {categoryImageUrl}
            </b>
            <div className="relative text-lg tracking-[0.02em] leading-[165%] font-manrope text-dimgray inline-block w-[327px] h-[86px] shrink-0">
              If you are going to use a passage offer Lorem Ipsum, you need to
              be sure hidden in the middle of text.
            </div>
          </div>
          <Link
            className="cursor-pointer [text-decoration:none] flex flex-row items-center justify-center pt-[18px] px-[43px] pb-[19px] text-center text-sm text-[inherit] font-manrope border-[2px] border-solid border-slategray"
            to="/blogsingle"
          >
            <div className="relative tracking-[0.12em] leading-[125%] uppercase font-extrabold">
              READ MORE
            </div>
          </Link>
        </div>
      </div>
    );
  });

export default SpaAndMassageContainer;

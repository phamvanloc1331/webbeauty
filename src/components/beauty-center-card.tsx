import { FunctionComponent, memo, useMemo, type CSSProperties } from "react";

type BeautyCenterCardType = {
  /** Style props */
  bannerTop?: CSSProperties["top"];
};

const BeautyCenterCard: FunctionComponent<BeautyCenterCardType> = memo(
  ({ bannerTop }) => {
    const bannerStyle: CSSProperties = useMemo(() => {
      return {
        top: bannerTop,
      };
    }, [bannerTop]);

    return (
      <section
        className="absolute top-[170px] left-[calc(50%_-_960px)] w-[1920px] flex flex-col items-center justify-start text-center text-mini text-white font-manrope"
        style={bannerStyle}
      >
        <div className="w-[1920px] h-[495px] flex flex-col items-center justify-end">
          <img
            className="relative w-[1920px] h-[495px] object-cover"
            alt=""
            src="/background3@2x.png"
          />
          <div className="w-[649px] flex flex-col items-center justify-start gap-[32px] mt-[-260px]">
            <div className="w-[649px] flex flex-col items-center justify-start gap-[8px]">
              <div className="relative tracking-[0.1em] leading-[154.5%] uppercase font-semibold">
                SHORT STORY ABOUT US
              </div>
              <b className="relative text-36xl tracking-[-0.01em] leading-[120%] inline-block font-playfair-display w-[649px]">
                The big story behind, our beautyness center
              </b>
            </div>
            <div className="bg-slategray flex flex-row items-center justify-center pt-[23px] px-9 pb-6 text-sm">
              <div className="relative tracking-[0.12em] leading-[125%] uppercase font-extrabold">
                Make a reservation
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

export default BeautyCenterCard;

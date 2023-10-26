import { FunctionComponent, memo, useMemo, type CSSProperties } from "react";
import { Link } from "react-router-dom";

type FormContainer4Type = {
  imageDimensions?: string;

  /** Style props */
  propAlignItems?: CSSProperties["alignItems"];
  propJustifyContent?: CSSProperties["justifyContent"];
  propPosition?: CSSProperties["position"];
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propHeight?: CSSProperties["height"];
  propMarginLeft?: CSSProperties["marginLeft"];
  propMarginLeft1?: CSSProperties["marginLeft"];
  propMarginLeft2?: CSSProperties["marginLeft"];
  propMarginLeft3?: CSSProperties["marginLeft"];
  textHeight?: CSSProperties["height"];
  textJustifyContent?: CSSProperties["justifyContent"];
};

const FormContainer4: FunctionComponent<FormContainer4Type> = memo(
  ({
    imageDimensions,
    propAlignItems,
    propJustifyContent,
    propPosition,
    propTop,
    propLeft,
    propHeight,
    propMarginLeft,
    propMarginLeft1,
    propMarginLeft2,
    propMarginLeft3,
    textHeight,
    textJustifyContent,
  }) => {
    const div2Style: CSSProperties = useMemo(() => {
      return {
        alignItems: propAlignItems,
        justifyContent: propJustifyContent,
        position: propPosition,
        top: propTop,
        left: propLeft,
        height: propHeight,
      };
    }, [
      propAlignItems,
      propJustifyContent,
      propPosition,
      propTop,
      propLeft,
      propHeight,
    ]);

    const textStyle: CSSProperties = useMemo(() => {
      return {
        height: textHeight,
      };
    }, [textHeight]);

    const text1Style: CSSProperties = useMemo(() => {
      return {
        justifyContent: textJustifyContent,
      };
    }, [textJustifyContent]);

    return (
      <div
        className="w-[1198px] flex flex-row items-start justify-start gap-[68px] text-left text-3xl text-gray-200 font-playfair-display"
        style={div2Style}
      >
        <img
          className="relative w-[680px] h-[720px] object-cover"
          alt=""
          src={imageDimensions}
        />
        <div className="w-[530px] h-[640px] flex flex-col items-center justify-start py-[30px] px-0 box-border">
          <div className="w-[530px] flex flex-col items-start justify-start gap-[35px]">
            <div className="w-[530px] flex flex-col items-start justify-start gap-[18px]">
              <div className="w-[530px] flex flex-col items-start justify-start gap-[22px]">
                <div className="w-[529px] flex flex-col items-start justify-start gap-[5px]">
                  <div
                    className="w-[529px] flex flex-row items-center justify-end"
                    style={textStyle}
                  >
                    <div className="relative leading-[130%] inline-block w-[529px] shrink-0">
                      <span>
                        <b className="font-playfair-display">{`Face masks   `}</b>
                        <span>
                          <span className="tracking-[0.05em]">
                            .......................................
                          </span>
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
              <div className="w-[530px] flex flex-col items-start justify-start gap-[22px]">
                <div className="w-[529px] flex flex-col items-start justify-start gap-[5px]">
                  <div className="w-[529px] h-[29px] flex flex-row items-center justify-end">
                    <div className="relative leading-[130%] inline-block w-[529px] shrink-0">
                      <span>
                        <b className="font-playfair-display">{`Full body massage  `}</b>
                        <span>
                          <span className="tracking-[0.05em]">
                            .............................
                          </span>
                        </span>
                      </span>
                      <span>
                        <span className="text-lg">from</span>
                        <span>
                          {`    `}
                          <span className="tracking-[0.05em]">$54.00</span>
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
              <div className="w-[530px] flex flex-col items-start justify-start gap-[22px]">
                <div className="w-[529px] flex flex-col items-start justify-start gap-[5px]">
                  <div
                    className="w-[529px] h-[29px] flex flex-row items-center justify-end"
                    style={text1Style}
                  >
                    <div className="relative leading-[130%] inline-block w-[529px] shrink-0">
                      <span>
                        <b className="font-playfair-display">{`Geothermal spa  `}</b>
                        <span>
                          <span className="tracking-[0.05em]">
                            .................................
                          </span>
                        </span>
                      </span>
                      <span>
                        <span className="text-lg">from</span>
                        <span>
                          {`    `}
                          <span className="tracking-[0.05em]">$54.00</span>
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
              <div className="w-[530px] flex flex-col items-start justify-start gap-[22px]">
                <div className="w-[529px] flex flex-col items-start justify-start gap-[5px]">
                  <div className="w-[529px] h-[29px] flex flex-row items-center justify-end">
                    <div className="relative leading-[130%] inline-block w-[529px] shrink-0">
                      <span>
                        <b>{`Sauna relax  `}</b>
                      </span>
                      <span>
                        <span>
                          <span className="tracking-[0.05em]">
                            .......................................
                          </span>
                        </span>
                        <span className="text-lg">from</span>
                        <span className="text-3xl">
                          {`    `}
                          <span className="tracking-[0.05em]">$73.00</span>
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
            </div>
            <Link
              className="cursor-pointer [text-decoration:none] flex flex-row items-center justify-center pt-[23px] px-[34px] pb-6 text-center text-sm text-[inherit] font-manrope border-[2px] border-solid border-slategray"
              to="/pagessingle"
            >
              <div className="relative tracking-[0.12em] leading-[125%] uppercase font-extrabold">
                GET AN APPOINTMENT
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
);

export default FormContainer4;

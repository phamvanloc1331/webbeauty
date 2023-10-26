import { FunctionComponent, useEffect } from "react";
import { Link } from "react-router-dom";
import ContainerFooter from "../components/ContainerFooter";
import FormContainer5 from "../components/form-container5";
import ServiceCard from "../components/service-card";
import FormContainer4 from "../components/form-container4";

const Services: FunctionComponent = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div
      className="relative [background:linear-gradient(#fff,_#fff),_#fff] w-full h-[5566px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] text-left text-3xl text-gray-200 font-playfair-display"
      data-animate-on-scroll
    >
      <ContainerFooter
        imageDimensions="/logo.svg"
        carImageDimensions="/line.svg"
        contentTop="4964px"
        contentLeft="calc(50% - 960px)"
        contentAlignItems="center"
        contentPadding="unset"
        contentBoxSizing="unset"
        copyright2021DraftedContaAlignItems="center"
      />
      <FormContainer5 />
      <ServiceCard />
      <section className="absolute top-[0px] left-[calc(50%_-_960px)] w-[1920px] flex flex-col items-center justify-start text-center text-mini text-white font-manrope">
        <header className="bg-white w-[1440px] h-[125px] flex flex-col items-center justify-end py-[37px] px-0 box-border text-left text-9xl text-gray-200 font-playfair-display">
          <div className="w-[1440px] flex flex-row items-center justify-start gap-[485px]">
            <div className="w-[502.9px] flex flex-row items-center justify-start gap-[46px]">
              <div className="w-[191px] h-[35px] flex flex-row items-center justify-start gap-[11px]">
                <img
                  className="relative w-[33px] h-[33px]"
                  alt=""
                  src="/logo1.svg"
                />
                <b className="relative leading-[125%]">Beautyness</b>
              </div>
              <div className="w-[264.9px] h-[23px] flex flex-row items-center justify-start gap-[12px] text-lg font-manrope">
                <img
                  className="relative w-[22.9px] h-[22.9px]"
                  alt=""
                  src="/vector3.svg"
                />
                <div className="relative tracking-[-0.01em] leading-[125%] font-semibold">
                  Call Us - (+22) 123 456 7890
                </div>
              </div>
            </div>
            <a className="[text-decoration:none] w-[400px] flex flex-row items-center justify-end gap-[32px] text-lg text-dimgray font-manrope">
              <div className="w-[379px] flex flex-row items-center justify-end">
                <Link
                  className="cursor-pointer [text-decoration:none] relative leading-[125%] text-[inherit] flex items-center w-[84px] h-[30px] shrink-0"
                  to="/"
                >
                  Home
                </Link>
                <div className="relative leading-[125%] flex items-center w-[84px] h-[30px] shrink-0 ml-[-16px]">
                  Pages
                </div>
                <Link
                  className="cursor-pointer [text-decoration:none] relative leading-[125%] text-[inherit] flex items-center w-[84px] h-[30px] shrink-0 ml-[-16px]"
                  to="/about"
                >
                  About
                </Link>
                <Link
                  className="cursor-pointer [text-decoration:none] relative leading-[125%] text-[inherit] flex items-center w-[67px] h-8 shrink-0 ml-[-16px]"
                  to="/blog"
                >
                  Blog
                </Link>
                <Link
                  className="cursor-pointer [text-decoration:none] relative leading-[125%] text-[inherit] flex items-center w-[83px] h-[30px] shrink-0 ml-[-16px]"
                  to="/contact"
                >
                  Contact
                </Link>
              </div>
              <div className="w-[135px] flex flex-row items-center justify-end gap-[30px]">
                <img
                  className="relative w-3.5 h-[27px] object-cover"
                  alt=""
                  src="/oip-11@2x.png"
                />
                <img
                  className="relative w-[22px] h-[21px] object-cover"
                  alt=""
                  src="/download-11@2x.png"
                />
                <img
                  className="relative w-[21px] h-5 object-cover"
                  alt=""
                  src="/oip-2-11@2x.png"
                />
              </div>
              <div className="bg-lightslategray flex flex-col items-center justify-center py-4 px-[33px] text-center text-sm text-white">
                <div className="flex flex-row items-center justify-center gap-[12px]">
                  <img
                    className="relative w-[15.5px] h-[17px]"
                    alt=""
                    src="/icon3.svg"
                  />
                  <b className="relative tracking-[0.1em] leading-[125%] uppercase">
                    RESERVATION
                  </b>
                </div>
              </div>
            </a>
          </div>
        </header>
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
      <div className="absolute top-[765px] left-[calc(50%_-_329.5px)] w-[659px] flex flex-col items-center justify-start gap-[9px] text-center text-mini text-slategray font-manrope">
        <div className="relative tracking-[0.1em] leading-[154.5%] uppercase font-semibold">
          Our Services
        </div>
        <b className="relative text-26xl tracking-[-0.01em] leading-[130%] inline-block font-playfair-display text-gray-200 w-[659px]">
          We are Experienced in making you very Beautiful
        </b>
      </div>
      <img
        className="absolute top-[calc(50%_+_51px)] left-[969px] w-[180px] h-[90px] object-cover"
        alt=""
        src="/background4@2x.png"
      />
      <div className="absolute top-[984px] left-[calc(50%_-_600px)] w-[1198px] h-[1280px] flex flex-col items-center justify-between">
        <div className="w-[1198px] h-[1280px] flex flex-col items-center justify-center">
          <div className="w-[1198px] flex flex-col items-center justify-start">
            <FormContainer4
              imageDimensions="/image16@2x.png"
              propAlignItems="center"
              propJustifyContent="flex-start"
              propPosition="unset"
              propTop="unset"
              propLeft="unset"
              propHeight="640px"
              textHeight="29px"
              textJustifyContent="flex-end"
            />
            <div className="w-[1198px] h-[640px] flex flex-row items-center justify-start gap-[68px]">
              <div className="w-[530px] h-[640px] flex flex-col items-start justify-end py-[27px] px-0 box-border">
                <div className="w-[530px] flex flex-col items-start justify-start gap-[35px]">
                  <div className="w-[530px] flex flex-col items-start justify-start gap-[18px]">
                    <div className="w-[530px] flex flex-col items-start justify-start gap-[22px]">
                      <div className="w-[529px] flex flex-col items-start justify-start gap-[5px]">
                        <div className="w-[529px] h-[29px] flex flex-row items-center justify-end">
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
                                <span className="tracking-[0.05em]">
                                  $48.00
                                </span>
                              </span>
                            </span>
                          </div>
                        </div>
                        <div className="relative text-lg tracking-[0.02em] leading-[165%] font-manrope text-dimgray inline-block w-[527px] h-[27px] shrink-0">
                          The versions have evolved over the sometimes by
                          accident.
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
                                <span className="tracking-[0.05em]">
                                  $54.00
                                </span>
                              </span>
                            </span>
                          </div>
                        </div>
                        <div className="relative text-lg tracking-[0.02em] leading-[165%] font-manrope text-dimgray inline-block w-[527px] h-[27px] shrink-0">
                          The versions have evolved over the sometimes by
                          accident.
                        </div>
                      </div>
                      <div className="relative box-border w-[531px] h-px opacity-[0.5] border-t-[1px] border-solid border-darkgray-200" />
                    </div>
                    <div className="w-[530px] flex flex-col items-start justify-start gap-[22px]">
                      <div className="w-[529px] flex flex-col items-start justify-start gap-[5px]">
                        <div className="w-[529px] h-[29px] flex flex-row items-center justify-end">
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
                                <span className="tracking-[0.05em]">
                                  $54.00
                                </span>
                              </span>
                            </span>
                          </div>
                        </div>
                        <div className="relative text-lg tracking-[0.02em] leading-[165%] font-manrope text-dimgray inline-block w-[527px] h-[27px] shrink-0">
                          The versions have evolved over the sometimes by
                          accident.
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
                                <span className="tracking-[0.05em]">
                                  $73.00
                                </span>
                              </span>
                            </span>
                          </div>
                        </div>
                        <div className="relative text-lg tracking-[0.02em] leading-[165%] font-manrope text-dimgray inline-block w-[527px] h-[27px] shrink-0">
                          The versions have evolved over the sometimes by
                          accident.
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
              <img
                className="relative w-[680px] h-[720px] object-cover"
                alt=""
                src="/image17@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <FormContainer4
        imageDimensions="/image30@2x.png"
        propAlignItems="center"
        propJustifyContent="flex-start"
        //propPosition="absolute"
        //propTop="2264px"
        //propLeft="455px"
        //propHeight="640px"
        //textHeight="29px"
        //textJustifyContent="space-between"
        propPosition="absolute"
              propTop="2264px"
              propLeft="125px"
              propHeight="640px"
              textHeight="29px"
              textJustifyContent="space-between"
      />
      <img
        className="absolute top-[3492px] left[420px] w-[122px] h-[100px]"
        alt=""
        src="/background2.svg"
      />
      <FormContainer4
        imageDimensions="/image32@2x.png"
        propAlignItems="center"
        propJustifyContent="center"
        propPosition="absolute"
        propTop="3542px"
        propLeft="169px"
        propHeight="640px"
        textHeight="29px"
        textJustifyContent="space-between"
      />
      <div className="absolute top-[2904px] left-[210px] w-[1198px] h-[640px] flex flex-row items-center justify-start gap-[68px]">
        <div className="relative w-[530px] h-[640px]">
          <div className="absolute top-[124px] left-[-2px] w-[530px] flex flex-col items-start justify-start gap-[35px]">
            <div className="w-[530px] flex flex-col items-start justify-start gap-[18px]">
              <div className="w-[530px] flex flex-col items-start justify-start gap-[22px]">
                <div className="w-[529px] flex flex-col items-start justify-start gap-[5px]">
                  <div className="w-[529px] h-[29px] flex flex-row items-center justify-end">
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
                  <div className="w-[529px] h-[29px] flex flex-row items-center justify-end">
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
        <img
          className="relative w-[680px] h-[720px] object-cover"
          alt=""
          src="/image31@2x.png"
        />
      </div>
    </div>
  );
};

export default Services;

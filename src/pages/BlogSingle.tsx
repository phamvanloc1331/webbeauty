import { FunctionComponent, useEffect } from "react";
import { Link } from "react-router-dom";
import ContainerFooter from "../components/ContainerFooter";
import BeautyCenterCard from "../components/beauty-center-card";
import CollectionCard from "../components/collection-card";

const BlogSingle: FunctionComponent = () => {
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
      className="relative bg-white w-full h-[3970px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] text-left text-xl text-gray-200 font-playfair-display"
      data-animate-on-scroll
    >
      <img
        className="absolute top-[0px] left-[0px] w-[1920px] h-[3970px]"
        alt=""
        src="/background5.svg"
      />
      <ContainerFooter
        imageDimensions="/logo.svg"
        carImageDimensions="/line.svg"
        contentTop="3335px"
        contentLeft="calc(50% - 960px)"
        contentAlignItems="flex-start"
        contentPadding="0px 360.5px"
        contentBoxSizing="border-box"
        copyright2021DraftedContaAlignItems="flex-start"
      />
      <BeautyCenterCard bannerTop="0px" />
      <div className="absolute top-[500px] left-[calc(50%_-_618px)] w-[1198px] h-[2585px] flex flex-col items-start justify-start gap-[50px]">
        <img
          className="relative w-[1330px] h-[872px] object-cover"
          alt=""
          src="/image19@2x.png"
        />
        <div className="w-[1197px] h-[1833px] flex flex-row items-start justify-start gap-[94px]">
          <div className="bg-azure box-border w-[409px] flex flex-row items-start justify-start py-[39px] px-[34px] border-[5px] border-solid border-lightslategray">
            <div className="w-[341px] flex flex-col items-start justify-start gap-[27px]">
              <div className="w-[341px] flex flex-row items-center justify-start gap-[24px]">
                <img
                  className="relative w-20 h-20 object-cover"
                  alt=""
                  src="/image20@2x.png"
                />
                <div className="w-[237px] flex flex-col items-start justify-start gap-[8px]">
                  <div className="w-[201px] flex flex-col items-start justify-start">
                    <b className="relative tracking-[-0.01em] leading-[160%]">
                      Author - Chris Jericho
                    </b>
                    <div className="relative text-base tracking-[0.02em] leading-[154.5%] font-manrope text-black mt-[-3px]">{`Chairman & Director`}</div>
                  </div>
                  <div className="bg-lightslategray flex flex-row items-center justify-center py-1 px-[13px] text-center text-smi text-white font-manrope">
                    <b className="relative tracking-[0.06em] leading-[125%] uppercase">
                      BEAUTY HEALTH
                    </b>
                  </div>
                </div>
              </div>
              <div className="relative text-lg tracking-[0.02em] leading-[155%] font-manrope text-dimgray inline-block w-[341px]">
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrassing hidden in the middle of
                text. All the Lorem Ipsum generators on the Internet tend tools
                that generator on the Internet.
              </div>
              <div className="w-[341px] flex flex-row items-center justify-start gap-[15px]">
                <b className="relative tracking-[-0.01em] leading-[160%]">
                  Share us on :
                </b>
                <div className="w-[210px] flex flex-row items-center justify-end gap-[10px] text-center text-lg font-font-awesome-5-brands">
                  <div className="box-border w-[45px] h-[45px] flex flex-col items-end justify-end py-[11px] px-4 border-[1px] border-solid border-lightslategray">
                    <div className="relative tracking-[0.06em] leading-[120%] uppercase">
                      
                    </div>
                  </div>
                  <div className="box-border w-[45px] h-[45px] flex flex-col items-end justify-end py-[11px] px-[13px] border-[1px] border-solid border-lightslategray">
                    <div className="relative tracking-[0.06em] leading-[120%] uppercase">
                      
                    </div>
                  </div>
                  <div className="box-border w-[45px] h-[45px] flex flex-col items-end justify-end py-[11px] px-3.5 border-[1px] border-solid border-lightslategray">
                    <div className="relative tracking-[0.06em] leading-[120%] uppercase">
                      
                    </div>
                  </div>
                  <div className="box-border w-[45px] h-[45px] flex flex-col items-center justify-center text-lgi border-[1px] border-solid border-lightslategray">
                    <div className="relative tracking-[0.06em] leading-[120%] uppercase">
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CollectionCard />
        </div>
      </div>
      <header className="absolute top-[0px] left-[0px] bg-white w-[1550px] h-[125px] flex flex-col items-center justify-end py-[37px] px-0 box-border text-left text-9xl text-gray-200 font-playfair-display">
        <div className="w-[1440px] flex flex-row items-center justify-start gap-[485px]">
          <div className="w-[502.9px] flex flex-row items-center justify-start gap-[46px]">
            <div className="w-[191px] h-[35px] flex flex-row items-center justify-start gap-[11px]">
              <img
                className="relative w-[33px] h-[33px]"
                alt=""
                src="/logo1.svg"
              />
              <b className="relative leading-[100%]">Beautyness</b>
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
          <a className="[text-decoration:none] w-[450px] flex flex-row items-center justify-end gap-[32px] text-lg text-dimgray font-manrope">
            <div className="w-[379px] h-[23px] flex flex-row items-center justify-end">
              <Link
                className="cursor-pointer [text-decoration:none] relative leading-[125%] text-[inherit] flex items-center w-[84px] h-[30px] shrink-0"
                to="/"
              >
                Home
              </Link>
              <Link
                className="cursor-pointer [text-decoration:none] relative leading-[125%] text-[inherit] flex items-center w-[84px] h-[30px] shrink-0 ml-[-16px]"
                to="/services"
              >
                Pages
              </Link>
              <Link
                className="cursor-pointer [text-decoration:none] relative leading-[125%] text-[inherit] flex items-center w-[84px] h-[30px] shrink-0 ml-[-16px]"
                to="/about"
              >
                About
              </Link>
              <Link
                className="cursor-pointer [text-decoration:none] relative leading-[125%] text-[inherit] flex items-center w-16 h-8 shrink-0 ml-[-16px]"
                to="/blog"
              >
                Blog
              </Link>
              <Link
                className="cursor-pointer [text-decoration:none] relative leading-[125%] text-[inherit] flex items-center w-20 h-[30px] shrink-0 ml-[-16px]"
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
    </div>
  );
};

export default BlogSingle;

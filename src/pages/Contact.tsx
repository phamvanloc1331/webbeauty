import { FunctionComponent, useEffect } from "react";
import { Link } from "react-router-dom";
import ContainerFooter from "../components/ContainerFooter";
import AppointmentForm1 from "../components/appointment-form1";
import BeautyCenterCard from "../components/beauty-center-card";

const Contact: FunctionComponent = () => {
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
      className="relative [background:linear-gradient(#fff,_#fff),_#fff] w-full h-[3288px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] text-left text-mini text-lightslategray font-manrope"
      data-animate-on-scroll
    >
      <ContainerFooter
        imageDimensions="/logo.svg"
        carImageDimensions="/line.svg"
        contentTop="2673px"
        contentLeft="calc(50% - 961px)"
        contentAlignItems="flex-start"
        contentPadding="0px 360.5px"
        contentBoxSizing="border-box"
        copyright2021DraftedContaAlignItems="flex-start"
      />
      <AppointmentForm1 />
      <div className="absolute top-[761px] left-[calc(50%_-_599px)] w-[1199px] flex flex-row items-center justify-start gap-[120px]">
        <img
          className="relative w-[600px] h-[676px] object-cover"
          alt=""
          src="/image25@2x.png"
        />
        <div className="w-[534px] flex flex-col items-start justify-start gap-[43px]">
          <div className="w-[534px] flex flex-col items-start justify-start gap-[23px]">
            <div className="w-[435px] flex flex-col items-start justify-start gap-[9px]">
              <div className="relative tracking-[0.1em] leading-[154.5%] uppercase font-semibold">
                Get in Touch!
              </div>
              <b className="relative text-26xl tracking-[-0.01em] leading-[130%] inline-block font-playfair-display text-gray-200 w-[435px]">
                We are here to help you always...
              </b>
            </div>
            <div className="relative text-lg leading-[175%] text-gray-200 inline-block w-[534px] h-24 shrink-0">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, buying to
              many desktop publishing packages.
            </div>
          </div>
          <div className="w-[426px] flex flex-col items-start justify-start gap-[30px] text-5xl text-gray-200 font-playfair-display">
            <div className="w-[426px] flex flex-row items-center justify-start gap-[27px]">
              <img
                className="relative w-[65px] h-[65px]"
                alt=""
                src="/icon7.svg"
              />
              <div className="w-[334px] flex flex-col items-start justify-start gap-[8px]">
                <b className="relative leading-[125%]">Visit Us :</b>
                <div className="relative text-base tracking-[0.06em] leading-[125%] uppercase font-semibold font-manrope">
                  NO.09a, Downtown, SAN DIEAGO, USA
                </div>
              </div>
            </div>
            <div className="w-[344px] flex flex-row items-center justify-start gap-[27px]">
              <img
                className="relative w-[65px] h-[65px]"
                alt=""
                src="/icon8.svg"
              />
              <div className="w-[252px] flex flex-col items-start justify-start gap-[8px]">
                <b className="relative leading-[125%]">Drop Us :</b>
                <div className="relative text-base tracking-[0.06em] leading-[125%] uppercase font-semibold font-manrope">
                  support@beautyness.com
                </div>
              </div>
            </div>
            <div className="w-[280px] flex flex-row items-center justify-start gap-[27px]">
              <img
                className="relative w-[65px] h-[65px]"
                alt=""
                src="/icon9.svg"
              />
              <div className="w-[188px] flex flex-col items-start justify-start gap-[8px]">
                <b className="relative leading-[125%]">Call Us :</b>
                <div className="relative text-base tracking-[0.06em] leading-[125%] uppercase font-semibold font-manrope text-center">
                  Call: 1-800-123-9999
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BeautyCenterCard bannerTop="0px" />
      <header className="absolute top-[0px] left-[0px] bg-white w-[1600px] h-[125px] flex flex-col items-center justify-end py-[37px] px-0 box-border text-left text-9xl text-gray-200 font-playfair-display">
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
              <div className="relative leading-[125%] flex items-center w-20 h-[30px] shrink-0 ml-[-16px]">
                Contact
              </div>
            </div>
            <div className="w-[135px] flex flex-row items-center justify-end gap-[30px]">
              <img
                className="relative w-3.5 h-[27px] object-cover"
                alt=""
                src="/oip-12@2x.png"
              />
              <img
                className="relative w-[22px] h-[21px] object-cover"
                alt=""
                src="/download-11@2x.png"
              />
              <img
                className="relative w-[21px] h-5 object-cover"
                alt=""
                src="/oip-2-12@2x.png"
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

export default Contact;

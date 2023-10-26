import { FunctionComponent, useEffect } from "react";
import { Link } from "react-router-dom";
import ContainerFooter from "../components/ContainerFooter";
import TestimonialsContainer1 from "../components/testimonials-container1";
import AttitudePersonalityContainer from "../components/attitude-personality-container";
import BeautyCenterCard from "../components/beauty-center-card";
import BeautyExpertsContainer1 from "../components/beauty-experts-container1";
import TeamContainer1 from "../components/team-container1";

const About: FunctionComponent = () => {
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
      className="relative [background:linear-gradient(#fff,_#fff),_#fff] w-full h-[6202px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] text-left text-mini text-slategray font-manrope"
      data-animate-on-scroll
    >
      <ContainerFooter
        imageDimensions="/logo.svg"
        carImageDimensions="/line.svg"
        contentTop="5604px"
        contentLeft="calc(50% - 960px)"
        contentAlignItems="center"
        contentPadding="unset"
        contentBoxSizing="unset"
        copyright2021DraftedContaAlignItems="center"
      />
      <div className="absolute top-[4353px] left-[calc(50%_-_601px)] w-[1201px] flex flex-col items-center justify-start gap-[60px]">
        <div className="w-[1201px] flex flex-row items-start justify-start gap-[52px]">
          <div className="w-[505px] h-[976px] flex flex-col items-center justify-start">
            <div className="w-[505px] flex flex-col items-start justify-start gap-[53px]">
              <div className="w-[495px] flex flex-col items-start justify-start gap-[22px]">
                <div className="w-[264px] flex flex-col items-start justify-start gap-[9px]">
                  <div className="relative tracking-[0.1em] leading-[154.5%] uppercase font-semibold">
                    Share us
                  </div>
                  <b className="relative text-26xl tracking-[-0.01em] leading-[130%] inline-block font-playfair-display text-gray-200 w-[264px]">
                    Follow us on Instagram
                  </b>
                </div>
                <div className="relative text-lg leading-[175%] text-dimgray inline-block w-[495px] h-[123px] shrink-0">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, buying to injected humour, or randomised words many
                  desktop publishing packages.
                </div>
              </div>
              <img
                className="relative w-[505px] h-[575px] object-cover"
                alt=""
                src="/image1@2x.png"
              />
            </div>
          </div>
          <div className="w-[644px] flex flex-col items-start justify-start gap-[46px]">
            <img
              className="relative w-[644px] h-[480px] object-cover"
              alt=""
              src="/image13@2x.png"
            />
            <img
              className="relative w-[644px] h-[450px] object-cover"
              alt=""
              src="/image2@2x.png"
            />
          </div>
        </div>
        <Link
          className="cursor-pointer [text-decoration:none] bg-slategray flex flex-row items-center justify-center pt-[23px] px-[72px] pb-6 text-center text-sm text-white"
          to="/contact"
        >
          <div className="relative tracking-[0.12em] leading-[125%] uppercase font-extrabold">
            Contact US
          </div>
        </Link>
      </div>
      <TestimonialsContainer1 />
      <AttitudePersonalityContainer />
      <BeautyCenterCard />
      <div className="absolute top-[749.5px] left-[calc(50%_-_329.5px)] w-[659px] flex flex-col items-center justify-start gap-[45px] text-center">
        <div className="w-[659px] flex flex-col items-center justify-start gap-[9px]">
          <div className="relative tracking-[0.1em] leading-[154.5%] uppercase font-semibold">
            Our Values
          </div>
          <b className="relative text-26xl tracking-[-0.01em] leading-[130%] inline-block font-playfair-display text-gray-200 w-[659px]">
            The work values we thrive for
          </b>
        </div>
        <BeautyExpertsContainer1 />
      </div>
      <TeamContainer1 />
      <a className="[text-decoration:none] absolute top-[38px] right-[59.8px] w-[812.5px] flex flex-row items-center justify-end gap-[32px] text-lg text-dimgray">
        <div className="w-[449px] h-[23px] flex flex-row items-center justify-end">
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
          <div className="relative leading-[125%] flex items-center w-[84px] h-[30px] shrink-0 ml-[-16px]">
            About
          </div>
          <Link
            className="cursor-pointer [text-decoration:none] relative leading-[125%] text-[inherit] flex items-center w-[67px] h-[31px] shrink-0 ml-[-16px]"
            to="/blog"
          >
            Blog
          </Link>
          <Link
            className="cursor-pointer [text-decoration:none] relative leading-[125%] text-[inherit] flex items-center w-[87px] h-[30px] shrink-0 ml-[-16px]"
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
      <div className="absolute top-[45.5px] left-[59.8px] w-[502.9px] flex flex-row items-center justify-start gap-[46px] text-9xl text-gray-200 font-playfair-display">
        <div className="w-[191px] h-[35px] flex flex-row items-center justify-start gap-[11px]">
          <img className="relative w-[33px] h-[33px]" alt="" src="/logo1.svg" />
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
    </div>
  );
};

export default About;

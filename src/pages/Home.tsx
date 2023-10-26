import { FunctionComponent, useEffect } from "react";
import { Link } from "react-router-dom";
import ContainerFooter from "../components/ContainerFooter";
import BeautySpaContainer from "../components/beauty-spa-container";
import DiscountCard from "../components/discount-card";
import OptimisedEnergyEfficiencyConta from "../components/optimised-energy-efficiency-conta";
import TestimonialsContainer from "../components/testimonials-container";
import ComfortableSkinContainer from "../components/comfortable-skin-container";
import SpaAndMassageContainer from "../components/spa-and-massage-container";
import FormContainer4 from "../components/form-container4";
import Container from "../components/container";
import BeautyIsPowerBannerContainer from "../components/beauty-is-power-banner-container";
import Icon from "../components/Icon";
const textStyle: React.CSSProperties = {
  fontSize: '42px', // Đây là cách để đặt kích thước phông chữ thành 30px.
};
const centerTextStyle: React.CSSProperties = {
  textAlign: 'center',
  color: 'blue',
};
const Home: FunctionComponent = () => {
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
      className="relative [background:linear-gradient(#fff,_#fff),_#fff] w-full h-[8894px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] text-center text-mini text-slategray font-manrope"
      data-animate-on-scroll
    >
      <ContainerFooter
        imageDimensions="/logo.svg"
        carImageDimensions="/line.svg"
      />
      <div className="absolute top-[8206px] left-[1481px] w-[100px] h-[100px] overflow-hidden" />
      <div className="absolute top-[7333px] left-[calc(50%_-_601px)] w-[1200px] flex flex-col items-center justify-start gap-[40px]">
        <div className="w-[289px] flex flex-col items-center justify-start gap-[4px]">
          <div className="relative tracking-[0.1em] leading-[154.5%] uppercase font-semibold">
            Our Blog
          </div>
          <b className="relative tracking-[-0.01em] leading-[130%] font-playfair-display text-gray-200" style={textStyle} >
            Latest Updates
          </b>
        </div>
        <div className="w-[1200px] flex flex-col items-center justify-start gap-[60px] text-sm text-gray-200">
          <div className="relative w-[1200px] h-[579px]">
            <BeautySpaContainer
              imageDimensions="/image9@2x.png"
              beautySpaDescription="Experience the beauty at our beauty spa"
            />
            <BeautySpaContainer
              imageDimensions="/image10@2x.png"
              beautySpaDescription="Tips to improve your body via cleansing"
              propLeft="414px"
            />
            <BeautySpaContainer
              imageDimensions="/image11@2x.png"
              beautySpaDescription="The energy efficiency of the hydrotherapy or swim"
              propLeft="0px"
            />
          </div>
          <Link
            className="cursor-pointer [text-decoration:none] flex flex-row items-center justify-center pt-[23px] px-[41px] pb-6 text-[inherit] border-[2px] border-solid border-slategray"
            to="/services"
          >
            <div className="relative tracking-[0.12em] leading-[125%] uppercase font-extrabold">
              VIEW MORE STORIES
            </div>
          </Link>
        </div>
      </div>
      <DiscountCard />
      <div className="absolute top-[5600px] left-[calc(50%_-_601px)] w-[1200px] flex flex-col items-center justify-start">
        <OptimisedEnergyEfficiencyConta />
      </div>
      <TestimonialsContainer />
      <ComfortableSkinContainer />
      <div className="absolute top-[1200.5px] left-[calc(50%_-_601px)] w-[1200px] flex flex-row items-start justify-start gap-[105px]">
        <SpaAndMassageContainer
          serviceImageUrl="/photo@2x.png"
          categoryImageUrl={`Spa & Massage`}
        />
        <SpaAndMassageContainer
          serviceImageUrl="/photo1@2x.png"
          categoryImageUrl={`Hair & Beauty`}
          propWidth="394px"
          propHeight="264px"
        />
        <SpaAndMassageContainer
          serviceImageUrl="/photo2@2x.png"
          categoryImageUrl={`Body Treatments`}
          propWidth="380px"
          propHeight="264px"
        />
      </div>
      <div className="absolute top-[3137px] left-[calc(50%_-_582px)] w-[1198px] h-[1280px] flex flex-col items-center justify-end text-left text-3xl text-gray-200 font-playfair-display">
        <div className="w-[1198px] flex flex-col items-center justify-start">
          <FormContainer4 imageDimensions="/image16@2x.png" />
          <div className="w-[118px] h-[7px]" />
          <div className="w-[1198px] flex flex-row items-start justify-start gap-[68px]">
            <div className="w-[530px] h-[640px] flex flex-col items-center justify-end py-[27px] px-0 box-border">
              <div className="w-[530px] flex flex-col items-start justify-start gap-[35px]">
                <div className="w-[530px] flex flex-col items-start justify-start gap-[18px]">
                  <Container prop="......................................." />
                  <div className="w-[530px] flex flex-col items-start justify-start gap-[22px]">
                    <div className="w-[529px] flex flex-col items-start justify-start gap-[5px]">
                      <div className="relative leading-[130%] inline-block w-[529px]">
                        <span>
                          <b className="font-playfair-display">{`Full body massage  `}</b>
                          <span>
                            <span className="tracking-[0.05em]">{`............................. `}</span>
                          </span>
                        </span>
                        <span>
                          <span className="text-lg">from</span>
                          <span>
                            {`   `}
                            <span className="tracking-[0.05em]">$54.00</span>
                          </span>
                        </span>
                      </div>
                      <div className="relative text-lg tracking-[0.02em] leading-[165%] font-manrope text-dimgray inline-block w-[527px] h-[27px] shrink-0">
                        The versions have evolved over the sometimes by
                        accident.
                      </div>
                    </div>
                    <div className="relative box-border w-[531px] h-px opacity-[0.5] border-t-[1px] border-solid border-darkgray-200" />
                  </div>
                  <Container prop="................................." />
                  <Container prop="......................................." />
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
            <div className="relative w-[600px] h-[640px]">
              <img
                className="absolute h-[112.5%] w-[113.33%] top-[-3.12%] right-[-6.67%] bottom-[-9.37%] left-[-6.67%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/background.svg"
              />
              <img
                className="absolute top-[0px] left-[0px] w-[966px] h-[645px] object-cover"
                alt=""
                src="/photo3@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <BeautyIsPowerBannerContainer />
      <a className="[text-decoration:none] absolute top-[38px] right-[59.3px] w-[812.5px] flex flex-row items-center justify-end gap-[32px] text-left text-lg text-dimgray">
        <div className="w-[449px] h-[23px] flex flex-row items-center justify-end">
          <a className="[text-decoration:none] relative leading-[125%] text-[inherit] flex items-center w-[84px] h-[30px] shrink-0">
            Home
          </a>
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
            className="cursor-pointer [text-decoration:none] relative leading-[125%] text-[inherit] flex items-center w-[95px] h-8 shrink-0 ml-[-16px]"
            to="/blog"
          >
            Blog
          </Link>
          <Link
            className="cursor-pointer [text-decoration:none] relative leading-[125%] text-[inherit] flex items-center w-[108px] h-[30px] shrink-0 ml-[-16px]"
            to="/contact"
          >
            Contact
          </Link>
        </div>
        <Icon />
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
      <div className="absolute top-[45.5px] left-[59.3px] w-[502.9px] flex flex-row items-center justify-start gap-[46px] text-left text-9xl text-gray-200 font-playfair-display">
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
      <div className="absolute top-[5405px] left-[calc(50%_-_330px)] w-[659px] flex flex-col items-center justify-start gap-[9px]">
        <div className="relative tracking-[0.1em] leading-[154.5%] uppercase font-semibold">
          Our Awesome Benefits
        </div>
        <b className="relative text-26xl tracking-[-0.01em] leading-[130%] inline-block font-playfair-display text-gray-200 w-[659px]">
          Actually what you’ll get from
        </b>
      </div>
      <div className="absolute top-[2835px] left-[calc(50%_-_330px)] w-[659px] flex flex-col items-center justify-start gap-[9px]" style={centerTextStyle}>
        <div className="relative tracking-[0.1em] leading-[154.5%] uppercase font-semibold">
          Our Services
        </div>
        <b className="relative text-26xl tracking-[-0.01em] leading-[130%] inline-block font-playfair-display text-gray-200 w-[659px]" >
          We are Experienced in making you very Beautiful
        </b>
      </div>
      <img
        className="absolute top-[3727px] left-[921px] w-[122px] h-[100px]"
        alt=""
        src="/background2.svg"
      />
    </div>
  );
};

export default Home;

import { FunctionComponent, useEffect } from "react";
import ContainerFooter from "../components/ContainerFooter";
import OptimisedEnergyEfficiencyConta from "../components/optimised-energy-efficiency-conta";
import AppointmentForm from "../components/appointment-form";
import FormContainer from "../components/form-container";
import ServiceAboutContainer from "../components/service-about-container";
import Header from "../components/Header";
import BackgroundIcon from "../components/BackgroundIcon";

const ServicesSingle: FunctionComponent = () => {
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
      className="relative [background:linear-gradient(#fff,_#fff),_#fff] w-full h-[4821px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] text-center text-mini text-slategray font-manrope"
      data-animate-on-scroll
    >
      <ContainerFooter
        imageDimensions="/logo.svg"
        carImageDimensions="/line.svg"
        contentTop="4215px"
        contentLeft="calc(50% - 960px)"
        contentAlignItems="center"
        contentPadding="unset"
        contentBoxSizing="unset"
        copyright2021DraftedContaAlignItems="center"
      />
      <div className="absolute top-[3441px] left-[calc(50%_-_600px)] w-[1200px] flex flex-col items-center justify-start gap-[43px]">
        <div className="w-[659px] flex flex-col items-center justify-start gap-[9px]">
          <div className="relative tracking-[0.1em] leading-[154.5%] uppercase font-semibold">
            Our Awesome Benefits
          </div>
          <b className="relative text-26xl tracking-[-0.01em] leading-[130%] inline-block font-playfair-display text-gray-200 w-[659px]">
            Actually what you’ll get from
          </b>
        </div>
        <OptimisedEnergyEfficiencyConta />
      </div>
      <AppointmentForm />
      <div className="absolute top-[1619px] left-[calc(50%_-_599px)] w-[1199px] flex flex-col items-center justify-start gap-[43px] text-lightslategray">
        <div className="w-[659px] flex flex-col items-center justify-start gap-[6px]">
          <div className="relative tracking-[0.1em] leading-[154.5%] uppercase font-semibold">{`Easy & affordable Booking`}</div>
          <b className="relative text-26xl tracking-[-0.01em] leading-[130%] inline-block font-playfair-display text-gray-200 w-[659px]">
            Membership Cards
          </b>
        </div>
        <div className="w-[1199px] flex flex-row items-start justify-center gap-[31px]">
          <FormContainer
            packageName="Comfort Relax"
            packagePrice="$49"
            packageType="GOLD CARD"
          />
          <FormContainer
            packageName="Luxury Retreat"
            packagePrice="$89"
            packageType="PLATINUM"
          />
        </div>
      </div>
      <ServiceAboutContainer />
      <section className="absolute top-[0px] left-[calc(50%_-_960px)] w-[1920px] flex flex-col items-center justify-start text-center text-mini text-white font-manrope">
        <Header />
        <div className="w-[1920px] h-[495px] flex flex-col items-center justify-end">
          <BackgroundIcon />
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
    </div>
  );
};

export default ServicesSingle;

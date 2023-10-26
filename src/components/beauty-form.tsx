import { FunctionComponent, memo } from "react";

const BeautyForm: FunctionComponent = memo(() => {
  return (
    <div className="w-[1920px] flex flex-col items-center justify-start text-left text-21xl text-white font-playfair-display">
      <div className="bg-darkslategray-200 w-[1919px] h-[560px] flex flex-col items-center justify-center">
        <div className="w-[1200px] flex flex-col items-start justify-start gap-[52px]">
          <div className="w-[1199px] flex flex-row items-center justify-start gap-[651px]">
            <div className="w-[298px] h-[65px] flex flex-row items-center justify-start gap-[16px]">
              <img
                className="relative w-[65px] h-[65px]"
                alt=""
                src="/logo.svg"
              />
              <b className="relative tracking-[0.02em] leading-[125%]">
                Beautyness
              </b>
            </div>
            <div className="w-[250px] flex flex-row items-center justify-end gap-[10px] text-center text-lg font-font-awesome-5-brands">
              <div className="box-border w-[55px] h-[55px] flex flex-col items-center justify-center border-[2px] border-solid border-slategray">
                <div className="relative tracking-[0.06em] leading-[120%] uppercase">
                  f
                </div>
              </div>
              <div className="box-border w-[55px] h-[55px] flex flex-col items-end justify-center py-0 px-[10px] border-[2px] border-solid border-slategray">
                <div className="relative tracking-[0.06em] leading-[120%] uppercase">
                <img
                    className=" w-[30px] h-[30px] object-cover items-center"
                    src="/twitter.png"
                  />
                </div>
              </div>
              <div className="box-border w-[55px] h-[55px] flex flex-col items-end justify-start py-[15px] px-[19px] border-[2px] border-solid border-slategray">
                <div className="relative tracking-[0.06em] leading-[120%] uppercase">
                  in
                </div>
              </div>
              <div className="box-border w-[55px] h-[55px] flex flex-col items-center justify-start py-[10px] px-0 text-lgi border-[2px] border-solid border-slategray">
                <div className="relative tracking-[0.06em] leading-[120%] uppercase">
                  <img
                      className=" w-[30px] h-[30px] object-cover items-center"
                      src="/in.png"
                    />
                </div>
              </div>
            </div>
          </div>
          <img
            className="relative w-[1200px] h-0.5 opacity-[0.15]"
            alt=""
            src="/line.svg"
          />
          <div className="w-[1199px] flex flex-row items-start justify-start gap-[129px] text-3xl">
            <div className="w-36 flex flex-col items-start justify-start gap-[21px]">
              <b className="relative leading-[140%]">Explore</b>
              <div className="relative text-mid tracking-[-0.01em] leading-[200%] font-medium font-manrope inline-block w-36 h-[206px] shrink-0">
                <p className="m-0">Home</p>
                <p className="m-0">About Us</p>
                <p className="m-0">Services</p>
                <p className="m-0">Appointments</p>
                <p className="m-0">Blog</p>
                <p className="m-0">Contact Us</p>
              </div>
            </div>
            <div className="w-[168px] flex flex-col items-start justify-start gap-[21px]">
              <b className="relative leading-[140%]">Utility Pages</b>
              <div className="relative text-mid tracking-[-0.01em] leading-[200%] font-medium font-manrope">
                <p className="m-0">Start here</p>
                <p className="m-0">Style guide</p>
                <p className="m-0">404 not found</p>
                <p className="m-0">Password protected</p>
                <p className="m-0">Licenses</p>
                <p className="m-0">Changelog</p>
              </div>
            </div>
            <div className="w-[324px] flex flex-col items-start justify-start gap-[21px]">
              <b className="relative leading-[140%]">Keep in Touch</b>
              <div className="w-[324px] flex flex-col items-start justify-start gap-[14px] text-mid font-manrope">
                <div className="w-[324px] flex flex-row items-start justify-start gap-[14px]">
                  <b className="relative tracking-[-0.01em] leading-[150%]">
                    Address :
                  </b>
                  <div className="relative tracking-[-0.01em] leading-[150%] font-medium inline-block w-[234px] h-[63px] shrink-0">
                    24A Kingston St, Los Vegas NC 28202, USA.
                  </div>
                </div>
                <div className="w-[324px] flex flex-row items-center justify-start gap-[47px]">
                  <b className="relative tracking-[-0.01em] leading-[150%]">
                    Mail :
                  </b>
                  <div className="relative tracking-[-0.01em] leading-[170%] font-medium inline-block w-[234px] shrink-0">
                    support@doctors.com
                  </div>
                </div>
                <div className="w-[324px] flex flex-row items-start justify-start gap-[29px]">
                  <b className="relative tracking-[-0.01em] leading-[150%]">
                    Phone :
                  </b>
                  <div className="relative tracking-[-0.01em] leading-[170%] font-medium inline-block w-[234px] h-[31px] shrink-0">
                    (+22) 123 - 4567 - 900
                  </div>
                </div>
              </div>
            </div>
            <div className="w-44 flex flex-col items-start justify-start gap-[21px]">
              <b className="relative leading-[140%]">Working Hours</b>
              <div className="relative text-mid tracking-[-0.01em] leading-[200%] font-medium font-manrope">
                <p className="m-0">Mon to Fri: 7am - 6pm</p>
                <p className="m-0">Sat: 9am - 7pm</p>
                <p className="m-0">Sun: 9am - 6pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 w-[1920px] h-[75px] flex flex-col items-center justify-end py-[19px] px-0 box-border text-center text-mini font-font-awesome-5-free">
        <div className="relative tracking-[-0.01em] leading-[200%]">
          <span></span>
          <span className="text-lg font-manrope">
            <span className="font-dm-sans">{` Copyright 2021. `}</span>
            <span>Drafted by Victor Themes.</span>
          </span>
        </div>
      </div>
    </div>
  );
});

export default BeautyForm;

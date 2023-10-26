import { FunctionComponent, memo } from "react";
import { Link } from "react-router-dom";

const Header: FunctionComponent = memo(() => {
  return (
    <header className="bg-white w-[1500px] h-[125px] flex flex-col items-center justify-end py-[37px] px-0 box-border text-left text-9xl text-gray-200 font-playfair-display">
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
  );
});

export default Header;

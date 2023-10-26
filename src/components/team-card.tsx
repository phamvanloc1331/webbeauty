import { FunctionComponent, memo } from "react";

const TeamCard: FunctionComponent = memo(() => {
  return (
    <div className="bg-white w-[1920px] h-[940px] flex flex-col items-center justify-center text-left text-mini text-gray-200 font-manrope">
      <div className="w-[1199px] flex flex-row items-center justify-start gap-[127px]">
        <img
          className="relative w-[539px] h-[685px] object-cover"
          alt=""
          src="/image26@2x.png"
        />
        <div className="w-[533px] flex flex-col items-start justify-start gap-[30px]">
          <div className="w-[533px] flex flex-col items-start justify-start gap-[16px] text-lightslategray">
            <div className="w-[304px] flex flex-col items-start justify-start gap-[7px]">
              <div className="relative tracking-[0.1em] leading-[154.5%] uppercase font-semibold">
                Beautyness Expert Manager
              </div>
              <b className="relative text-26xl tracking-[-0.01em] leading-[130%] inline-block font-playfair-display text-gray-200 w-[304px]">
                Sherlin D’Cruz
              </b>
            </div>
            <div className="relative text-lg leading-[160%] text-dimgray inline-block w-[533px]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by injecte
              humour, or randomised words which don't look even slightly
              believable. If you are going to use a passage of Lorem Ipsum, you
              need to be sure there isn't anything embarrassing hidden in the
              middle of text. All the Lorem Ipsum generators on the Internet
              tend to repeat.
            </div>
          </div>
          <div className="w-[350px] flex flex-col items-start justify-start gap-[15px] text-3xl font-playfair-display">
            <div className="w-[273px] flex flex-row items-center justify-start gap-[34px]">
              <img
                className="relative w-[65px] h-[65px]"
                alt=""
                src="/call.svg"
              />
              <b className="relative tracking-[-0.01em] leading-[130%]">
                (+22) 1423 585 980
              </b>
            </div>
            <div className="w-[350px] flex flex-row items-center justify-start gap-[34px]">
              <img className="relative w-[65px] h-[65px]" alt="" src="/1.svg" />
              <b className="relative tracking-[-0.01em] leading-[130%]">
                sherlindcruz@gmail.com
              </b>
            </div>
          </div>
          <div className="bg-lightslategray w-[250px] h-[65px] flex flex-col items-center justify-end py-[23px] px-0 box-border text-center text-sm text-white">
            <div className="relative tracking-[0.12em] leading-[125%] uppercase font-extrabold">
              Make a reservation
            </div>
          </div>
          <div className="w-[100px] flex flex-row items-center justify-start gap-[30px] text-base font-font-awesome-5-brands">
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
        </div>
      </div>
    </div>
  );
});

export default TeamCard;

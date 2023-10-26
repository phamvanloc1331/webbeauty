import { FunctionComponent, memo } from "react";

const CollectionCard: FunctionComponent = memo(() => {
  return (
    <div className="w-[694px] h-[1758px] flex flex-col items-start justify-start gap-[50px] text-left text-lg text-dimgray font-manrope">
      <div className="w-[693px] flex flex-col items-start justify-start gap-[13px]">
        <div className="relative tracking-[0.02em] leading-[155%] inline-block w-[691px] h-[170px] shrink-0">
          Uniquely matrix economically sound value through cooperative
          technology. Competently parallel task fully researched data and
          enterprise process improvements. Collaboratively expedite quality
          manufactured products via client-focused results quickly communicate
          enabled technology and turnkey leadership skills. Uniquely enable
          accurate supply chains rather than friction technology.
        </div>
        <div className="w-[693px] flex flex-col items-start justify-start gap-[13px] text-26xl text-gray-200 font-playfair-display">
          <b className="relative tracking-[0.02em] leading-[140%] inline-block w-[691px]">
            Take a look to our collections
          </b>
          <div className="w-[693px] flex flex-col items-start justify-start gap-[30px] text-lg text-dimgray font-manrope">
            <div className="relative tracking-[0.02em] leading-[155%] inline-block w-[693px]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing.
            </div>
            <div className="relative text-inherit tracking-[0.02em] leading-[155%] font-inherit inline-block w-[691px] h-[139px] shrink-0">
              <ul className="m-0 pl-6">
                <li className="mb-0">
                  Health Care is committed to the pillars of academic health
                  care
                </li>
              </ul>
              <p className="m-0">&nbsp;</p>
              <ul className="m-0 pl-6">
                <li className="mb-0">
                  We will strengthen local health care and improve delivery
                  system
                </li>
              </ul>
              <p className="m-0">&nbsp;</p>
              <ul className="m-0 pl-6">
                <li>
                  Providing optimal multidisciplinary health care and developing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[694px] flex flex-col items-center justify-start gap-[14px] text-center">
        <img
          className="relative w-[816px] h-[522px] object-cover"
          alt=""
          src="/image21@2x.png"
        />
        <div className="relative tracking-[0.02em] leading-[154.5%] inline-block w-[220px]">
          Face Massage - Skin Care
        </div>
      </div>
      <div className="w-[694px] flex flex-col items-start justify-start gap-[13px] text-11xl text-gray-200 font-playfair-display">
        <b className="relative tracking-[0.02em] leading-[130%] inline-block w-[567px]">
          Feel Like Home With Best Beauty Tips
        </b>
        <div className="w-[694px] flex flex-col items-start justify-start gap-[40px] text-lg text-dimgray font-manrope">
          <div className="relative tracking-[0.02em] leading-[155%] inline-block w-[692px] h-20 shrink-0">
            It was popularised in the 1960s with the release of Letraset
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </div>
          <div className="w-[694px] h-[166px] flex flex-row items-center justify-start text-gray-200">
            <div className="relative bg-lightslategray w-7 h-[166px]" />
            <div className="bg-azure w-[665.9px] flex flex-row items-start justify-start py-[35px] px-[43px] box-border">
              <div className="relative tracking-[0.02em] leading-[180%] font-medium inline-block w-[577px] shrink-0">
                “Crowdsource term sheet freemium beta stealth responsive web
                design niche market rock star channels. Supply chain market
                graphical user interface assets.”
              </div>
            </div>
          </div>
          <div className="relative text-inherit tracking-[0.02em] leading-[40px] font-inherit inline-block w-[691px]">
            <ul className="m-0 pl-6">
              <li className="mb-0">
                Your wellness goals and the areas of preference, then unwind
                with a customized.
              </li>
              <li className="mb-0">{`Discover better health & wellness by using our beautician ratings & reviews to make your choice.`}</li>
              <li className="mb-0">
                Professionals team is trained to provide you with the care and
                support you need during this difficult time.
              </li>
              <li>
                We will fax the requested records directly to the Qualified
                Beautician.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
});

export default CollectionCard;

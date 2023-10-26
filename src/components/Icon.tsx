import { FunctionComponent, memo } from "react";

const Icon: FunctionComponent = memo(() => {
  return (
    <div className="w-[135px] flex flex-row items-center justify-end gap-[30px]">
      <img
        className="relative w-3.5 h-[27px] object-cover"
        alt=""
        src="/oip-1@2x.png"
      />
      <img
        className="relative w-[22px] h-[21px] object-cover"
        alt=""
        src="/download-1@2x.png"
      />
      <img
        className="relative w-[21px] h-5 object-cover"
        alt=""
        src="/oip-2-1@2x.png"
      />
    </div>
  );
});

export default Icon;

import { FunctionComponent, memo } from "react";

const BackgroundIcon: FunctionComponent = memo(() => {
  return (
    <img
      className="relative w-[1920px] h-[495px] object-cover"
      alt=""
      src="/background3@2x.png"
    />
  );
});

export default BackgroundIcon;

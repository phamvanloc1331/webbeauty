import { FunctionComponent, memo } from "react";

const ServiceCard: FunctionComponent = memo(() => {
  return (
    <img
      className="absolute top-[914px] left-[calc(50%_-_599px)] w-[1527px] h-[3398px] object-cover"
      alt=""
      src="/services@2x.png"
    />
  );
});

export default ServiceCard;

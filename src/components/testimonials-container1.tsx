import { FunctionComponent, memo } from "react";
import FormContainer3 from "./form-container3";

const TestimonialsContainer1: FunctionComponent = memo(() => {
  return (
    <div className="absolute top-[3427px] left-[calc(50%_-_960px)] bg-aliceblue-100 w-[1920px] h-[776px] flex flex-col items-center justify-center text-center text-mini text-slategray font-manrope">
      <div className="w-[1200px] flex flex-col items-center justify-start gap-[40px]">
        <div className="w-[552px] flex flex-col items-center justify-start gap-[2px]">
          <div className="relative tracking-[0.1em] leading-[154.5%] uppercase font-semibold">
            Testimonials
          </div>
          <b className="relative text-26xl tracking-[-0.01em] leading-[130%] font-playfair-display text-gray-200">
            What our Customers says...
          </b>
        </div>
        <FormContainer3
          dimensionCode="/reviews.svg"
          dimensionCodeImageUrl="/reviews.svg"
        />
      </div>
    </div>
  );
});

export default TestimonialsContainer1;

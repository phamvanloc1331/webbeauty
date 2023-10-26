import { FunctionComponent, memo } from "react";
import { TextField } from "@mui/material";
import FormContainer3 from "./form-container3";

const TestimonialsContainer: FunctionComponent = memo(() => {
  return (
    <div className="absolute top-[4523px] left-[calc(50%_-_961px)] bg-aliceblue-100 w-[1920px] h-[776px] flex flex-col items-center justify-center text-left text-lgi text-gray-200 font-manrope">
      <div className="w-[1200px] flex flex-col items-center justify-start gap-[40px]">
        <TextField
          className="[border:none] bg-[transparent] font-semibold font-manrope text-mini"
          label="Testimonials"
          defaultValue="What our Customers says..."
        />
        <FormContainer3
          dimensionCode="/reviews.svg"
          dimensionCodeImageUrl="/reviews.svg"
        />
      </div>
    </div>
  );
});

export default TestimonialsContainer;

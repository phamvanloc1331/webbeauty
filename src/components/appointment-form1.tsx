import { FunctionComponent, memo } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";

const AppointmentForm1: FunctionComponent = memo(() => {
  return (
    <div className="absolute top-[1490px] left-[calc(50%_-_960px)] bg-aliceblue-200 w-[1920px] h-[1183px] flex flex-col items-center justify-center text-center text-mini text-lightslategray font-manrope">
      <div className="w-[1010px] flex flex-col items-center justify-start gap-[65px]">
        <div className="w-[622px] flex flex-col items-center justify-start gap-[20px]">
          <div className="w-[453px] flex flex-col items-center justify-start gap-[2px]">
            <div className="relative tracking-[0.1em] leading-[154.5%] uppercase font-semibold">
              SCHEDULE YOUR PRESENCE
            </div>
            <b className="relative text-26xl tracking-[-0.01em] leading-[130%] inline-block font-playfair-display text-gray-200 w-[453px]">
              Make an Appointment
            </b>
          </div>
          <div className="relative text-lg leading-[175%] text-dimgray inline-block w-[622px] h-14 shrink-0">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </div>
        </div>
        <div className="bg-white shadow-[0px_34px_50px_rgba(68,_46,_26,_0.12)] w-[1010px] flex flex-col items-center justify-start py-[98px] px-[100px] box-border text-sm text-white">
          <div className="w-[810px] flex flex-col items-center justify-start gap-[15px]">
            <TextField
              className="[border:none] bg-[transparent]"
              color="primary"
              label="Name"
              sx={{ width: 810 }}
              variant="filled"
            />
            <TextField
              className="[border:none] bg-[transparent]"
              color="primary"
              label="Email"
              sx={{ width: 810 }}
              variant="filled"
            />
            <TextField
              className="[border:none] bg-[transparent]"
              color="primary"
              label="Phone"
              sx={{ width: 810 }}
              variant="filled"
            />
            <TextField
              className="[border:none] bg-[transparent]"
              color="primary"
              label="Service You Need"
              sx={{ width: 810 }}
              variant="filled"
            />
            <TextField
              className="relative"
              color="primary"
              label="Any Note For Us"
              sx={{ width: 810 }}
              variant="standard"
              multiline
            />
            <div className="bg-lightslategray flex flex-row items-end justify-center pt-[23px] px-[307px] pb-6">
              <div className="relative tracking-[0.12em] leading-[125%] uppercase font-extrabold">
                Make An Appointment
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default AppointmentForm1;

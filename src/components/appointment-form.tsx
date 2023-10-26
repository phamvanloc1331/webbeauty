import { FunctionComponent, memo } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";

const AppointmentForm: FunctionComponent = memo(() => {
  return (
    <div className="absolute top-[2378px] left-[calc(50%_-_960px)] bg-aliceblue-200 w-[1920px] h-[943px] flex flex-col items-center justify-end py-32 px-0 box-border text-center text-mini text-lightslategray font-manrope">
      <div className="w-[1010px] flex flex-col items-center justify-start gap-[48px]">
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
        <div className="bg-white shadow-[0px_20px_40px_rgba(42,_68,_75,_0.13)] w-[1010px] flex flex-col items-center justify-start py-[83px] px-[100px] box-border text-base text-white">
          <div className="w-[810px] flex flex-col items-center justify-start gap-[35px]">
            <div className="w-[810px] flex flex-col items-center justify-start gap-[15px]">
              <div className="w-[810px] flex flex-row items-start justify-center gap-[10px]">
                <TextField
                  className="[border:none] bg-[transparent]"
                  color="primary"
                  label="Name"
                  sx={{ width: 400 }}
                  variant="standard"
                />
                <TextField
                  className="[border:none] bg-[transparent]"
                  color="primary"
                  label="Email"
                  sx={{ width: 400 }}
                  variant="standard"
                />
              </div>
              <div className="w-[810px] flex flex-row items-start justify-center gap-[10px]">
                <TextField
                  className="[border:none] bg-[transparent]"
                  color="primary"
                  label="Phone"
                  sx={{ width: 400 }}
                  variant="standard"
                />
                <TextField
                  className="[border:none] bg-[transparent] relative"
                  color="primary"
                  label="Service You Need"
                  sx={{ width: 400 }}
                  variant="standard"
                />
              </div>
              <div className="w-[810px] flex flex-row items-start justify-center gap-[10px]">
                <TextField
                  className="[border:none] bg-[transparent]"
                  color="primary"
                  label="Any Note For Us"
                  sx={{ width: 400 }}
                  variant="standard"
                />
                <Button color="primary" variant="contained">
                  GET AN APPOINTMENT
                </Button>
              </div>
            </div>
            <div className="relative leading-[160%] inline-block w-[398px] h-[53px] shrink-0 [-webkit-text-stroke:1px_#5c8692]">
              <span>{` Your personal information will not be passed on to any third parties. please read our `}</span>
              <b className="[text-decoration:underline]">Privacy Policy</b>
              <span>.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default AppointmentForm;

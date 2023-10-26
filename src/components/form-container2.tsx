import { FunctionComponent, memo, type CSSProperties } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";

type FormContainer2Type = {
  identifierCode?: string;
  personIdentifier?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const FormContainer2: FunctionComponent<FormContainer2Type> = memo(
  ({ identifierCode, personIdentifier, propWidth }) => {
    return (
      <TextField
        className="[border:none] bg-[transparent]"
        color="primary"
        label="Name"
        sx={{ width: 400 }}
        variant="standard"
      />
    );
  }
);

export default FormContainer2;

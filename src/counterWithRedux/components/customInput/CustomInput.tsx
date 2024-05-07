import TextField from '@mui/material/TextField';
import {ChangeEvent} from "react";

type TextFieldType = {
  label: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}

function CustomInput(props: TextFieldType) {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value)
  }
  return (
      <TextField
          id="outlined-number"
          label={props.label}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder={props.placeholder}
          value={props.value}
          onChange={onChange}
      />
  );
}

export default CustomInput;
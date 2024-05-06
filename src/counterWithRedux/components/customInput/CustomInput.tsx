import TextField from '@mui/material/TextField';

type TextFieldType = {
  label: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CustomInput(props: TextFieldType) {
  return (
      <TextField
          id="outlined-number"
          label={props.label}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
      />
  );
}

export default CustomInput;
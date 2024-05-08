import Button from '@mui/material/Button';

type BtnPropsType = {
  name: string;
  onClick: () => void;
  disabled?: boolean;
}

function CustomBtn(props: BtnPropsType) {
  return (
      <Button disabled={props.disabled} variant="contained" color="primary" onClick={props.onClick}>
        {props.name}
      </Button>
  );
}

export default CustomBtn;
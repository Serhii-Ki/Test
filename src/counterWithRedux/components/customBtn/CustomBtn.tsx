import Button from '@mui/material/Button';

type BtnPropsType = {
  name: string;
  onClick: () => void;
}

function CustomBtn(props: BtnPropsType) {
  return (
      <Button variant="contained" color="primary" onClick={props.onClick}>
        {props.name}
      </Button>
  );
}

export default CustomBtn;
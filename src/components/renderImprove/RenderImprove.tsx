import {memo, useRef, useState} from "react";

type ItemPropsType = {
  name: string
}
const Item = memo((props: ItemPropsType) => {
  console.log('Rerender Item');

  return <li>{props.name}</li>
});

type ListItemPropsType = {
  arrName: string[]
}
const ListItem = (props: ListItemPropsType) => {
  console.log('Rerender ListItem');

  return (
      <div>
        <ul>
          {props.arrName.map(name => {
            return (
                <Item name={name} key={name}/>
            )
          })}
        </ul>
      </div>
  )
}

type BtnPropsType = {
  title: string,
  onClickHandler: () => void
}

const Button = (props: BtnPropsType) => {
  console.log('Btn Render');

  return <button onClick={props.onClickHandler}>{props.title}</button>
}

export const RenderImproveApp = () => {
  const initNames = ['Sergey', 'Natalia', 'Kira'];

  const [names, setNames] = useState<string[]>(initNames);

  let inputRef = useRef<HTMLInputElement>(null);

  const onClickHandler = () => {
    if (inputRef.current) {
      setNames([...names, inputRef.current.value]);
      inputRef.current.value = "";
    }
  }

  return (
      <div>
        <input ref={inputRef}/>
        <Button title={'Add'} onClickHandler={onClickHandler}/>
        <ListItem arrName={names}/>
      </div>
  )
}
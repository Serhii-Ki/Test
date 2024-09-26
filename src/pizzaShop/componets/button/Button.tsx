import cn from "classnames";

import styles from "./button.module.css";

interface Props {
  title: string;
  type: "main" | "filter";
}

function Button(props: Props) {
  return (
    <button
      className={cn(styles.button, {
        [styles.main]: props.type === "main",
        [styles.filter]: props.type === "filter",
      })}
    >
      {props.title}
    </button>
  );
}

export default Button;

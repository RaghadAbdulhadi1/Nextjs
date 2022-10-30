import { FC } from "react";

interface OptionProps {
  innerText: string;
}

const Option: FC<OptionProps> = (props): JSX.Element => {
  return (
    <option value={props.innerText.toLowerCase()}>{props.innerText}</option>
  );
};

export default Option;

import { FC } from "react";

interface RadioProps {
  name: string;
  innerText: string;
}

const Radio: FC<RadioProps> = (props): JSX.Element => {
  return (
    <div className="checkboxes-gender">
      <input type="checkbox" name={props.name} className="gender" />
      <label className="gender-label">{props.innerText}</label>
    </div>
  );
};

export default Radio;

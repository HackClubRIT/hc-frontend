import { useState } from "react";
import { isEmpty } from "../store/validiate";

const TextInput = ({ label, controlType, id, onChange, validityMessage }) => {
  const [touched, setTouched] = useState(false);

  return (
    <div className="form__control">
      <label className="heading-tertiary" htmlFor={id}>
        {label}
      </label>
      <input
        className="input"
        type={controlType}
        id={id}
        name={id}
        onChange={onChange}
        onBlur={(e) => {
          if (isEmpty(e.target.value)) setTouched(true);
          else setTouched(false);
        }}
      />
      {touched && (
        <p className="paragraph--red u-margin-bottom-small">
          {validityMessage}
        </p>
      )}
    </div>
  );
};

export default TextInput;

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";

import TextInput from "../../../components/TextInput";
import * as qn from "../../../store/constants";

const useStyles = makeStyles((theme) => ({
  form__group: {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto auto",
    marginBottom: "1rem",
  },
}));

const Contact = () => {
  let formData = { data: {} };
  const classes = useStyles();

  const changeHandler = (event) => {
    const target = event.target;
    if (target.name === "name" || target.name === "email") {
      formData[target.name] = target.value;
    } else {
      formData.data[target.name] = target.value;
    }
  };

  return (
    <div>
      <TextInput
        label={qn.name}
        controlType="text"
        id="name"
        validityMessage="Please enter a valid name"
        onChange={changeHandler}
      />
      <TextInput
        label={qn.email}
        controlType="email"
        id="email"
        validityMessage="Please enter a valid email"
        onChange={changeHandler}
      />
      <TextInput
        label={qn.contactno}
        controlType="number"
        id="contactno"
        validityMessage="Please enter a valid contact number"
        onChange={changeHandler}
      />
      <label className="heading-tertiary">{qn.year}</label>
      <div className="form__radio">
        <RadioGroup
          defaultValue=""
          aria-label="year"
          name="year"
          value={formData.data.year}
          onChange={changeHandler}
          className={classes.form__group}
        >
          {qn.years.map((val) => (
            <div key={val}>
              <FormControlLabel
                value={val}
                control={<Radio />}
                label={val}
                labelPlacement="bottom"
              />
            </div>
          ))}{" "}
        </RadioGroup>{" "}
      </div>
      <label className="heading-tertiary">{qn.dept}</label>
      <div className="form__radio u-margin-bottom-medium">
        <RadioGroup
          defaultValue=""
          aria-label="dept"
          name="dept"
          value={formData.data.dept}
          onChange={changeHandler}
          className={classes.form__group}
        >
          {qn.depts.map((val) => (
            <div key={val}>
              <FormControlLabel
                value={val}
                control={<Radio />}
                label={val}
                labelPlacement="bottom"
              />
            </div>
          ))}{" "}
        </RadioGroup>{" "}
      </div>
    </div>
  );
};

export default Contact;

import { useState } from "react";
import { useHistory } from "react-router-dom";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";

import { isEmailValid, isEmpty, isPhoneNumber } from "../../store/validiate";
import TextInput from "../../components/TextInput";
import * as qn from "../../store/constants";
import * as api from "../../store/fetch";

const useStyles = makeStyles((theme) => ({
  form__group: {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto auto",
    marginBottom: "1rem",
  },
}));

const ApplicationsPage = () => {
  let e,
    formData = { data: {} };

  const classes = useStyles();

  const history = useHistory();

  const [errorMessage, setErrorMessage] = useState(null);

  const changeHandler = (event) => {
    const target = event.target;
    if (target.name === "name" || target.name === "email") {
      formData[target.name] = target.value;
    } else {
      formData.data[target.name] = target.value;
    }
  };

  const validateData = () => {
    if (process.env.DEBUG) {
      console.log(formData);
    }

    for (const data in formData) {
      if (data === "data") {
        for (const val in formData[data]) {
          if (isEmpty(data[val])) {
            return false;
          }
        }
      } else if (isEmpty(formData[data])) return false;
    }

    if (!isEmailValid(formData.email) || !isPhoneNumber(formData.contactno)) {
      return false;
    }

    return true;
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (validateData()) {
      console.log(formData);
    } else e = "Oops, looks like you've missed out something!";

    setErrorMessage(e);
    if (e) alert(e);
  };

  return (
    <div className="form-container">
      <div className="form">
        <h1 className="rainbow-text u-margin-bottom-medium">
          Let's Go Over Your Contact Details First
        </h1>
        <form onSubmit={submitHandler}>
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
                    value="{val}"
                    control={<Radio />}
                    label={val}
                    labelPlacement="bottom"
                  />
                </div>
              ))}{" "}
            </RadioGroup>{" "}
          </div>
          <label className="heading-tertiary">{qn.dept}</label>
          <div className="form__radio">
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
                    value="{val}"
                    control={<Radio />}
                    label={val}
                    labelPlacement="bottom"
                  />
                </div>
              ))}{" "}
            </RadioGroup>{" "}
          </div>
          <div className="form__actions">
            <button className="btn--normal">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationsPage;

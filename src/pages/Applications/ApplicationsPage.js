import { useState } from "react";
import { useHistory } from "react-router-dom";

import Contact from "./Form/Contact";
import { isEmailValid, isEmpty, isPhoneNumber } from "../../store/validiate";

const ApplicationsPage = () => {
  let e,
    formData = { data: {} };

  const history = useHistory();

  const [prev, setPrev] = useState(false);

  const validateData = () => {
    for (const data in formData) {
      if (data === "data") {
        for (const val in formData[data]) {
          if (isEmpty(formData[data][val])) return false;
        }
      } else if (isEmpty(formData[data])) return false;
    }

    if (
      !isEmailValid(formData.email) ||
      !isPhoneNumber(formData.data.contactno)
    )
      return false;

    return true;
  };

  const togglePrevHandler = (event) => {
    event.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));

    if (validateData()) {
      setPrev(!prev);
    } else alert("Oops, looks like you've missed out something!");

    formData = JSON.parse(localStorage.getItem("formData"));
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (validateData()) {
      // try {
      //   const { res, json } = await api.post("auth/token/", {
      //     formData
      //   });

      //   if (res.ok) {
      //     if (process.env.DEBUG) console.log(json);
      //     //   history.push("/auth/application");
      //   } else throw res;
      // } catch (error) {
      //   if (error.status === 500)
      //     e = "Opps, something went wrong please try again later!";
      //   else e = "Please enter a valid email address or password";
      // }
      console.log(formData);
    } else e = "Oops, looks like you've missed out something!";

    if (e) alert(e);
  };

  if (!prev) {
    return (
      <div className="form-container">
        <div className="form">
          <h1 className="rainbow-text u-margin-bottom-medium">
            Let's Go Over Your Contact Details First
          </h1>
          <form onSubmit={togglePrevHandler}></form>
        </div>
      </div>
    );
  } else {
    return (
      <div className="form-container">
        <div className="form">
          <h1 className="rainbow-text u-margin-bottom-medium">
            Tell us more about yourselves
          </h1>
          <form onSubmit={togglePrevHandler}>
            {/* {!prev && ( */}
              <div>
                <Contact />
                <div className="form__actions">
                  <button className="btn--normal">Back</button>
                </div>
              </div>
            {/* )} */}
          </form>
        </div>
      </div>
    );
  }
};

export default ApplicationsPage;

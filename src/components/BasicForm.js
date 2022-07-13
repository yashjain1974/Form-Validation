import useInput from "../hooks/use-input";
const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: isTouchedName,
    valueInputBlurHandler: nameInputBlurHandler,
    valueInputChangeHandler: nameInputChangeHandler,
    reset: resetFirstName,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: isTouchedLastName,
    valueInputBlurHandler: lastnameInputBlurHandler,
    valueInputChangeHandler: lastnameInputChangeHandler,
    reset: resetLastName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: isTouchedEmail,
    valueInputBlurHandler: emailInputBlurHandler,
    valueInputChangeHandler: emailInputChangeHandler,
    reset: resetEmail,
  } = useInput(
    (value) =>
      value.trim() !== "" &&
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)
  );

  let formIsValid = false;

  if (enteredEmailIsValid && enteredLastNameIsValid && enteredNameIsValid) {
    formIsValid = true;
  }

  const onFormsubmitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    resetEmail();
    resetFirstName();
    resetLastName();
  };

  const firstNameInput = isTouchedName
    ? "form-control invalid"
    : "form-control";
  const lastNameInput = isTouchedLastName
    ? "form-control invalid"
    : "form-control";
  const emailInput = isTouchedEmail ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={onFormsubmitHandler}>
      <div className={firstNameInput}>
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
            value={enteredName}
          />
        {isTouchedName && <p className="error-text">Field must not be empty</p>}
        </div>
        <div className={lastNameInput}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastnameInputChangeHandler}
            onBlur={lastnameInputBlurHandler}
            value={enteredLastName}
          />
        {isTouchedLastName && (
          <p className="error-text">Field must not be empty</p>
        )}
        </div>
      </div>
      <div className={emailInput}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
      {isTouchedEmail && <p className="error-text">Email must be correct</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

import { useState } from "react";
import styles from "../../styles/Form.module.scss"
import FormInput from "./FormInput"
const Form = ({ handleSubmit, onChange, formValues ,FormInputs}) => {
  
  


  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
        {FormInputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={formValues[input.name]}
            onChange={onChange}
          />
        ))}
        <button type="submit" className={styles.form_button}>Submit</button>
      </form>
    </>
  );
};

export default Form;

import {  useState } from "react";
import styles from "../../styles/FormInput.module.scss"


const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  
  return (
    <div className={styles.formInput}>
      <label className={styles.input_label}>{label}</label>
      <input
      className={styles.input}
        
        {...inputProps}
        onChange={onChange}
        onBlur={() => setFocused(true)}
        // onFocus={() =>
        //    setFocused(true)
        // }
        focused={focused.toString()}
      />
      <span className={styles.error}>{errorMessage}</span>
    </div>
  );
};

export default FormInput;

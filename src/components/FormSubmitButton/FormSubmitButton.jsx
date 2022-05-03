import styles from "./FormSubmitButton.module.css";
const FormSubmitButton = ({ onClick }) => {
  return (
    <button className={styles.submitButton} onClick={onClick}>
      SUBMIT
    </button>
  );
};

export default FormSubmitButton;

import styles from "./FormSubmitButton.module.css";
const FormSubmitButton = ({ onClick, isDisabled }) => {
  return (
    <button
      className={styles.submitButton}
      onClick={onClick}
      disabled={isDisabled}
    >
      SUBMIT
    </button>
  );
};

export default FormSubmitButton;

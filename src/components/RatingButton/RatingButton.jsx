import styles from "./RatingButton.module.css";
const RatingButton = ({ children, onClick, isSelected }) => {
  return (
    <button
      className={
        isSelected
          ? [styles.ratingButton, styles.selectedRatingButton].join(" ")
          : styles.ratingButton
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default RatingButton;

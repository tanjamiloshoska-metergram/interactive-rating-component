import styles from "./RatingButton.module.css";
const RatingButton = ({ rating, onClick, isSelected }) => {
  return (
    <button
      className={styles.ratingButton}
      onClick={() => onClick(rating)}
      style={
        isSelected
          ? {
              backgroundColor: "hsl(25, 97%, 53%)",
              color: "hsl(0, 0%, 100%)",
            }
          : null
      }
    >
      {rating}
    </button>
  );
};

export default RatingButton;

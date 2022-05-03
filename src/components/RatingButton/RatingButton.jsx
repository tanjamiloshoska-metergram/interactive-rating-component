import styles from "./RatingButton.module.css";
const RatingButton = ({ rating }) => {
  return <button className={styles.ratingButton}>{rating}</button>;
};

export default RatingButton;

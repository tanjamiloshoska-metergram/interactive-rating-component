import RatingButton from "../RatingButton/RatingButton";
import FormSubmitButton from "../FormSubmitButton/FormSubmitButton";
import starLogo from "../../assets/icon-star.svg";
import styles from "./RatingComponent.module.css";

const RatingComponent = ({ header, description, ratingScale }) => {
  const ratingButtons = ratingScale.map((rating) => (
    <RatingButton rating={rating.rating} key={rating.id} />
  ));

  return (
    <div className={styles.componentContainer}>
      <img className={styles.starLogo} src={starLogo} alt="Star logo" />
      <h1>{header}</h1>
      <p>{description}</p>
      <div>{ratingButtons}</div>
      <FormSubmitButton />
    </div>
  );
};

export default RatingComponent;

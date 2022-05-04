import RatingButton from "../RatingButton/RatingButton";
import FormSubmitButton from "../FormSubmitButton/FormSubmitButton";
import starLogo from "../../assets/icon-star.svg";
import styles from "./RatingComponent.module.css";
import CardComponent from "../CardComponent/CardComponent";

const RatingComponent = ({
  header,
  description,
  ratingScale,
  onSubmitClick,
  onRatingButtonClick,
  selectedRating,
}) => {
  const ratingButtons = ratingScale.map((rating) => (
    <RatingButton
      rating={rating.value}
      key={rating.id}
      onClick={onRatingButtonClick}
      isSelected={rating.value === selectedRating}
    />
  ));

  return (
    <CardComponent>
      <div className={styles.ratingWrapper}>
        <img className={styles.starLogo} src={starLogo} alt="Star logo" />
        <h1>{header}</h1>
        <p>{description}</p>
        <div className={styles.ratingButtonRow}>{ratingButtons}</div>
        <FormSubmitButton
          onClick={onSubmitClick}
          isDisabled={!selectedRating}
        />
      </div>
    </CardComponent>
  );
};

export default RatingComponent;

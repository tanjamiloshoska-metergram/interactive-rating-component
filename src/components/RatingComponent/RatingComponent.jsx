import RatingButton from "../RatingButton/RatingButton";
import FormSubmitButton from "../FormSubmitButton/FormSubmitButton";
import starLogo from "../../assets/icon-star.svg";
import styles from "./RatingComponent.module.css";
import CardComponent from "../CardComponent/CardComponent";

const ratingScale = [
  {
    id: 0,
    value: 1,
  },
  {
    id: 1,
    value: 2,
  },
  {
    id: 2,
    value: 3,
  },
  {
    id: 3,
    value: 4,
  },
  {
    id: 4,
    value: 5,
  },
];

const RatingComponent = ({
  onSubmitClick,
  onRatingButtonClick,
  selectedRating,
}) => {
  const ratingButtons = ratingScale.map((rating) => (
    <RatingButton
      key={rating.id}
      onClick={() => onRatingButtonClick(rating.value)}
      isSelected={rating.value === selectedRating}
    >
      {rating.value}
    </RatingButton>
  ));

  return (
    <CardComponent>
      <div className={styles.ratingWrapper}>
        <img className={styles.starLogo} src={starLogo} alt="Star logo" />
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
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

import thankYou from "../../assets/illustration-thank-you.svg";
import CardComponent from "../CardComponent/CardComponent";
import styles from "./RatingResultComponent.module.css";
const RatingResultComponent = ({
  header,
  description,
  ratingScale,
  rating,
}) => {
  return (
    <CardComponent>
      <div className={styles.resultWrapper}>
        <img src={thankYou} alt="Thank you logo" />
        <p className={styles.resultParagraph}>
          You selected {rating} out of {ratingScale}
        </p>
        <h1>{header}</h1>
        <p className={styles.descriptionParagraph}>{description}</p>
      </div>
    </CardComponent>
  );
};
export default RatingResultComponent;

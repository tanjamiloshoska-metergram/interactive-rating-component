import thankYou from "../../assets/illustration-thank-you.svg";
import CardComponent from "../CardComponent/CardComponent";
import styles from "./RatingResultComponent.module.css";
const RatingResultComponent = ({ header, description, ratingScale }) => {
  const rating = window.localStorage.getItem("rating");

  return (
    <CardComponent>
      <img src={thankYou} alt="Thank you logo" />
      <p className={styles.resultParagraph}>
        You selected {rating} out of {ratingScale}
      </p>
      <h1>{header}</h1>
      <p className={styles.descriptionParagraph}>{description}</p>
    </CardComponent>
  );
};
export default RatingResultComponent;

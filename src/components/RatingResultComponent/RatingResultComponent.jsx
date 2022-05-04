import thankYou from "../../assets/illustration-thank-you.svg";
import CardComponent from "../CardComponent/CardComponent";
import styles from "./RatingResultComponent.module.css";
const RatingResultComponent = ({ rating }) => {
  return (
    <CardComponent>
      <div className={styles.resultWrapper}>
        <img src={thankYou} alt="Thank you logo" />
        <p className={styles.resultParagraph}>You selected {rating} out of 5</p>
        <h1>Thank you!</h1>
        <p className={styles.descriptionParagraph}>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </CardComponent>
  );
};
export default RatingResultComponent;

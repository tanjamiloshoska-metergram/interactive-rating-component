import { useState } from "react";
import RatingComponent from "../RatingComponent/RatingComponent.jsx";
import RatingResultComponent from "../RatingResultComponent/RatingResultComponent.jsx";
import "./App.css";

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

function App() {
  const [isSubmitClicked, setSubmitClicked] = useState(false);
  const [selectedRating, setSelectedRating] = useState(undefined);

  const onSubmitClick = () => {
    if (selectedRating != undefined) setSubmitClicked(true);
  };

  const onSelectRating = (rating) => {
    setSelectedRating(rating);
  };

  return (
    <div className="appContainer">
      {!isSubmitClicked ? (
        <RatingComponent
          onSubmitClick={onSubmitClick}
          description={
            "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
          }
          header={"How did we do?"}
          ratingScale={ratingScale}
          selectedRating={selectedRating}
          onRatingButtonClick={onSelectRating}
        />
      ) : (
        <RatingResultComponent
          description={
            "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"
          }
          header={"Thank you!"}
          ratingScale={ratingScale[ratingScale.length - 1].value}
          rating={selectedRating}
        />
      )}
    </div>
  );
}

export default App;

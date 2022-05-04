import { useState } from "react";
import RatingComponent from "../RatingComponent/RatingComponent.jsx";
import RatingResultComponent from "../RatingResultComponent/RatingResultComponent.jsx";
import "./App.css";

function App() {
  const [isSubmitClicked, setSubmitClicked] = useState(false);
  const [selectedRating, setSelectedRating] = useState(undefined);

  const onSubmitClick = () => {
    setSubmitClicked(true);
  };

  const onSelectRating = (rating) => {
    setSelectedRating(rating);
  };

  return (
    <div className="appContainer">
      {!isSubmitClicked ? (
        <RatingComponent
          onSubmitClick={onSubmitClick}
          selectedRating={selectedRating}
          onRatingButtonClick={onSelectRating}
        />
      ) : (
        <RatingResultComponent rating={selectedRating} />
      )}
    </div>
  );
}

export default App;

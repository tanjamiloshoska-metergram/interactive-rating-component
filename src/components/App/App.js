import { useState } from "react";
import RatingComponent from "../RatingComponent/RatingComponent.jsx";
import RatingResultComponent from "../RatingResultComponent/RatingResultComponent.jsx";
import "./App.css";

const ratingScale = [
  {
    id: 0,
    rating: 1,
  },
  {
    id: 1,
    rating: 2,
  },
  {
    id: 2,
    rating: 3,
  },
  {
    id: 3,
    rating: 4,
  },
  {
    id: 4,
    rating: 5,
  },
];

function App() {
  const [isSubmitClicked, setSubmitClicked] = useState(false);

  const onSubmitClick = () => {
    setSubmitClicked(true);
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
        />
      ) : (
        <RatingResultComponent
          description={
            "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"
          }
          header={"Thank you!"}
          ratingScale={ratingScale[ratingScale.length - 1].rating}
        />
      )}
    </div>
  );
}

export default App;

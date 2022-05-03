import RatingComponent from "../RatingComponent/RatingComponent.jsx";
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
  return (
    <div className="appContainer">
      <RatingComponent
        description={
          "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
        }
        header={"How did we do?"}
        ratingScale={ratingScale}
      />
    </div>
  );
}

export default App;

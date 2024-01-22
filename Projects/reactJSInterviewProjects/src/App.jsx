import "./App.css";
import Accordian from "./components/accordian";
import ImageSlider from "./components/image-slider";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";

function App() {
  return (
    <>
      {/* {Accordian} */}
      <Accordian />
      {/* {RandomColor Component} */}
      <RandomColor />
      {/* {Star Rating} */}
      <StarRating noOfStars={10} />
      {/* Image Slider  */}
      <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} />
    </>
  );
}

export default App;

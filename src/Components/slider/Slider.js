import './Style.css';
import ReactCompareImage from "react-compare-image";
import slideFirst from "../../Asets/image/slider_img.jpg"
import slideSecond from "../../Asets/image/black.png"

function Slider() {
  const before = slideFirst;
  const after = slideSecond;



  return (
    <div className="App SpecerT">
      <div className="mainWrapper">
        <div className="contentWrapper">
          <ReactCompareImage leftImage={after} rightImage={before} />
        </div>
      </div>
    </div>
  );
}

export default Slider; 
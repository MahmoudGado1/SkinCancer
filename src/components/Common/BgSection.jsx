/* eslint-disable react/prop-types */
import ImageSection from "../../assets/gallery/section_bg01.png";
import "./BgSection.css"
const BgSection = ({message}) => {
  return (
    <div className="about-image">
      <h1>{message}</h1>
      <div className="bg-section">
        <div></div>
        <img src={ImageSection} alt="section" />
      </div>
    </div>
  );
};

export default BgSection;

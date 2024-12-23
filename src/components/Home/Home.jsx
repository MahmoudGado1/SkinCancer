import { Button } from "react-bootstrap";
import "./Home.css";
import hero from "../../assets/hero/h1_hero.png";
import { useNavigate } from "react-router-dom";
import About from "../About/About";
import Department from "../Departments/Department";
import ImageFixed from "../Common/ImageFixed";
import Doctors from "../Doctors/Doctors";
import AccordionExample from "../Common/Accordion";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <main>
        <div className="container ">
          <div className="contant">
            <div className="header-line">
              <span className="line" />
              <span className="text">Committed to success</span>
            </div>
            <h1 className="cd-headline">
              We care about your{" "}
              <strong className="text-primary">Health</strong>
            </h1>
            <p>
              You can get the care you need 24/7 – be it online or in <br />
              person. You will be treated by caring specialist doctors.
            </p>
            <Button
              onClick={() => navigate("/skin-cancer")}
              className="btn-appoint"
            >
              Check Your Skin
            </Button>
          </div>
        </div>
        <img src={hero} alt="hero" />
      </main>
      <About />
      <Department/>
      <ImageFixed/>
      <Doctors/>
      <AccordionExample/>
    </>
  );
};

export default Home;

import { Link } from "react-router-dom";
import Button from "../../components/common/buttons/Button";
import Footer from "../../components/common/footer/Footer";
import About from "./About";
import Client from "./Client";
import Services from "./Services";
import Team from "./Team";
import Contact from "./Contact";
import Navigation from "../../components/common/Navigation/blog/Navigation";
import Smallscrnavigation from "../../components/common/Navigation/blog/Smallscrnavigation";

function Home() {
  return (
    <>
      <div className="main-container">
        <div className="container-home">
          <div className="back-drop">
            <div className="nav mb-5">
              <Navigation navchange={true} />
              <Smallscrnavigation navchange={true} />
            </div>

            <article className="mt-5 pt-4">
              <h1 className="text-white text-center">
                Shop Now With Clicon Online Store any where.
              </h1>
              <div className="mt-3">
                <p className="text-muted text-center pr-5 pl-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Doloremque, est? Facere nesciunt blanditiis ad quo optio
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, ea.
                </p>
                <center>
                  <div className="container-btn">
                    <Link to="/dashboard">
                      <Button
                        className="rounded-pill btn-landing-page btn mr-1"
                        text="Shop Now"
                        iconOne={true}
                      />
                    </Link>

                    <a href="#about">
                      <Button
                        className="rounded-pill btn-landing-page btn ml-2"
                        text="About Clicon"
                      />
                    </a>
                  </div>
                </center>
              </div>
            </article>
          </div>
        </div>

        <div className="about" id="about">
          <About />
        </div>

        <div className="client mb-5">
          <Client />
        </div>

        <div className="team mt-5">
          <Team />
        </div>

        <div className="services">
          <Services />
        </div>

        <div className="contact" id="contact">
          <Contact />
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;

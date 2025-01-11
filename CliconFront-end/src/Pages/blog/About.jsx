import { Link } from "react-router-dom";
import aboutOne from "../../../images/blog/about-one.jpg";

function About() {
  return (
    <>
      <div className="container-items-about pt-5 pb-5">
        <div className="container-">
          <div className="row --grid">
            <div className="col-lg left-container-about_page pr-5">
              <div className="w-100 mb-5 mini-breacrumb">
                <p>
                  <span className="text-muted">Home</span> /{" "}
                  <span className="text-dark"></span>About
                </p>
              </div>

              <article>
                <h1>Our Story</h1>
                <p className="mt-3">
                  Launced in 2015, Exclusive is South Asia’s premier online
                  shopping makterplace with an active presense in Bangladesh.
                  Supported by wide range of tailored marketing, data and
                  service solutions, Exclusive has 10,500 sallers and 300 brands
                  and serves 3 millioons customers across the region.{" "}
                </p>
                <p className="mt-3">
                  Exclusive has more than 1 Million products to offer, growing
                  at a very fast. Exclusive offers a diverse assotment in
                  categories ranging from consumer.
                </p>
              </article>
            </div>
            {/* second container */}
            <div className="col-lg right-container-about_page">
              <img src={aboutOne} alt="about page" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

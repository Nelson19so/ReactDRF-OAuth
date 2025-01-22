import Footer from "../../components/common/footer/Footer";
import Navigationapp from "../../components/common/Navigation/e-commerce/Navigationapp";
import Sidebar from "../../components/common/sidebar/Sidebar";

import addone from "../../../images/examples.jpg";
import Randomproductdata from "../../utils/data/Randomproductdata";

function Dasboard() {
  return (
    <>
      <div className="container-dashboar">
        <div className="nav-bar">
          <Navigationapp />
        </div>

        <div className="container-e-commerce w-100">
          <div className="row grid-one">
            <div className="side-bar col-lg-2 mr-5">
              <Sidebar />
            </div>
            <div className="adds-img col-lg-9">
              <div className="container-img">
                <img src={addone} alt="add-one" />
              </div>
            </div>
          </div>

          <div className="container-product shadow border">
            <Randomproductdata />
          </div>
        </div>

        <div className="container-footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Dasboard;

import Footer from "../../components/common/footer/Footer";
import Navigationapp from "../../components/common/Navigation/e-commerce/Navigationapp";
import Sidebar from "../../components/common/sidebar/Sidebar";
import Productdetails from "../../components/product/Productdetails";
import Randomproductdata from "../../utils/data/Randomproductdata";

export default function Productdetailspage() {
  return (
    <>
      <div className="container-products-details">
        <div className="nav-bar">
          <Navigationapp />
        </div>

        <div className="container-itemspt-5 mb-5">
          <div className="container">
            <Productdetails />
          </div>
        </div>

        <div className="footer-product-page">
          <Footer />
        </div>
      </div>
    </>
  );
}

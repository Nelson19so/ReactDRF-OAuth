import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <aside className="shadow bordr">
        <div className="container-aside pl-0 pr-0">
          <ul className="pt-2">
            <li>
              <Link>
                <i className="fa fa-building mr-2"></i> Home and Office
                {/* <i className="fa fa-chevron-right float-right mt-2"></i> */}
              </Link>
            </li>
            <li>
              <Link>
                <i className="fa fa-tablet mr-2"></i> Phones & Tablet
                {/* <i className="fa fa-chevron-right float-right mt-2"></i> */}
              </Link>
            </li>
            <li>
              <Link>
                <i className="fa fa-spa mr-2"></i> Health and Beauty
                {/* <i className="fa fa-chevron-right float-right mt-2"></i> */}
              </Link>
            </li>
            <li>
              <Link>
                <i className="fa fa-bicycle mr-2"></i> Sport and outdoors
                {/* <i className="fa fa-chevron-right float-right mt-2"></i> */}
              </Link>
            </li>
            <li>
              <Link>
                <i className="fa fa-microchip mr-2"></i> Appliances
                {/* <i className="fa fa-chevron-right float-right mt-2"></i> */}
              </Link>
            </li>
            <li>
              <Link>
                <i className="fa fa-carrot mr-2"></i> Groceries and toys
                {/* <i className="fa fa-chevron-right float-right mt-2"></i> */}
              </Link>
            </li>
            <li>
              <Link>
                <i className="fa fa-tshirt mr-2"></i> Fashions
                {/* <i className="fa fa-chevron-right float-right mt-2"></i> */}
              </Link>
            </li>
            <li>
              <Link>
                <i className="fa fa-camera mr-2"></i> Electronics
                {/* <i className="fa fa-chevron-right float-right mt-2"></i> */}
              </Link>
            </li>
            <li>
              <Link>
                <i className="fa fa-desktop mr-2"></i> Computing
                {/* <i className="fa fa-chevron-right float-right mt-2"></i> */}
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

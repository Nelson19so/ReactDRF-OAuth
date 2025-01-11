import teamOne from "../../../images/Staffs/team-2.jpg";
import teamTwo from "../../../images/Staffs/team-3.jpg";
import teamFour from "../../../images/Staffs/team-4.jpg";

function Team() {
  return (
    <>
      <div className="container-tam">
        <div className="container">
          <div className="row grid">
            <div className="col-md container-inner-grid">
              <div className="container">
                <img src={teamOne} alt="team-1" className="mb-3" />
                <h3>Tom cruise</h3>
                <p className="text-muted">Founder & chairman</p>
                <span>
                  <i className="fa fa-instagram"></i>
                  <i className="fa fa-linkedin ml-2"></i>
                  <i className="fa fa-twitter ml-2"></i>
                </span>
              </div>
            </div>

            <div className="col-md container-inner-grid">
              <div className="container">
                <img src={teamTwo} alt="team-1" className="mb-3" />
                <h3>Tom cruise</h3>
                <p className="text-muted">Founder & chairman</p>
                <span>
                  <i className="fa fa-instagram"></i>
                  <i className="fa fa-linkedin ml-2"></i>
                  <i className="fa fa-twitter ml-2"></i>
                </span>
              </div>
            </div>

            <div className="col-md container-inner-grid">
              <div className="container">
                <img src={teamFour} alt="team-1" className="mb-3" />
                <h3>Tom cruise</h3>
                <p className="text-muted">Founder & chairman</p>
                <span>
                  <i className="fa fa-instagram"></i>
                  <i className="fa fa-linkedin ml-2"></i>
                  <i className="fa fa-twitter ml-2"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;

import Contactform from "../../components/form/Contactform";

function Contact() {
  return (
    <>
      <div className="contact-page pb-5">
        <div className="container">
          <div className="w-100 mb-5 mini-breacrumb">
            <p>
              <span className="text-muted">Home</span> /{" "}
              <span className="text-dark"></span>Contact
            </p>
          </div>

          <div className="row grid-contact">
            <div className="col-md-4 grid-item mb-5">
              <div className="container p-5 shadow">
                <div className="container-items mb-4">
                  <i className="fa fa-phone float-left mr-2"></i>
                  <h6>Call to us</h6>
                  <p>
                    We are available 24/7, 7 days a week, your peace is our
                    priority.
                  </p>
                  <p>Phone: +8801611112222</p>
                </div>

                <div style={{ backgroundColor: "gray", height: "0.1px" }} />

                <div className="container-items mt-5">
                  <i className="fa fa-phone float-left mr-2"></i>
                  <h6>Write to us</h6>
                  <p>
                    Fill out our form and we will asure to contact you within 24
                    hours.
                  </p>
                  <p>Emails: customer@exclusive.com</p>
                  <p>Emails: support@exclusive.com</p>
                </div>
              </div>
            </div>

            <div className="col-md grid-item">
              <div className="container pt-5 pb-4 shadow">
                <Contactform />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

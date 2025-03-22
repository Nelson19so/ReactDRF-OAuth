import Button from "../common/buttons/Button";
import Input from "../common/input/Input";

export default function Contactform() {
  return (
    <>
      <div className="contact-form pl-3 pr-3">
        <form action="" method="Post">
          <div className="row">
            <div className="col-sm mb-3">
              <Input
                placeholder="Your Name*"
                className="form-control contact-input"
              />
            </div>
            <div className="col-sm mb-3">
              <Input
                placeholder="Your Email*"
                className="form-control contact-input"
              />
            </div>
            <div className="col-sm mb-3">
              <Input
                placeholder="Your Phone*"
                className="form-control contact-input"
              />
            </div>
          </div>

          <div className="container-text-area mt-4">
            <textarea
              name="textarea"
              id=""
              placeholder="Your Message"
              className="form-control contact-input contact-text-area"
            />
          </div>

          <div className="submit-btn mt-4">
            <Button
              text="Send Message"
              className="btn btn-submit-contact text-white"
            />
          </div>
        </form>
      </div>
    </>
  );
}

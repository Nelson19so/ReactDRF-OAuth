import Button from "../common/buttons/Button";
import Input from "../common/input/Input";

export default function Newsletterform() {
  return (
    <>
      <form action="" method="Post">
        <div className="input-group mb-3 w-50">
          <Input
            className="input-subscribe form-control w-30"
            type="email"
            placeholder="Email address"
          />

          <Button
            className="btn-submit-Newsletter btn"
            text="Subscribe"
            iconBtnNewsletter={true}
          />
        </div>
      </form>
    </>
  );
}

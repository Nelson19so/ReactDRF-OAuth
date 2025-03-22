import Button from "../common/buttons/Button";
import Input from "../common/input/Input";

export default function Mainsearchform({ className }) {
  return (
    <>
      <div className={className}>
        <form action="">
          <div className="input-group">
            <Input
              type="search"
              className="form-control main-search-e-commerce border"
              placeholder="Search your favourite products..."
            />
          </div>
        </form>
      </div>
    </>
  );
}

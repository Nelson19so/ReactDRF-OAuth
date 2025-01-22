import Button from "../common/buttons/Button";
import Input from "../common/input/Input";

export default function Searchform({ className }) {
  return (
    <>
      <div className={className}>
        <form action="">
          <div className="input-group">
            <Input
              type="search"
              className="form-control search-e-commerce"
              placeholder="Search your favourite products..."
            />
            <Button className="btn btn-search" showSearch={true} />
          </div>
        </form>
      </div>
    </>
  );
}

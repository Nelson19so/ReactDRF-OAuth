import Button from "../common/buttons/Button";

export default function Addtocart() {
  return (
    <>
      <form action="">
        <Button
          className="button-add-to-cart mr-1 float-left shadow"
          text="Add to Cart"
          showbasket={true}
        />
        <Button className="float-left button-love-items" showLove={true} />
      </form>
    </>
  );
}

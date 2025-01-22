export default function Button({
  className,
  text,
  iconOne,
  iconBtnNewsletter,
  showSearch,
  showLove,
  showbasket,
  onClick,
}) {
  return (
    <>
      <button className={className} onClick={onClick}>
        {iconOne && <i className="fa fa-shop mr-1"></i>}
        {text} {iconBtnNewsletter && <i className="fa fa-arrow-right"></i>}
        {showSearch && (
          <i className="fa fa-search p-0" style={{ fontSize: "smaller" }}></i>
        )}
        {showbasket && <i className="fa fa-shopping-cart ml-1"></i>}
        {showLove && <i className="fa fa-heart"></i>}
      </button>
    </>
  );
}

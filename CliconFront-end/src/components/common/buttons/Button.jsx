export default function Button({
  className,
  text,
  iconOne,
  iconBtnNewsletter,
}) {
  return (
    <>
      <button className={className}>
        {iconOne && (
          <>
            <i className="fa fa-shop mr-2"></i>
          </>
        )}
        {text}{" "}
        {iconBtnNewsletter && (
          <>
            <i className="fa fa-arrow-right"></i>
          </>
        )}
      </button>
    </>
  );
}

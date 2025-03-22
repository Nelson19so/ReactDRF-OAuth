export default function Button({
  className,
  text,
  iconOne,
  iconBtnNewsletter,
  showSearch,
  showLove,
  showbasket,
  onClick,
  loading,
  setIsloading,
}) {
  return (
    <>
      <button className={className} onClick={onClick}>
        {loading ? (
          <>
            {/* loadind */}
            <div className="d-flex justify-content-center center">
              <div className="spinner-border spinner-border-sm mr-1"></div>
              <span className="text-white ml-1" style={{ marginTop: "-3px" }}>
                loading...
              </span>
            </div>
            {/*  */}
          </>
        ) : (
          <>
            {iconOne && <i className="fa fa-shop mr-1"></i>}
            {text} {iconBtnNewsletter && <i className="fa fa-arrow-right"></i>}
            {showSearch && (
              <i
                className="fa fa-search p-0"
                style={{ fontSize: "smaller" }}
              ></i>
            )}
            {showbasket && <i className="fa fa-shopping-cart ml-1"></i>}
            {showLove && <i className="fa fa-heart"></i>}
          </>
        )}
      </button>
    </>
  );
}

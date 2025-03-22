export default function Errormsg({ error, closeMsg }) {
  return (
    <>
      <span className="badge bg-danger- text-danger center p-3 text-center msg-auth border shadow">
        {error}
        <button
          className="btn-close ml-5 float-right"
          onClick={closeMsg}
        ></button>
      </span>
    </>
  );
}

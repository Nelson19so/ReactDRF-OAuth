export default function Successmsg({ success }) {
  return (
    <>
      <span className="badge bg-success- center p-3 text-center msg-auth border shadow">
        {success}
      </span>
    </>
  );
}

export default function Input({
  type,
  className,
  placeholder,
  value,
  onChange,
  id,
}) {
  return (
    <>
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id={id}
        required
      />
    </>
  );
}

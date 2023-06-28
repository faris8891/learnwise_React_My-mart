import { Form } from "react-bootstrap";

export default function InputField({
  placeholder,
  type,
  name,
  handler,
  value,
  ...props
}) {
  return (
    <>
      <Form.Control
        name={name}
        onChange={handler}
        type={type}
        placeholder={placeholder}
        defaultValue={value}
      />
    </>
  );
}

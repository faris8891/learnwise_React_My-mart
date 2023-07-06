import { Form } from "react-bootstrap";
import { TextField, FilledInput } from "@mui/material";
import style from "../InputField/InputField.module.css"

export default function InputField({
  placeholder,
  type,
  name,
  handler,
  value,
  id,
  title,
  ...props
}) {
  return (

      <TextField
        className={style.input}
        id={id}
        name={name}
        type={type}
        label={placeholder}
        variant="outlined"
        onChange={handler}
      defaultValue={value}
      />

  );
}

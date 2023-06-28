import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import style from "./AdminLogin.module.css";

export default function AdminLogin() {
  return (
    <Container className={style.container} fluid>
      <div className={style.login_card}></div>
    </Container>
  );
}

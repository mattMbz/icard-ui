import React from "react";
import { Button, Form } from "semantic-ui-react";
import "./LoginForm.scss";

export function LoginForm() {
  return (
    <Form className="login-form-admin">
      <Form.Input name="email" placeholder="Email" />
      <Form.Input name="password" type="password" placeholder="Password" />
      <Button type="submit" content="Log in Now!" primary fluid />
    </Form>
  );
}

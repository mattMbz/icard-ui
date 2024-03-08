import React from "react";
import {LoginForm} from "../../../components/Admin/LoginForm";
import "./LoginAdmin.scss";

export function LoginAdmin() {
  return (
    <div>
      <div className="login-admin">
        <div className="login-admin__content">
          <h1>Enter the panel</h1>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

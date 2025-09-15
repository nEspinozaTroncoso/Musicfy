import React, { useState } from "react";
import { Image } from "semantic-ui-react";
import { LogoNameWhite } from "../../assets";
import { AuthOptions, LoginForm, RegisterForm } from "../../components/Auth";
import "./Auth.scss";

export function Auth() {
  const [typeForm, setTypeForm] = useState(null);

  const openLogin = () => setTypeForm("login");
  const openRegister = () => setTypeForm("register");
  const goBack = () => setTypeForm(null);

  const renderForm = () => {
    if (typeForm === "login") {
      return <LoginForm openRegister={openRegister} goBack={goBack} />;
    }

    if (typeForm === "register") {
      return <RegisterForm openLogin={openLogin} goBack={goBack} />;
    }

    return <AuthOptions openLogin={openLogin} openRegister={openRegister} />;
  };

  return (
    <div className="auth">
      <div className="auth__content">
        <Image
          src={LogoNameWhite}
          alt="Musicfy"
          className="auth__content-logos"
        />
        {renderForm()}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { Form, Icon } from "semantic-ui-react";
import "./LoginForm.scss";

export function LoginForm(props) {
  const { openRegister, goBack } = props;
  const [showPassword, setShowPassword] = useState(false);

  const onShowHiddenPassword = () => setShowPassword((prevState) => !prevState);

  return (
    <div className="login-form">
      <h1>Musica para todos</h1>
      <Form>
        <Form.Input
          name="email"
          type="text"
          placeholder="Correo electronico"
          icon="mail outline"
        />
        <Form.Input
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Contraseña"
          icon={
            <Icon
              name={showPassword ? "eye slash" : "eye"}
              link
              onClick={onShowHiddenPassword}
            />
          }
        />
        <Form.Button type="submit" primary fluid>
          Inicia Sesión
        </Form.Button>
      </Form>

      <div className="login-form__options">
        <p onClick={goBack}>Volver</p>
        <p on>
          ¿No tienes cuenta? <span onClick={openRegister}>Registrarse</span>
        </p>
      </div>
    </div>
  );
}

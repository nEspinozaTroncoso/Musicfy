import React from "react";
import { Form, Icon } from "semantic-ui-react";
import "./RegisterForm.scss";

export function RegisterForm(props) {
  const { openLogin, goBack } = props;
  return (
    <div className="register-form">
      <h1>Empieza a escuchar con una cuenta de Musicfy gratis.</h1>

      <Form>
        <Form.Input
          type="text"
          placeholder="Correo electronico"
          icon="mail outline"
        />
        <Form.Input
          type="password"
          placeholder="Contraseña"
          icon={
            <Icon
              name="eye"
              link
              onClick={() => console.log("Show Password")}
            />
          }
        />
        <Form.Input
          type="text"
          placeholder="¿Como deberíamos llamarte"
          icon="user circle outline"
        />

        <Form.Button type="submit" primary fluid>
          Continuar
        </Form.Button>
      </Form>
      <div className="register-form__options">
        <p onClick={goBack}>Volver</p>
        <p>
          ¿Ya tienes Musicfy? <span onClick={openLogin}>Iniciar sesión</span>
        </p>
      </div>
    </div>
  );
}

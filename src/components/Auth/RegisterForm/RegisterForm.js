import React from "react";
import { Form, Icon } from "semantic-ui-react";
import { useFormik } from "formik";
import { initialValues } from "./RegisterForm.data";
import "./RegisterForm.scss";

export function RegisterForm(props) {
  const { openLogin, goBack } = props;

  const formik = useFormik({
    initialValues: initialValues(),
    onSubmit: (formValue) => {
      console.log("Registro OK");
      console.log(formValue);
    },
  });

  return (
    <div className="register-form">
      <h1>Empieza a escuchar con una cuenta de Musicfy gratis.</h1>

      <Form onSubmit={formik.handleSubmit}>
        <Form.Input
          name="email"
          type="text"
          placeholder="Correo electronico"
          icon="mail outline"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <Form.Input
          name="password"
          type="password"
          placeholder="Contraseña"
          icon={
            <Icon
              name="eye"
              link
              onClick={() => console.log("Show Password")}
            />
          }
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <Form.Input
          name="username"
          type="text"
          placeholder="¿Como deberíamos llamarte"
          icon="user circle outline"
          onChange={formik.handleChange}
          value={formik.values.username}
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

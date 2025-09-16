import React, { useState } from "react";
import { Form, Icon } from "semantic-ui-react";
import { initialValues, validationSchema } from "./LoginForm.data";
import { useFormik } from "formik";
import "./LoginForm.scss";

export function LoginForm(props) {
  const { openRegister, goBack } = props;
  const [showPassword, setShowPassword] = useState(false);

  const onShowHiddenPassword = () => setShowPassword((prevState) => !prevState);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      console.log("formulario enviado");
      console.log(formValue);
    },
  });

  return (
    <div className="login-form">
      <h1>Musica para todos</h1>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Input
          name="email"
          type="text"
          placeholder="Correo electronico"
          icon="mail outline"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.errors.email}
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
          onChange={formik.handleChange}
          value={formik.values.password}
          error={formik.errors.password}
        />
        <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
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

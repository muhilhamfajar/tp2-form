import { useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";

function FormLogin({ validateLogin }) {
  const [staticUser] = useState({
    username: "test@mailinator.com",
    password: "Password!234",
  });

  const schema = yup.object().shape({
    username: yup.string().required().email(),
    password: yup.string().required(),
  });

  const formik = useFormik({
    validationSchema: schema,
    initialValues: {
      username: "",
      password: "",
    },
    validateOnChange: false,
    onSubmit: (values, { setFieldError }) => {
      const token = captchaRef.current.getValue();
      if (!token) {
        alert('Recaptcha gagal.')
        return;
      }

      if (
        values.username !== staticUser.username ||
        values.password !== staticUser.password
      ) {
        setFieldError("username", "Username does not match");
        setFieldError("password", "Password does not match");
        validateLogin(false);
      } else {
        validateLogin(true);
      }
    },
  });

  const captchaRef = useRef();

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationFormik01">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            isInvalid={formik.errors.username}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.username}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationFormik02">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            isInvalid={formik.errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.password}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="12" controlId="validationFormik03" className="mt-3">
        <ReCAPTCHA
            ref={captchaRef}
            sitekey="6LekJkgiAAAAACRV0-ISH-SP-fWCyspjdywPi-_G"
            size="normal"
          />
        </Form.Group>        
      </Row>
      <Button type="submit">Login</Button>
    </Form>
  );
}

export default FormLogin;

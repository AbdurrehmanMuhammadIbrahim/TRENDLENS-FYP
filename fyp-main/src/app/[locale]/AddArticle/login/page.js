"use client"
import React, { useState,useContext } from 'react';
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./Login.css";
import { useRouter } from 'next/navigation';
import { storeUser } from "../../../utils/utils";
import Link from "next/link"
import { Context } from "../../../utils/context";


const schema = Yup.object().shape({
  identifier: Yup.string().email("Invalid email format").required("Email is a required field"),
  password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is a required field"),
});


const initialUser = { password: "", identifier: "" };

const Login = () => {
  const [message, setMessage] = useState('');
  const router = useRouter();
  const { login } = useContext(Context);
 


  return (

<Formik
  initialValues={initialUser}
  validationSchema={schema}
  onSubmit={async (values, { setSubmitting }) => {
    try {
      const response = await axios.post('http://localhost:1337/api/auth/local', {
        identifier: values.identifier,
        password: values.password
      });
      setMessage('Login successful!');
      login(response.data.jwt);
      router.push('/AddArticle');
    } catch (error) {
      setMessage('Error in logging');
    }
    setSubmitting(false);
  }}
>
  {({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  }) => (
    <div className="login">
      <div className="login-form">
        <form noValidate onSubmit={handleSubmit}>
          <span>Login</span>

          <input
            type="email"
            name="identifier"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.identifier}
            placeholder="Enter email"
            className="login-form-control inp_text"
          />
          <p className="error">
            {touched.identifier && errors.identifier && <div>{errors.identifier}</div>}
          </p>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            placeholder="Enter password"
            className="login-form-control"
          />
          <p className="error">
            {errors.password && touched.password && errors.password}
          </p>

          {message && <div style={{color:"whiteSm0ke"}}>{message}</div>}

          <button type="submit">
            Login
          </button>

        </form>
        <div className="signup-link">
          you don't have acccount <Link href="Signup">signUp</Link>
        </div>
      </div>
    </div>
  )}
</Formik>

  );
};

export default Login;





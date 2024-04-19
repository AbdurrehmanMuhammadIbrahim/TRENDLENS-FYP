"use client"
import React, { useState } from 'react';
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./Login.css";
import { useRouter } from 'next/navigation';
import { storeUser } from "../../utils/utils";
import Link from "next/link"


const schema = Yup.object().shape({
  identifier: Yup.string().email("Invalid email format").required("Email is a required field"),
  password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is a required field"),
});


const initialUser = { password: "", identifier: "" };

const Login = () => {
  const [user, setUser] = useState(initialUser);
  const router = useRouter();

  const handleLogin = async () => {
    const url = `http://localhost:1337/api/auth/local`;

    try {
      if (user.identifier && user.password) {
        const { data } = await axios.post(url, user);
        console.log(data);
        if (data.jwt) {
          storeUser(data);
          setUser(initialUser);
          router.push('/AddArticle');
        }
      }
    } catch (error) {
      alert("please login with right credentials")
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={initialUser}
      validationSchema={schema}
      onSubmit={(values, { setSubmitting }) => {
        setUser(values);
        handleLogin();
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
        // isSubmitting,
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


              <button type="submit"  >
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





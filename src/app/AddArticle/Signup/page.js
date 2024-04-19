"use client"
import React, { useState } from 'react';
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./Signup.css";
import Link from 'next/link'



const schema = Yup.object().shape({
  username: Yup.string().required("Username is a required field"),
  email: Yup.string().email("Invalid email format").required("Email is a required field"),
  password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is a required field"),
});


const initialUser = { email: "", password: "", username: "" };

const Signup = () => {
  const [user, setUser] = useState(initialUser);

  const signUp = async () => {
    try {
      const url = `http://localhost:1337/api/auth/local/register`;
      if (user.username && user.email && user.password) {
        const res = await axios.post(url, user);
        console.log(res);
        if (!!res) {
          setUser(initialUser);
        }
        alert("Please check your email")

      }
    } catch (error) {
      alert("user already exist")
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={initialUser}
      validationSchema={schema}
      onSubmit={(values, { setSubmitting }) => {
        setUser(values);
        signUp();
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

      }) => (
        <div className="signup">
          <div className="sign-form">
            <form noValidate onSubmit={handleSubmit}>
              <span>Signup</span>
              <input
                type="text"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                placeholder="Enter username"
                className="sign-form-control inp_text"
              />
              <p className="error">
                {errors.username && touched.username && errors.username}
              </p>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Enter email"
                className="sign-form-control inp_text"
              />
              <p className="error">
                {errors.email && touched.email && errors.email}
              </p>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Enter password"
                className="sign-form-control"
              />
              <p className="error">
                {errors.password && touched.password && errors.password}
              </p>


              <button type="submit"  >
                Signup
              </button>

              <div className="login-link">
                you have already acccount <Link href="login">Login</Link>
              </div>
            </form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Signup;

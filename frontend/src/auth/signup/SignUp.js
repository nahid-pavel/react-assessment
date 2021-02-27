import { Formik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import FormikInput from '../../_helper/FormikInput';
import { useHistory } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import { signUpAction } from '../_redux/Actions';

export default function SignUp() {

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();
    const initData = {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''

    }


    const RegistrationSchema = Yup.object().shape({
        name: Yup.string().min(3).max(50).required('Please Enter Name'),
        email: Yup.string().min(3).max(50).email('Wrong email format').required('Please Enter Email'),
        password: Yup.string().min(3, "minimum 3 symbols").max(50, "maximum 50 symbols").required("Password is required"),
        confirmPassword: Yup.string().required('Confirm the password').test("password match", "password doesn't match", function (value) {
            return this.parent.password === value;
        })
    })
    return (


        <Formik
            initialValues={initData}
            validationSchema={RegistrationSchema}

            onSubmit={(values, { setSubmitting, resetForm }) => {
                dispatch(signUpAction(values, setLoading, history, () => resetForm(initData)))


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
                /* and other goodies */
            }) => (
                <>
                    {message.length > 0 && <Alert variant={'success'}>
                        {message}
                    </Alert>}
                    <form onSubmit={handleSubmit}>
                        {console.log("errors", errors)}

                        <div className="login-color">
                            <div className="container">
                                <div className="row login">
                                    <div className="col-lg-3"></div>
                                    <div className="col-lg-6">
                                        <div>
                                            <h1 className="text-center">Sign Up</h1>

                                        </div>
                                        <div className="form-group">
                                            <label className="font-weight-bold">
                                                Enter Your Name
                              </label>
                                            <FormikInput
                                                type="text"
                                                className="form-control"
                                                value={values?.name}
                                                placeholder="Enter Name"
                                                errors={errors}
                                                touched={touched}
                                                name="name"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="font-weight-bold">Email</label>
                                            <FormikInput
                                                type="text"
                                                className="form-control"
                                                value={values.email}
                                                placeholder="Enter Email"
                                                errors={errors}
                                                touched={touched}
                                                name="email"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="font-weight-bold">Password</label>
                                            <FormikInput
                                                type="password"
                                                className="form-control"
                                                value={values?.password}
                                                placeholder="Enter Password"
                                                errors={errors}
                                                touched={touched}
                                                name="password"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="font-weight-bold">Confirm Password</label>
                                            <FormikInput
                                                type="password"
                                                className="form-control"
                                                value={values?.confirmPassword}
                                                placeholder="Confirm Password"
                                                errors={errors}
                                                touched={touched}
                                                name="confirmPassword"
                                            />
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <FormikInput
                                                        type="checkbox"
                                                        name="check"
                                                        checked={values.check}
                                                        errors={errors}
                                                        touched={touched}
                                                    />
                                                </div>
                                                <p className="ml-2">Remember me</p>
                                            </div>

                                        </div>
                                        <button
                                            type="submit"

                                            className="btn btn-primary btn-block my-3"

                                        >
                                            Register
                            </button>
                                        <div className="signup_option">

                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="login_image">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </>
            )}
        </Formik>
    );
};

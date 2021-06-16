import React from 'react';
import {useForm} from "react-hook-form";
import './SignIn.css'
import axios from "axios";
// import AuthService from "../services/Auth.service"

const SignIn = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const API_URL = "http://localhost:8000/users";

    const postData = async (data) => {
        try {
            await axios.post(API_URL, data);
        } catch (err) {
            console.error(err);
            throw new Error(`HTTP error status: ${err}`)
        }
    }

    const onSubmit = (data) => {
        postData(data).then()
    }

    return (
        <div className="card col-md-6 offset-md-3">
            <div className="card-body col-md-10 offset-md-1">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="h3 mb-3 fw-normal">Sign In</h3>

                    <div>
                        <label>Email</label>
                        <input className="form-control"
                               placeholder="name@example.com"
                               {...register("email", {
                                   required: true,
                                   pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                               })}/>
                        <p className="fieldError">{errors.email && errors.email.type === "required" &&
                        <span>Required field</span>}</p>
                        <p className="fieldError">{errors.email && errors.email.type === "pattern" &&
                        <span>Not a valid email</span>}</p>
                    </div>

                    <div>
                        <label>Password</label>
                        <input className="form-control"
                               type="password"
                               {...register("password", {required: true, minLength: 6, maxLength: 20})}/>
                        <p className="fieldError">{errors.password && errors.password.type === "required" &&
                        <span>Required field</span>}</p>
                        <p className="fieldError">{errors.password && errors.password.type === "minLength" &&
                        <span className="fieldError">Min 6 chars</span>}</p>
                        <p className="fieldError">{errors.password && errors.password.type === "maxLength" &&
                        <span>Max 20 chars</span>}</p>
                    </div>

                    <div className="col-md-4">
                        <button className="w-100 btn btn-md btn-dark" type="submit">Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
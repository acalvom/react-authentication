import React from 'react';
import {useForm} from "react-hook-form";
import './SignIn.css'

const SignIn = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data => console.log('hola', data);

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
                        <p>{errors.email && errors.email.type === "pattern" &&
                        <span>Not a valid email</span>}</p>
                    </div>

                    <div>
                        <label>Password</label>
                        <input className="form-control"
                               type="password"
                               {...register("password", {required: true, minLength: 6, maxLength: 20})}/>
                        <p>{errors.password && errors.password.type === "required" &&
                        <span>Required field</span>}</p>
                        <p>{errors.password && errors.password.type === "minLength" &&
                        <span>Min 6 chars</span>}</p>
                        <p>{errors.password && errors.password.type === "maxLength" &&
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
import React, { useState } from "react";
import './login.css'
import { useDispatch } from "react-redux";
import { loginUser } from "../../features/store";
import { Link, useNavigate } from "react-router-dom";
import { X } from "lucide-react";

export default function Login(){
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){

        if(!email || !password){
            return 0
        }
        e.preventDefault()
        dispatch(loginUser({email, password}))
        navigate('/home');
        
    }
    return (
			<div className="login">
				<div className="login__container">
					<div className="login__container__header">
						<h2 className="login__container__title">Login</h2>
						<X />
					</div>
					<form className="login__container__form" onSubmit={handleSubmit}>
						<div className="inputForm">
							<span className="login__container__form__title">Email</span>
							<input
								type="email"
								name="email"
								id="email"
								className="login__container__form__input"
								placeholder="Email"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className="inputForm">
							<span className="login__container__form__title">Password</span>
							<input
								type="password"
								name="password"
								id="password"
								className="login__container__form__input"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<button className="btn" type="submit">
							Submit
						</button>
					</form>
					<div className="login__footer">
						<p className="login__text">Don't have an account ?</p>
						<Link to="/signin">Sign in</Link>
					</div>
				</div>
			</div>
		);
}
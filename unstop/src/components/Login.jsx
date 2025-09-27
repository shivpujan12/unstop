import '../css/Login.css'
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const formFields =
    [
        {
            name: 'username',
            type: 'text',
            placeholder: 'username',
            icon: '/account_circle.svg',
            label: 'Username',
            validate: value => {
                if(!value) return "Please don't leave the field blank";
                if(value!=="emilys") return "Username not valid";
            }
        },
        {
            name: 'email',
            type: 'email',
            icon: '/mail.svg',
            placeholder: 'username@gmail.com',
            label: 'Email',
            validate: value => {
                if(!value) return "Please don't leave the field blank";
                const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if(!regex.test(value)) return "Please don't enter a valid email address";
            }
        },
        {
            name: 'password',
            type: 'password',
            icon: '/key.svg',
            placeholder: 'Password',
            label: 'Password',
            validate: value => {
                if(!value) return "Please don't leave the field blank";
                if(value.length < 8) return "Please enter at least 8 characters";
            }
        },
    ]

function Login() {
    const navigate = useNavigate();

    const [errors, setErrors] = useState({});

    const [data, setData] = useState({})

    useEffect(() => {
        if(localStorage.getItem('token')){
            navigate('/home');
        }
    }, []);

    const validateForm = () => {
        let errors = {};
        formFields.forEach(field => {
            errors[field.name] = field.validate(data[field.name]);
        })
        setErrors(errors);
        return errors.email || errors.username || errors.password;
    }

    const handleSubmit = async () => {
        if (!validateForm()) {
            data.password = "emilyspass";
            const response = await fetch("https://dummyjson.com/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if(response.status === 200) {
                const responseData = await response.json();
                localStorage.setItem('token', JSON.stringify(responseData));
                navigate('/home');
            } else {
                const message = await response.json();
                alert(message.message);
            }
        }
    }

    return (
        <div className="login-container">
            <div className="login-box">
                {/* Left Illustration */}
                <div className="login-illustration">
                    <img
                        src={"/illustration.svg"}
                        alt="Login Illustration"
                    />
                </div>

                {/* Right Form */}
                <div className="login-form poppins-medium">
                    <div className={'poppins-medium brand'}>
                        Welcome to <br/>
                        <span className=" poppins-extrabold">Unstop</span>
                    </div>


                    {/* Social buttons */}
                    <button className={`social-btn poppins-medium`}>
                        <img
                            src="/google-icon.svg"
                            alt="Google"
                        />
                        Login with Google
                    </button>

                    <button className="social-btn poppins-medium">
                        <img
                            src="/facebook-icon.svg"
                            alt="Facebook"
                        />
                        Login with Facebook
                    </button>

                    <div className="divider poppins-regular">
                        <hr />
                        <span>OR</span>
                        <hr />
                    </div>

                    {/* Input fields */}
                    {
                        formFields.map((field) => {
                            return (
                                <React.Fragment key={field.name}>
                                    <div className={`input-group ${errors.username ? "error-box" : ""}`}>
                                        <span className="icon">
                                            <img src={field.icon} alt="glyph icon" />
                                        </span>
                                        <div className={'label-group'}>
                                            <label htmlFor={field.name} className={'poppins-regular'}>{field.label}</label>
                                            <input name={field.name}
                                                   onChange={(e) => setData({...data, [e.target.name]: e.target.value})}
                                                   className={'poppins-bold'}
                                                   type={field.type} placeholder={field.placeholder}/>
                                        </div>
                                    </div>
                                    {
                                        errors[field.name] ? <span className="errors">{errors[field.name]}</span> : null
                                    }
                                </React.Fragment>
                            )
                        })
                    }

                    {/* Remember + Forgot */}
                    <div className="options poppins-regular">
                        <label>
                            <input type="checkbox" /> Remember me
                        </label>
                        <a href="#">Forgot Password?</a>
                    </div>

                    {/* Login button */}
                    <button className="login-btn poppins-medium" onClick={handleSubmit}>Login</button>

                    {/* Register */}
                    <p className="register-text poppins-regular">
                        Don’t have an account? <a href="#">Register</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;

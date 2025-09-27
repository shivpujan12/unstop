import logo from './logo.svg';
import './App.css';
import './css/Login.css';
import './css/Profile.css';

function App() {
  return (
    <div className="App">
        <Profile/>
    </div>
  );
}

export default App;


export function Profile() {
    return (
        <div className=" profile-container">
            <div className={'poppins-medium brand'}>
                Welcome to <br/>
                <span className="brand poppins-extrabold">Unstop</span>
            </div>


            <div className="profile-card poppins-medium">
                <img
                    src="/profile-icon.svg"
                    alt="Profile"
                    className="profile-img"
                />
                <h3 className="profile-name">Michael Dam</h3>
                <p className="profile-email">example@gmail.com</p>
                <p className="profile-gender">Female</p>
                <button className="logout-btn poppins-extrabold">Logout</button>
            </div>
        </div>
    );
}

export function Login() {
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
                    <button className="social-btn poppins-medium">
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
                    <div className="input-group">
                        <span className="icon">
                            <img src={'/account_circle.svg'} alt="glyph icon" />
                        </span>
                        <div className={'label-group'}>
                            <label htmlFor={'username'} className={'poppins-regular'}>User name</label>
                            <input name={'username'}
                                   className={'poppins-bold'}
                                   type="text" placeholder="username" />
                        </div>
                    </div>

                    <div className="input-group">
                        <span className="icon">
                            <img src={'/mail.svg'} alt="glyph icon" />
                        </span>
                        <div className={'label-group'}>
                            <label htmlFor={'email'} className={'poppins-regular'}>Email</label>
                            <input name={'email'}
                                   className={'poppins-bold'}
                                   type="text" placeholder="username@gmail.com" />
                        </div>
                    </div>

                    <div className="input-group">
                         <span className="icon">
                            <img src={'/key.svg'} alt="glyph icon" />
                        </span>
                        <div className={'label-group'}>
                            <label htmlFor={'password'} className={'poppins-regular'}>Password</label>
                            <input name={'password'}
                                   className={'poppins-bold'}
                                   type="password" placeholder="Password" />
                        </div>
                    </div>

                    {/* Remember + Forgot */}
                    <div className="options poppins-regular">
                        <label>
                            <input type="checkbox" /> Remember me
                        </label>
                        <a href="#">Forgot Password?</a>
                    </div>

                    {/* Login button */}
                    <button className="login-btn poppins-medium">Login</button>

                    {/* Register */}
                    <p className="register-text poppins-regular">
                        Don’t have an account? <a href="#">Register</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

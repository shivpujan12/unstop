import '../css/Profile.css';
import {useNavigate} from "react-router-dom";

function Profile(){
    const navigate = useNavigate();
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
                <button className="logout-btn poppins-extrabold" onClick={()=>{
                    localStorage.removeItem("token");
                    navigate("/auth/login");
                }}>Logout</button>
            </div>
        </div>
    );
}

export default Profile;

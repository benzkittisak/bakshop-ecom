import React, { useState } from "react";
import { connect } from "react-redux";
import Tab from "react-bootstrap/Tab";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

import CustomButton from "../../components/custom-button/custom-button.component";

const Login = ({ googleSignInStart, emailSignInStart }) => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const { email, password } = userData;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailSignInStart(email, password);
  };
  return (
    <Tab.Pane eventKey={"login"}>
      <div className="login-form-container">
        <div className="login-register-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              onChange={handleChange}
              value={email}
              name="email"
              placeholder="ชื่อผู้ใช้"
            />
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={password}
              placeholder="รหัสผ่าน"
            />
            <div className="button-container">
              <CustomButton text={"เข้าสู่ระบบ"} type="submit" />
              <CustomButton
                text={`เข้าสู่ระบบด้วย Google`}
                isGoogleSignIn
                onClick={googleSignInStart}
                type="button"
              />
            </div>
          </form>
        </div>
      </div>
    </Tab.Pane>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email,password) => dispatch(emailSignInStart({email,password})),
});

export default connect(null, mapDispatchToProps)(Login);

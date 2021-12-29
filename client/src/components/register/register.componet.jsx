import React, { useState } from "react";
import { connect } from "react-redux";

import Tab from "react-bootstrap/Tab";

import { signUpStart } from "../../redux/user/user.actions";

import CustomButton from "../../components/custom-button/custom-button.component";

const Register = ({signUp}) => {
  const [userData, setUserData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const {displayName , email , password , confirmPassword} = userData;

  const handleChange = (e) => {
    const {name , value} = e.target;
    setUserData({...userData , [name]:value});
  }

  const handleSubmit = e => {
    e.preventDefault();
    if(password !== confirmPassword){
        alert("รหัสผ่านไม่ตรงกัน")
        return;
    }
    signUp(userData);
  }
  return (
    <Tab.Pane eventKey={"register"}>
      <div className="login-form-container">
        <div className="login-register-form">
          <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={displayName} name="displayName" placeholder="ชื่อบนเว็บ" required/>
            <input type="text" onChange={handleChange} value={email} name="email" placeholder="อีเมล" required/>
            <input type="password" onChange={handleChange} value={password} name="password" placeholder="รหัสผ่าน" required/>
            <input
              type="password"
              value={confirmPassword}
              name="confirmPassword"
              onChange={handleChange}
              placeholder="ยืนยันรหัสผ่านรหัสผ่าน"
              required
            />

            <div className="button-container">
              <CustomButton text={"สมัครสมาชิก"} type="submit" />
            </div>
          </form>
        </div>
      </div>
    </Tab.Pane>
  );
};

const mapDispatchToProps = dispatch => ({
  signUp : (userData) => dispatch(signUpStart(userData))
})

export default connect(null,mapDispatchToProps)(Register);

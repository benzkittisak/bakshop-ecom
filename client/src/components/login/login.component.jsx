import React from "react";
import {connect} from 'react-redux';
import Tab from 'react-bootstrap/Tab';

import { googleSignInStart } from "../../redux/user/user.actions";

import CustomButton from "../../components/custom-button/custom-button.component";

const Login = ({googleSignInStart}) => {
  return (
    <Tab.Pane eventKey={"login"}>
      <div className="login-form-container">
        <div className="login-register-form">
          <form>
            <input type="text" name="username" placeholder="ชื่อผู้ใช้" />
            <input type="password" name="password" placeholder="รหัสผ่าน" />
            <div className="button-container">
              <CustomButton text={"เข้าสู่ระบบ"} type="submit" />
              <CustomButton
                text={"เข้าสู่ระบบด้วย Google"}
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

const mapDispatchToProps = dispatch => ({
    googleSignInStart : () => dispatch(googleSignInStart())
})

export default connect(null , mapDispatchToProps)(Login);

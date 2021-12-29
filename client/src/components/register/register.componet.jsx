import React from "react";
import Tab from "react-bootstrap/Tab";

import CustomButton from "../../components/custom-button/custom-button.component";

const Register = () => {
  return (
    <Tab.Pane eventKey={"register"}>
      <div className="login-form-container">
        <div className="login-register-form">
          <form>
            <input type="text" name="displayName" placeholder="ชื่อบนเว็บ" />
            <input type="text" name="username" placeholder="ชื่อผู้ใช้" />
            <input type="password" name="password" placeholder="รหัสผ่าน" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="ยืนยันรหัสผ่านรหัสผ่าน"
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

export default Register;

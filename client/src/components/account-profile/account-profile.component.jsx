import React, { useState } from "react";
import { connect } from "react-redux";

import { updateDataStart , updateProfileImageStart } from "../../redux/user/user.actions";


import "./account-profile.style.scss";

const AccountProfile = ({ currentUser, updateData , updateImage }) => {
  const [userData, setUserData] = useState(currentUser);
  const { displayName, phoneNumber, dateOfBirth, image } = userData;

  console.log(image);
  // Upload Image
  const [imageAsFile, setImageAsFile] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleImageAsFile = e => {
    const image = e.target.files[0]
    setImageAsFile(imageFile => image)
  }

  const handleFirebaseUoload = e => {
    e.preventDefault();
    
    if(!imageAsFile) {
        console.error('ไม่พบรูปภาพ กรุณาเลือกรูปภาพก่อนอัปโหลด');
        return;
      }
    updateImage(currentUser , imageAsFile);
    // if(!imageAsFile) {
    //   console.error('ไม่พบรูปภาพ กรุณาเลือกรูปภาพก่อนอัปโหลด');
    //   return;
    // }
    // const uploadTask = storage.ref(`images/${currentUser.id}/${imageAsFile.name}`).put();
    // uploadTask.on('state_changed' , (snapShot) => {
    //   console.log(snapShot);
    // } , error => {
    //   console.log(error);
    // } , () => {
    //   storage.ref('images').child(currentUser.id).child(imageAsFile.name).getDownloadURL()
    //   .then(firebaseUrl => {
    //     setImageAsUrl(firebaseUrl)
    //     updateProfileImage(currentUser , firebaseUrl)
    //   })
    // })

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateData(userData);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="profile-header">
            <h4>ข้อมูลของฉัน</h4>
            <span>จัดการข้อมูลส่วนตัวของคุณได้ที่นี่เลย</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 col-md-12 col-12">
          <form onSubmit={handleSubmit} className="pt-5 pb-5">
            <div className="input-group">
              <label htmlFor={displayName}>ชื่อบนเว็บ</label>
              <input
                onChange={handleChange}
                type="text"
                name="displayName"
                value={displayName}
              />
            </div>
            <div className="input-group">
              <label htmlFor={phoneNumber}>หมายเลขโทรศัพท์</label>
              <input
                onChange={handleChange}
                type="text"
                name="phoneNumber"
                value={phoneNumber}
              />
            </div>
            <div className="input-group">
              <label htmlFor={dateOfBirth}>วันเกิด</label>
              <input
                onChange={handleChange}
                type="date"
                name="dateOfBirth"
                value={dateOfBirth}
              />
            </div>
            <button type="submit">บันทึก</button>
          </form>
        </div>
        <div className="col-lg-4 d-none d-lg-block">
          <form onSubmit={handleFirebaseUoload}>
            <img src={image} alt="" className="img-fluid" />
            <input onChange={handleImageAsFile} type="file" name="image" />
            <button type="submit">บันทึก</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateData: (userData) => dispatch(updateDataStart(userData)),
  updateImage:(userData , imageFile) => dispatch(updateProfileImageStart({userData , imageFile}))
});

export default connect(null, mapDispatchToProps)(AccountProfile);

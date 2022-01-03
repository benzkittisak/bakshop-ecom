import React, { useState } from "react";
import { connect } from "react-redux";
import swal from "sweetalert";

import { updateDataStart } from "../../redux/user/user.actions";

import "./account-address-form.style.scss";

const AccountAddressForm = ({
  currentUser,
  popup,
  handlePopup,
  updateData,
}) => {
  
  const [address, setAddress] = useState(currentUser.address);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentUser) {
      console.error("Can't find user data for update!!");
      return;
    }
    updateData({ ...currentUser, address: address });
    swal("สำเร็จ", "คลิกปุ่ม OK เพื่อดำเนินการต่อ", "success");
  };

  const {
    name,
    phoneNumber,
    addressDetail,
    province,
    city,
    subdistrict,
    postNo,
    save
  } = address;

  return (
    <div className={`popup-container ${popup ? "active" : ""}`}>
      <div className={`popup`}>
        <div className="popup-header">
          <h4>เพิ่มที่อยู่</h4>
          <button onClick={handlePopup} type="button">
            <i className="fad fa-times"></i>
          </button>
        </div>
        <form onSubmit={handleSubmit} className="form-update-add">
          <div className="container">
            <input type="hidden" name="save" value={save} />
            <div className="row">
              <div className="form-group col-md-6">
                <label className="form-label" htmlFor="name">
                  ชื่อ-นามสกุล
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-6">
                <label className="form-label" htmlFor="phoneNumber">
                  เบอร์โทรศัพท์
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-6">
                <label className="form-label" htmlFor="subdistrict">
                  ตำบล
                </label>
                <input
                  type="text"
                  name="subdistrict"
                  value={subdistrict}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-6">
                <label className="form-label" htmlFor="city">
                  อำเภอ
                </label>
                <input
                  type="text"
                  name="city"
                  value={city}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-9">
                <label className="form-label" htmlFor="province">
                  จังหวัด
                </label>
                <input
                  type="text"
                  name="province"
                  value={province}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-3">
                <label className="form-label" htmlFor="postNo">
                  รหัสไปรษณีย์
                </label>
                <input
                  type="text"
                  name="postNo"
                  value={postNo}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-12">
                <label className="form-label" htmlFor="city">
                  รายละเอียดที่อยู่
                </label>
                <input
                  className="form-control"
                  name="addressDetail"
                  onChange={handleChange}
                  value={addressDetail}
                />
              </div>
              <div className="form-group-col-md-12">
                <button className="form-control btn btn-primary">
                  บันทึกข้อมูล
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateData: (userAuth) => dispatch(updateDataStart(userAuth)),
});

export default connect(null, mapDispatchToProps)(AccountAddressForm);

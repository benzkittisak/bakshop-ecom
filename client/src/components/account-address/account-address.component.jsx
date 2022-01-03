import React, { Fragment, useState } from "react";

import AccountAddressForm from "../account-address-form/account-address-form.component";

import "./account-address.style.scss";

const AccountAddress = ({ currentUser }) => {
  const [popup, setPopUp] = useState(false);
  if (!currentUser.address) {
    currentUser = Object.assign(
      {},
      {
        ...currentUser,
        address: {
          name: "",
          phoneNumber: "",
          city: "",
          subdistrict: "",
          province: "",
          postNo: "",
          addressDetail: "",
        },
      }
    );
  }

  const handlePopup = () => {
    setPopUp(!popup);
  };

  return (
    <Fragment>
      <div className="account-address-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <div className="address-header">
                <h3>ที่อยู่ของฉัน</h3>
                {currentUser.address ? (
                  ""
                ) : (
                  <button
                    type="button"
                    onClick={handlePopup}
                    className="hvr-sweep-to-right"
                  >
                    เพิ่มที่อยู่
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <div className="address-data">
                <div className="container">
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label className="form-label" htmlFor="name">
                        ชื่อ-นามสกุล
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={currentUser.address.name}
                        readOnly
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
                        value={currentUser.address.phoneNumber}
                        readOnly
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
                        value={currentUser.address.subdistrict}
                        readOnly
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
                        value={currentUser.address.city}
                        readOnly
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
                        value={currentUser.address.province}
                        readOnly
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
                        value={currentUser.address.postNo}
                        readOnly
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
                        readOnly
                        value={currentUser.address.addressDetail}
                      />
                    </div>
                    <div className="form-group-col-md-12">
                      <button
                        onClick={handlePopup}
                        className="form-control btn btn-warning"
                      >
                        แก้ไข
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Section */}
      <AccountAddressForm
        currentUser={currentUser}
        popup={popup}
        handlePopup={handlePopup}
      />
    </Fragment>
  );
};

export default AccountAddress;

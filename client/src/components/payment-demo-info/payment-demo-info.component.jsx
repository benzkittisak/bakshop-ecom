import React from "react";

import './payment-demo-info.style.scss';

const PaymentDemoInfo = () => {
    return(
        <div className="payment-info">
            <div className="payment-info-header">
                <h3>กรุณาใช้ข้อมูลบัตรนี้เพื่อชำระเงิน</h3>
            </div>
            <div className="payment-info-card-number">
                <h2>หมายเลขบัตร : 4242 4242 4242 4242</h2>
            </div>
            <div className="payment-info-additional-section">
                <div className="payment-info-date">
                    <h2>วันหมดอายุ : 12/24</h2>
                </div>
                <div className="payment-info-cvv">
                    <h2>CVV : 999</h2>
                </div>
            </div>
        </div>
    )
}

export default PaymentDemoInfo;
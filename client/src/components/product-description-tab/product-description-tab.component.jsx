import React from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";

import "./product-description-tab.style.scss";

const ProductDescriptionTab = ({ description, reviews }) => {
  const countReview = reviews.length  
  const renderRatingStar = (star) => {
    for (let index = 0; index < star; index++) {
      <i className="fad fa-star"></i>;
    }
  };

  return (
    <div className="description-review-area pb-5">
      <div className="container">
        <div className="description-review-wrapper">
          <Tab.Container defaultActiveKey="productDescription">
            <Nav variant="pill" className="description-review-topbar">
              <Nav.Item>
                <Nav.Link eventKey={"productDescription"}>
                  รายละเอียดสินค้า
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey={"productReviews"}>รีวิวสินค้า ({countReview})</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="description-review-bottom">
              <Tab.Pane eventKey="productDescription">
                <p>{description}</p>
              </Tab.Pane>
              <Tab.Pane eventKey="productReviews">
                <div className="row">
                  <div className="col-md-12 col-lg-12">
                    <div className="review-content">
                      {reviews.length
                        ? reviews.map(
                            ({ name, image, ratingStar, message }) => (
                              <div className="review-wrapper">
                                <div className="single-review">
                                  <div className="review-img">
                                    <img src={image} alt="" />
                                  </div>
                                  <div className="review-top-wrap">
                                    <div className="review-left">
                                      <div className="review-name">
                                        <h4>{name}</h4>
                                      </div>
                                      <div className="review-rating">
                                        {renderRatingStar(ratingStar)}
                                      </div>
                                    </div>
                                    <div className="review-right">
                                      <button>ตอนกลับ</button>
                                    </div>
                                  </div>
                                  <div className="review-bottom">
                                    <p>{message}</p>
                                  </div>
                                </div>
                              </div>
                            )
                          )
                        : "ไม่พบรีวิวสินค้า"}
                    </div>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
};

export default ProductDescriptionTab;

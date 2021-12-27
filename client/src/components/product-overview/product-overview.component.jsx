import React from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";

import SectionTitle from "../section-title/section-title.component";
import {default as ProductGrid} from "../product-grid/product-grid.container";

import "./product-overview.style.scss";

const ProductOverview = ({ category }) => {
  return (
    <div className="product-area pb-60">
      <div className="container">
        <SectionTitle titleText={"สินค้าเด่นวันนี้"} />
        <Tab.Container defaultActiveKey="newArrival">
          <Nav
            variant="pills"
            className="product-tab-list pt-30 pb-55 text-center"
          >
            <Nav.Item>
              <Nav.Link eventKey={"newArrival"}>
                <h4>สินค้ามาใหม่</h4>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={"bestSeller"}>
                <h4>สินค้าขายดี</h4>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={"saleItems"}>
                <h4>สินค้าลดราคา</h4>
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey={"newArrival"}>
              <div className="row">
                  <ProductGrid category={category} type="new" limit={8}/>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
};

export default ProductOverview;

import React from "react";

import ProductGridContainer from "../product-grid/product-grid.container";

import './shop-product.style.scss';

const ShopProduct = ({product}) => {

    return (
        <div className="shop-bottom-area mt-5">
            <div className="row">
                <ProductGridContainer col={3} plants={product} isDisable/>
            </div>
        </div>
    )
}

export default ShopProduct;
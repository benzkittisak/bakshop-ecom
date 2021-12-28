import React from "react";

import ProductGridList from "../product-grid-list/product-grid-list.component";

import './shop-product.style.scss';

const ShopProduct = ({product , layout}) => {

    return (
        <div className="shop-bottom-area mt-5">
            <div className={`row ${layout ? layout : ''}`}>
                <ProductGridList product={product} />
            </div>
        </div>
    )
}

export default ShopProduct;
import React , {Fragment} from "react";

import ProductGridListSingle from "../product-grid-list-single/product-grid-list-single.component";

import './product-grid-list.style.scss';

const ProductGridList =({product}) => {
    return(
        <Fragment>
            {product.length > 0 ?product.map(item => (
                <ProductGridListSingle product={item} key={item.id} />
            )) : (<h2 style={{textAlign:"center"}}>ไม่พบสินค้าที่คุณต้องการ</h2>)}
        </Fragment>
    )
}
export default ProductGridList;
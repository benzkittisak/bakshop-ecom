import React , {Fragment} from "react";

import ProductGridListSingle from "../product-grid-list-single/product-grid-list-single.component";

import './product-grid-list.style.scss';

const ProductGridList =({product}) => {
    return(
        <Fragment>
            {product.map(item => (
                <ProductGridListSingle product={item} key={item.id} />
            ))}
        </Fragment>
    )
}
export default ProductGridList;
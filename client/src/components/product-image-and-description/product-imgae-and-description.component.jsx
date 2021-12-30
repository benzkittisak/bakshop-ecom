import React from "react";

import ProductImageGallery from "../product-image-gallery/product-image-gallery.component";
import ProductDescription from "../product-description/product-description.component";

// Component Style
import './product-imgae-and-description.style.scss';

const ProductImageAndDescription = ({product}) => {
    return(
        <div className="shop-area pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <ProductImageGallery product={product}/>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <ProductDescription product={product}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductImageAndDescription;
import React , {Fragment} from "react";
import { connect } from "react-redux";

import { selectSearchCollection } from "../../redux/shop/shop.selector";

import ProductImageAndDescription from "../../components/product-image-and-description/product-imgae-and-description.component";
import ProductDescriptionTab from "../../components/product-description-tab/product-description-tab.component";
import RelatedProductSlider from "../../components/related-product-slider/related-product-slider.component";

import './product.style.scss';

const ProductPage = ({plant}) => {
    let {description , reviews} = Object.assign({} , ...plant)
    if(reviews === undefined) reviews = [];
    return(
        <Fragment>
            <ProductImageAndDescription product={plant}/>
            <ProductDescriptionTab description={description} reviews={reviews} />
            <RelatedProductSlider category={'houseplants'}/>
        </Fragment>
    )
}

const mapStateToProps = (state , ownProps) => ({
    plant:selectSearchCollection(Object.values(ownProps.params).toString())(state)
})

export default connect(mapStateToProps)(ProductPage);
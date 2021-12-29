import React from "react";
import { connect } from "react-redux";

import { selectSearchCollection } from "../../redux/shop/shop.selector";

import './product.style.scss';

const ProductPage = ({plant}) => {
    const {name , imageUrl , price , description , showImage} = plant
    return(
        <div>
            
        </div>
    )
}

const mapStateToProps = (state , ownProps) => ({
    plant:selectSearchCollection(Object.values(ownProps.params).toString())(state)
})

export default connect(mapStateToProps)(ProductPage);
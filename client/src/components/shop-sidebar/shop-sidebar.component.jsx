import React from "react";

import ShopSearch from "../shop-search/shop-search.component";
import ShopSidebarCategory from "../shop-sidebar-category/shop-sidebar-category.component";

import { getIndividualCategories } from "../../assets/utils/product";

import './shop-sidebar.style.scss';

const ShopSidebar = ({product , getSortParams}) => {

    const categories = getIndividualCategories(product)
    return(
        <div className="sidebar-style">
            <ShopSearch/>
            <ShopSidebarCategory categories={categories} getSortParams={getSortParams}/>
        </div>
    )
}

export default ShopSidebar;
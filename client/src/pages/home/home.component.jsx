import React, { Fragment , lazy } from "react";
import MetaTags from 'react-meta-tags'
import './home.style.scss';

// Layouts
import Layout from "../../layouts/layouts.component";

// Component
import SliderSection from "../../components/slider-section/slider-section.component";
import FeatureIcon from "../../components/feature-icon/feature-icon.component";
import ProductOverview from "../../components/product-overview/product-overview.component";
import CategoryFeatureContainer from "../../components/category-feature/category-feature.container";


const HomePage = () => {
    return(
        <Fragment>
            <MetaTags>
                <title>BakShop</title>
            </MetaTags>
            <Layout>
                <SliderSection/>
                <FeatureIcon/>
                <ProductOverview category={'houseplants'}/>
                <CategoryFeatureContainer/>
            </Layout>
        </Fragment>
    )
}

export default HomePage
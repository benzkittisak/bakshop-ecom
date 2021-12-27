import React, { Fragment } from "react";
import MetaTags from 'react-meta-tags'
import './home.style.scss';

// Layouts
import Layout from "../../layouts/layouts.component";

// Component
import SliderSection from "../../components/slider-section/slider-section.component";
import FeatureIcon from "../../components/feature-icon/feature-icon.component";
import ProductOverview from "../../components/product-overview/product-overview.component";

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
            </Layout>
        </Fragment>
    )
}

export default HomePage
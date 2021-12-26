import React, { Fragment } from "react";
import MetaTags from 'react-meta-tags'
import './home.style.scss';

// Layouts
import Layout from "../../layouts/layouts.component";
const HomePage = () => {
    return(
        <Fragment>
            <MetaTags>
                <title>BakShop</title>
            </MetaTags>
            <Layout>
                
            </Layout>
        </Fragment>
    )
}

export default HomePage
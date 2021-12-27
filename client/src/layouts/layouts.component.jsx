import React, { Fragment } from "react";

// Components
import Header from "../components/header/header.component";
import Footer from "../components/footer/footer.component";

const Layout = ({children}) => {
    return(
        <Fragment>
            <Header/>
                {children}
            <Footer
            backgroundColor="bg-gray"
            spaceTop="pt-100"
            spaceBottom="pb-70"
            />
        </Fragment>
    )
}

export default Layout;
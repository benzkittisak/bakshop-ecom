import React from "react";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Link, useLocation } from "react-router-dom";

import "./breadcrumbs.style.scss";

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();
  const location = useLocation();
  return (
    <div className="breadcrumbs">
      {breadcrumbs.map(({ breadcrumb, match }) => (
        <Link
          key={match.pathname}
          className={`${location.pathname === breadcrumb.key ? "active" : ""}`}
          to={match.pathname}
        >
          {breadcrumb}
        </Link>
      ))}
    </div>
  );
};

export default Breadcrumbs;
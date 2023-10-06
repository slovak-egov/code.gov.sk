import React from "react";
import { Helmet } from "react-helmet";

import { Footer } from "../Footer/Footer";
import Header from "../Header/Header";

interface IAppLayoutProps {
  title?: string;
  children?: React.ReactElement;
}

export const AppLayout: React.FC<IAppLayoutProps> = ({ title, children }) => {
  return (
    <>
      {title && (
        <Helmet>
          <title>{title} | code.gov.sk</title>
        </Helmet>
      )}

      <Header title={title} />
      {children}
      <Footer />
    </>
  );
};

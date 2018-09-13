import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
/* eslint-disable */
import normalize from 'normalize.css';
import '../styles/index.css';
import '../styles/fonts.css';
import PrimaryFooter from '../components/PrimaryFooter/PrimaryFooter';
import PrimaryHeader from '../components/PrimaryHeader/PrimaryHeader';

const Layout = ({ children, data }) => (
  <div>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <link
        href="https://portal.nrs.gov.bc.ca/nrs-portal-theme/images/favicon.ico"
        rel="icon"
        type="image/x-icon"
      />
    </Helmet>
    <PrimaryHeader />
    {children()}
    <PrimaryFooter>
      <p>this is the footer</p>
    </PrimaryFooter>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func.isRequired,
};

export const LayoutQuery = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default Layout;

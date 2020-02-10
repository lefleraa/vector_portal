import React from 'react';

import moment from 'moment';

import { Footer, FooterColumn, FooterBtn, FooterDot } from 'uui_kit';

class SiteFooter extends React.Component {
  render() {
    let self = this;

    const { umbrella } = self.props;

    return (
      <Footer
        umbrella_logo_src={umbrella && umbrella.logoSrc}
        umbrella_title={umbrella && umbrella.title}
        copyright={moment().format('YYYY')}
      >
        <FooterColumn centered>
          <FooterBtn text="Terms of Use" href="#" />
          <FooterDot />
          <FooterBtn
            text="Privacy Policy"
            href="https://www.vectorsolutions.com/privacy-policy/"
            newTab
          />
        </FooterColumn>
      </Footer>
    );
  }
}

export default SiteFooter;

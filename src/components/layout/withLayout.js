import React, { Component } from 'react';
import SiteWrapper from './SiteWrapper';
import { PageWrapper } from 'uui_kit';

// Used as a display name for the debugger.
function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

// TODO: Confirm the required defaults here.
const default_wrapperConfig = {
  brand: {},
  umbrella: {},
  dist: {},
  user: {},
  pageTitle: 'SafeSchools Training',
  pageIcon: undefined,
  pageDescription: 0,
  pageTitleBefore: {},
  pageTitleAfter: {},
  showPageTitle: true,
  showPageScrollTitle: true,
  showFooter: true,
  hasSideNav: true,
};

// HOC for adding the UUI_KIT powered site wrapper.
export const withLayout = (WrappedComponent, passed_defaultWrapperConfig) => {
  const defaultWrapperConfig = {
    ...default_wrapperConfig,
    ...passed_defaultWrapperConfig,
  };

  class WithLayout extends Component {
    render() {
      const {
        wrapper_config,
        content_config,
        ...passThroughProps
      } = this.props;
      const wrapperConfig = { ...defaultWrapperConfig, ...wrapper_config };
      const { tabs } = wrapperConfig.wrapper || {};
      return (
        <SiteWrapper {...wrapperConfig}>
          <PageWrapper tabs={tabs}>
            <WrappedComponent {...passThroughProps} {...content_config} />
          </PageWrapper>
        </SiteWrapper>
      );
    }
  }
  // Allows for easier debugging.
  WithLayout.displayName = `WithLayout(${getDisplayName(WrappedComponent)})`;
  return WithLayout;
};

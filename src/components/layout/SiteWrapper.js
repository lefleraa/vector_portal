import React, { Fragment } from 'react';
import { isEmpty } from 'lodash-es';
import {
  WrapperWithMenuProvider,
  PageTitle,
  PageScrollTitle,
  HidingButton,
  HidingButtonMain,
  HidingButtons,
  Icon,
} from 'uui_kit';

import { SiteSideNav, SiteTopBar, SiteFooter } from '.';

const SiteWrapper = ({
  title,
  description,
  brand,
  umbrella,
  dist,
  user,
  pageIcon,
  pageTitleBefore,
  pageTitleAfter,
  pageScrollTitleTop,
  showPageTitle,
  showPageScrollTitle,
  showFooter,
  hasSideNav,
  hasTopBar,
  children,
  contact,
  ui,
  root_url,
}) => {
  // Since topbar displays when side nav is hidden,
  // the scroll-along page title needs to display directly
  // beneath the top bar, aka 70px.
  let scrollTitlePosition =
    typeof pageScrollTitleTop !== 'undefined' ? pageScrollTitleTop : 0;

  return (
    <WrapperWithMenuProvider hasTopBar={hasTopBar} hasSideNav={hasSideNav}>
      {/************************************
       ** HIDING BUTTONS:                  **
       **************************************
       ** These buttons only display when  **
       ** focused. <HidingButtonMain /> is **
       ** the bypass navigation block btn. **
       ************************************/}

      <HidingButtons>
        <HidingButtonMain />
        <HidingButton text="Site Map" href="#" />
      </HidingButtons>

      {/************************************
       ** TOP BAR:                         **
       **************************************
       ** SiteTopBar always is present     **
       ** as it is needed on mobile view   **
       ************************************/}

      <SiteTopBar brand={brand} umbrella={umbrella} dist={dist} user={user} />

      {/*************************************
       ** SIDE NAV:                         **
       *************************************/}

      {hasSideNav && (
        <SiteSideNav
          brand={brand}
          umbrella={umbrella}
          dist={dist}
          user={user}
        />
      )}

      {/*************************************
       ** PAGE TITLE:                       **
       *************************************/}

      {!!(title && showPageTitle) && (
        <Fragment>
          <PageTitle
            before={
              pageIcon ? (
                <Icon
                  icon={[pageIcon[1], pageIcon[0]]}
                  size="2x"
                  fw
                  className="u-color-white u-opacity-6"
                />
              ) : !!(pageTitleBefore && !isEmpty(pageTitleBefore)) ? (
                pageTitleBefore
              ) : (
                false
              )
            }
            after={
              !!(pageTitleAfter && !isEmpty(pageTitleAfter))
                ? pageTitleAfter
                : false
            }
            pageTitle={title}
            pageDescription={description}
          />
          {!!showPageScrollTitle && (
            <PageScrollTitle
              top={scrollTitlePosition}
              pageTitle={title}
              before={
                pageIcon && (
                  <Icon
                    icon={[pageIcon[1], pageIcon[0]]}
                    fw
                    className="u-color-white u-opacity-5"
                  />
                )
              }
            />
          )}
        </Fragment>
      )}

      {/*************************************
       ** PAGE CONTENT:                     **
       *************************************/}

      {children}

      {/*************************************
       ** FOOTER:                           **
       *************************************/}

      {!!showFooter && (
        <SiteFooter
          brand={brand}
          umbrella={umbrella}
          dist={dist}
          user={user}
          contact={contact}
          ui={ui}
          root_url={root_url}
        />
      )}
    </WrapperWithMenuProvider>
  );
};

export default SiteWrapper;

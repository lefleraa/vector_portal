import React from 'react';
import {
  TopBar,
  TopBarSpace,
  TopBarBrandLogo,
  TopBarUmbrellaLogo,
  MenuToggle,
  Avatar,
  useSiteMenuValue,
} from 'uui_kit';

const SiteTopBar = ({ brand, umbrella, user }) => {
  const [state, dispatch] = useSiteMenuValue();
  return (
    <TopBar>
      <TopBarSpace collapsed className="visible-xs">
        <MenuToggle handleMenuToggle={() => dispatch({ type: 'toggle' })} />
      </TopBarSpace>
      {!!brand && (
        <TopBarSpace>
          <TopBarBrandLogo
            name={brand.title}
            logo_src={brand.logoSrc}
            href={brand.href || '/'}
          />
        </TopBarSpace>
      )}
      {!!umbrella && (
        <TopBarSpace collapsed className="hidden-xs">
          <TopBarUmbrellaLogo
            name={umbrella.title}
            pre_text="Powered by"
            logo_src={umbrella.logoSrc}
            href={umbrella.href || '/'}
          />
        </TopBarSpace>
      )}
      {!!user && (
        <TopBarSpace collapsed className="u-pl-3">
          <span title="">
            <Avatar margin="u-m-0" person={user.full_name} />
          </span>
        </TopBarSpace>
      )}
    </TopBar>
  );
};

SiteTopBar.defaultProps = {
  brand: {},
  umbrella: {},
  user: {},
};

export default SiteTopBar;

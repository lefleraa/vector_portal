import React from 'react';
import {
  SideNav,
  Dismiss,
  BrandLogo,
  NavWrap,
  Nav,
  NavItem,
  LogOut,
  Icon,
  Badge,
  useSiteMenuValue,
} from 'uui_kit';

const MenuIcon = ({ icon, active }) => {
  if (icon) return <Icon icon={icon} color={active ? 'primary' : 'gray'} fw />;
  return null;
};

const GeneralMenu = () => {
  return (
    <Nav label="Apps">
      {/*
        You can apply to a NavItem the prop 'to' which converts the component into a NavLink.
        This is if you want to use 'react-router-dom' for your navigation (which you'll have to
        include in App.js). Otherwise, you can use basic routing with independent apps
        (using shared components) on each page.

        All docs apply.
        https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/NavLink.md
      */}
      <NavItem
        text="All Apps"
        href={`/demo`}
        before={<MenuIcon icon={['far', 'grip-horizontal']} active />}
      />
      <NavItem
        text="My Apps"
        href={`/demo`}
        before={<MenuIcon icon={['far', 'home']} />}
        after={
          <Badge className="u-text-bold" color="primary" light>
            3
          </Badge>
        }
      />
      <NavItem
        text="Free Trials"
        href={`/demo`}
        before={<MenuIcon icon={['far', 'badge-dollar']} />}
      />
      <NavItem
        text="Mobile"
        href={`/demo`}
        before={<MenuIcon icon={['far', 'mobile-alt']} />}
      />
    </Nav>
  );
};

const CategoryMenu = () => {
  return (
    <Nav menuTitle="Categories">
      <NavItem
        text="Career Development"
        href={`/demo`}
        before={<MenuIcon icon={['far', 'play-circle']} />}
      />
      <NavItem
        text="EHS Management"
        href={`/demo`}
        before={<MenuIcon icon={['far', 'ticket-alt']} />}
      />
      <NavItem
        text="Scheduling"
        href={`/demo`}
        before={<MenuIcon icon={['far', 'calendar-alt']} />}
      />
      <NavItem
        text="Asset & Inventory Management"
        href={`/demo`}
        before={<MenuIcon icon={['far', 'clipboard-list-check']} />}
      />
    </Nav>
  );
};

const ResourceMenu = () => {
  return (
    <Nav menuTitle="Resources">
      <NavItem
        text="Help"
        href={`/demo`}
        before={<MenuIcon icon={['far', 'question-circle']} />}
      />
      <NavItem
        text="Accessibility Statement"
        href={`/demo`}
        before={<MenuIcon icon={['far', 'universal-access']} />}
      />
    </Nav>
  );
};

const SiteSideNav = ({ brand, user }) => {
  const [state, dispatch] = useSiteMenuValue();
  return (
    <SideNav>
      <Dismiss
        closeNav={() => {
          dispatch({ type: 'close' });
        }}
      />
      {brand && (
        <BrandLogo
          name={brand.title}
          logo_src={brand.logoSrc}
          href={brand.logoHref || '/'}
        />
      )}
      <NavWrap>
        <GeneralMenu />
        <CategoryMenu />
        <ResourceMenu />
      </NavWrap>
      <LogOut personName={user.full_name} href="#" />
    </SideNav>
  );
};

export default SiteSideNav;

import React from 'react';
import classNames from 'classnames';
import { Icon, Btn, DropMenu, BtnWrap } from 'uui_kit';

const SuiteDropMenuItem = ({ children, className, ...rest }) => {
  // BtnWrap can recieve a standard href as well as a to prop
  // as used by react-router-dom NavLink.
  // It can also use any typical event (e.g. onClick)
  // You can apply all props directly to the SuiteDropMenuItem component
  // and they will apply themselves directy to BtnWrap.
  return (
    <BtnWrap
      className={classNames(
        'col-xs-4 u-p-0 u-fixed-ratio-1_1 u-pos-relative hiding-parent',
        className
      )}
      {...rest}
    >
      <div className="content u-text-center">
        <div
          className="u-pos-absolute u-opacity-1 u-overflow-hidden u-border-radius-7 hidden-xs"
          style={{ left: 0, top: 0, height: '100%', width: '100%' }}
        >
          <div className="color-overlay primary hiding-child"></div>
        </div>
        <div className="u-absolute-center u-text-ellipsis">{children}</div>
      </div>
    </BtnWrap>
  );
};

const SuiteDropMenu = ({ id, ...rest }) => {
  return (
    <DropMenu id={id || 'suite_drop_menu'} {...rest}>
      <DropMenu.Toggle bsRole="toggle">
        <Btn variant="secondary-dark" icon={['fa', 'th']} size="lg" />
      </DropMenu.Toggle>

      <DropMenu.Menu
        bsRole="menu"
        className="clearfix u-border-0 u-overflow-hidden u-p-2 dropdown-menu-right u-width-7"
      >
        <SuiteDropMenuItem>
          <Icon icon={['fal', 'smile']} size="2x" color="primary" />
          <div className="small u-text-bold u-mt-1">Smile</div>
        </SuiteDropMenuItem>
        <SuiteDropMenuItem>
          <Icon icon={['fal', 'smile-wink']} size="2x" color="secondary" />
          <div className="small u-text-bold u-mt-1">Smile Wink</div>
        </SuiteDropMenuItem>
        <SuiteDropMenuItem>
          <Icon icon={['fal', 'tired']} size="2x" color="tertiary" />
          <div className="small u-text-bold u-mt-1">Tired</div>
        </SuiteDropMenuItem>
        <SuiteDropMenuItem>
          <Icon icon={['fal', 'sad-tear']} size="2x" color="quat" />
          <div className="small u-text-bold u-mt-1">Sad Tear</div>
        </SuiteDropMenuItem>
        <SuiteDropMenuItem>
          <Icon icon={['fal', 'meh-blank']} size="2x" color="quin" />
          <div className="small u-text-bold u-mt-1">Meh...</div>
        </SuiteDropMenuItem>
        <SuiteDropMenuItem>
          <Icon icon={['fal', 'laugh']} size="2x" color="primary" />
          <div className="small u-text-bold u-mt-1">Laugh</div>
        </SuiteDropMenuItem>
        <SuiteDropMenuItem>
          <Icon icon={['fal', 'kiss-beam']} size="2x" color="tertiary" />
          <div className="small u-text-bold u-mt-1">Kiss</div>
        </SuiteDropMenuItem>
        <SuiteDropMenuItem>
          <Icon icon={['fal', 'grin-tongue-wink']} size="2x" color="quat" />
          <div className="small u-text-bold u-mt-1">Grin Wink</div>
        </SuiteDropMenuItem>
        <SuiteDropMenuItem>
          <Icon icon={['fal', 'grin-squint-tears']} size="2x" color="quin" />
          <div className="small u-text-bold u-mt-1">Qrin Tears</div>
        </SuiteDropMenuItem>
        <SuiteDropMenuItem>
          <Icon icon={['fal', 'dizzy']} size="2x" color="primary" />
          <div className="small u-text-bold u-mt-1">Dizzy</div>
        </SuiteDropMenuItem>
      </DropMenu.Menu>
    </DropMenu>
  );
};

export { SuiteDropMenu, SuiteDropMenuItem };

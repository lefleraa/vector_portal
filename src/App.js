import React from 'react';
import './static/stylesheets/_css/App.css';

import { HomePage, DetailPage } from 'components/pages';
import { SuiteDropMenu } from 'components/fragments';
import { Icon, Btn } from 'uui_kit';

import siteConfig from 'static/js/siteConfig.js';

const App = () => {
  return (
    <>
      <HomePage
        wrapper_config={{
          title: 'All Apps',
          description:
            'Lorem ipsum dolor sit amet consectatur adipiscing elit.',
          pageTitleBefore: (
            <Icon
              icon={['fal', 'grip-horizontal']}
              size="2x"
              fw
              className="u-color-white u-opacity-6"
            />
          ),
          pageTitleAfter: <SuiteDropMenu />,
          ...siteConfig,
        }}
      />
      {/* <DetailPage
        wrapper_config={{
          title: (
            <span className="u-text-italic u-text-bold">IndustrySafe</span>
          ),
          description: 'Streamline the way you improve workplace safety.',
          pageTitleBefore: (
            <Btn variant="subtle" className="u-color-white u-p-0" href="#">
              <Icon icon={['far', 'arrow-left']} fw size="lg" />
            </Btn>
          ),
          pageTitleAfter: <SuiteDropMenu />,
          ...siteConfig,
        }}
      /> */}
    </>
  );
};

export default App;

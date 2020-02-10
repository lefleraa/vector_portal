import React from 'react';
import classNames from 'classnames';
import {
  Heading,
  DetailHeading,
  Group,
  Tile,
  Flex,
  Icon,
  BtnWrap,
  Btn,
  Badge,
} from 'uui_kit';
import { withLayout } from 'components/layout';

const ProductDetailCard = ({ logoSrc, title }) => {
  return (
    <BtnWrap
      className="u-mb-1 u-width-p-12"
      onClick={() => console.log(`clicked ${title}`)}
    >
      <Tile
        margin="u-mb-0"
        padding="u-pl-3 u-pr-3 u-pt-2 u-pb-2"
        className="floating-tile-hover"
      >
        <Flex>
          <Flex.Col padding="u-p-0" alignment="middle">
            <Heading
              className="u-color-secondary u-text-italic u-m-0"
              level={3}
              bold
            >
              {title}
            </Heading>
          </Flex.Col>
          <Flex.Col
            padding="u-p-0 u-pl-3"
            alignment="middle"
            collapsed
            className="u-text-right"
          >
            <Icon icon={['fal', 'arrow-right']} color="gray-darkest" />
          </Flex.Col>
        </Flex>
      </Tile>
    </BtnWrap>
  );
};

const Hero = ({ children, background = {}, ...rest }) => {
  return (
    <div
      className={classNames(
        'u-border-radius-10 u-border-1 u-pos-relative u-overflow-hidden',
        'u-p-7 u-mb-5 u-hover-grow-1 u-cursor-pointer'
      )}
      style={{
        minHeight: 200,
        backgroundImage: `url('${background.img}')`,
        backgroundSize: background.size || 'cover',
        backgroundPosition: background.position || '50%',
      }}
      {...rest}
    >
      <div className="color-overlay dark light"></div>
      <div className="u-pos-relative">{children}</div>
    </div>
  );
};

const FeatureCard = ({ icon, heading, description }) => {
  let iconLib = !!icon && (icon[0] || 'far');
  let iconChar = !!icon && (icon[1] || 'square');
  let iconColor = !!icon && (icon[2] || 'primary');
  return (
    <Tile clean className="u-overflow-hidden">
      <Flex>
        {!!icon && (
          <Flex.Col padding="u-p-0 u-pr-3" alignment="middle" collapsed>
            <div
              className={classNames(
                'u-fixed-ratio-1_1 u-border-radius-4',
                iconColor && `u-bg-${iconColor}-light`
              )}
              style={{ width: 52 }}
            >
              <div className="content u-text-center">
                <div className="u-absolute-center">
                  <Icon
                    icon={[iconLib, iconChar]}
                    size="lg"
                    color={iconColor}
                    fw
                  />
                </div>
              </div>
            </div>
          </Flex.Col>
        )}
        <Flex.Col padding="u-p-0" alignment="middle">
          <p
            className="lead u-mb-0 u-line-clamp-1"
            title={heading}
            style={{
              lineHeight: '1.4em',
              maxHeight: '2.8em',
            }}
          >
            {heading}
          </p>
          <p
            className="small u-mb-0 u-mt-1 u-line-clamp-2"
            title={description}
            style={{
              lineHeight: '1.4em',
              maxHeight: '2.8em',
            }}
          >
            {description}
          </p>
        </Flex.Col>
      </Flex>
    </Tile>
  );
};

const OverviewAndFeatures = () => {
  return (
    <>
      <Group
        components={{
          heading: (
            <DetailHeading className="u-mb-1">
              Overview and Key Features
            </DetailHeading>
          ),
        }}
        className="u-mb-5"
      >
        <p className="u-mb-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id autem quam
          doloribus explicabo recusandae quibusdam in, itaque officia error,
          commodi distinctio rerum illum magnam deleniti dolorem voluptatibus
          quia, corporis ipsa? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Id autem quam doloribus explicabo recusandae
          quibusdam in, itaque officia error, commodi distinctio rerum illum
          magnam deleniti dolorem voluptatibus quia, corporis ipsa?
        </p>
      </Group>

      <Group label="Key Features" className="u-mb-5">
        <div className="row">
          <div className="col-sm-6">
            <FeatureCard
              icon={['far', 'battery-bolt', 'primary']}
              heading="Has Lightning Bolts!!!"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id autem quam doloribus explicabo recusandae quibusdam in, itaque officia error, commodi distinctio."
            />
          </div>
          <div className="col-sm-6">
            <FeatureCard
              icon={['far', 'surprise', 'quat']}
              heading="Surprises you with how good it is when you use it all the time!!!"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id autem quam doloribus explicabo recusandae quibusdam in, itaque officia error, commodi distinctio."
            />
          </div>
          <div className="col-sm-6">
            <FeatureCard
              icon={['far', 'sword', 'tertiary']}
              heading="Makes you feel rather epic!"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id autem quam doloribus explicabo recusandae quibusdam in, itaque officia error, commodi distinctio."
            />
          </div>
          <div className="col-sm-6">
            <FeatureCard
              icon={['far', 'socks', 'secondary']}
              heading="Comes with a pair of socks!"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id autem quam doloribus explicabo recusandae quibusdam in, itaque officia error, commodi distinctio."
            />
          </div>
        </div>
      </Group>
    </>
  );
};

const ProductDetails = () => {
  const info = [
    { title: 'WCAG Compliant', available: true },
    { title: 'Mobile Friendly', available: true },
    { title: '3 Languages', available: true },
    { title: 'Free Demo', available: true },
  ];

  return (
    <>
      <Group
        components={{
          heading: <DetailHeading className="u-mb-1">Categories</DetailHeading>,
        }}
        className="u-mb-5"
      >
        <Badge
          color="gray"
          inverted
          className="u-text-bold u-m-0 u-mr-1 u-mb-1"
          size="lg"
        >
          <Icon icon={['fal', 'ticket-alt']} className="u-mr-1" fw />
          EHS Management
        </Badge>
        <Badge
          color="gray"
          inverted
          className="u-text-bold u-m-0 u-mr-1 u-mb-1"
          size="lg"
        >
          <Icon icon={['fal', 'clipboard-list-check']} className="u-mr-1" fw />
          Asset & Inventory Management
        </Badge>
      </Group>
      {!!info && info.length && (
        <Group
          components={{
            heading: (
              <DetailHeading className="u-mb-1">Information</DetailHeading>
            ),
          }}
          className="u-mb-5"
        >
          {info.map((info, i) => (
            <Flex className="u-mb-1">
              <Flex.Col alignment="middle" padding="u-p-0" collapsed>
                <Icon
                  icon={['fa', 'check-circle']}
                  color="confirm"
                  className={`u-opacity-${i < 3 ? 10 - 2 * i : '4'}`}
                />
              </Flex.Col>
              <Flex.Col alignment="middle" padding="u-p-0">
                {info.title}
              </Flex.Col>
            </Flex>
          ))}
        </Group>
      )}
      <Group
        components={{
          heading: (
            <DetailHeading className="u-mb-1">Integrations</DetailHeading>
          ),
        }}
        className="u-mb-5"
      >
        <ProductDetailCard
          title="RedVector"
          logoSrc="https://cdn-assets-cloud.frontify.com/local/frontify/eyJwYXRoIjoiXC9wdWJsaWNcL3VwbG9hZFwvc2NyZWVuc1wvMTY4MDM5XC85ZTY0N2ZmYTg1NDlmMGYwNWE1MTk4Yzg4MGUwNWZiOC0xNTcwNjUxMzAxLnBuZyJ9:frontify:XG-zLlTNjPEq2Ij0NQYEaUJxRIm10nMkm__IpkDbb9A?width=1596"
        />
        <ProductDetailCard
          title="TargetSolutions"
          logoSrc="https://cdn-assets-cloud.frontify.com/local/frontify/eyJwYXRoIjoiXC9wdWJsaWNcL3VwbG9hZFwvc2NyZWVuc1wvMTY4MDM5XC8xNDRiZjU5MzgzM2JkY2Q2ODRiMWM3MWU4OTEwZjNkNS0xNTY3NjQxNDgyLnBuZyJ9:frontify:2-1GUc4wkriw-udmN_-VQOInFprOTyOTtkbQ0Mxiu1s?width=1596"
        />
      </Group>
      <Group
        components={{
          heading: (
            <DetailHeading className="u-mb-1">Related Apps</DetailHeading>
          ),
        }}
        className="u-mb-5"
      >
        <ProductDetailCard
          title="SafeSchools Alert"
          logoSrc="https://cdn-assets-cloud.frontify.com/local/frontify/eyJwYXRoIjoiXC9wdWJsaWNcL3VwbG9hZFwvc2NyZWVuc1wvMTY4MDM5XC8wMWRjODI2Y2M1YTNiMDQwOGQyMDFjYzJkMGYyNmNkMi0xNTY3NjQyNzMxLnBuZyJ9:frontify:oIR_bV_BvP7AAoxdUuATyOijs3pOWZm2cM5f_pmXAuc?width=798"
        />
      </Group>
      <Group
        components={{
          heading: (
            <DetailHeading className="u-mb-1">Stay Connected</DetailHeading>
          ),
        }}
        className="u-mb-5"
      >
        <BtnWrap
          href="#"
          className="u-color-gray-darker u-hover-color-primary u-mr-2"
        >
          <Icon icon={['fab', 'facebook-square']} size="2x" fw />
        </BtnWrap>
        <BtnWrap
          href="#"
          className="u-color-gray-darker u-hover-color-primary u-mr-2"
        >
          <Icon icon={['fab', 'twitter']} size="2x" fw />
        </BtnWrap>
      </Group>
    </>
  );
};

const DetailPage = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-8">
          <Hero
            background={{
              img:
                'https://i.pinimg.com/originals/03/bf/a8/03bfa8cdc5451e3c96463c0d9e6e22d2.jpg',
              size: '125%',
              position: '0 50%',
            }}
            onClick={() => console.log('clicked Hero')}
          >
            <div className="row">
              <div className="col-sm-8">
                <Heading inverted bold className="u-mb-0">
                  <span
                    style={{
                      textShadow: '1px 1px 1px rgba(0, 0, 0, 0.3)',
                    }}
                  >
                    A More Effective Way to Manage Safety Data
                  </span>
                </Heading>
                <Btn
                  href="#"
                  variant="primary-dark"
                  className="u-mt-7 u-m-0"
                  size="lg"
                >
                  More Details
                  <Icon icon={['fal', 'arrow-right']} className="u-ml-1" />
                </Btn>
              </div>
            </div>
          </Hero>

          <OverviewAndFeatures />
        </div>
        <div className="col-md-4 col-lg-3 col-lg-offset-1">
          <ProductDetails />
        </div>
      </div>
    </>
  );
};

export default withLayout(DetailPage);

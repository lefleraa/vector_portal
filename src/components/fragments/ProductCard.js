import React from 'react';
import classNames from 'classnames';
import { Tile, Flex, Icon, Btn } from 'uui_kit';

const ProductCard = ({ product }) => {
  const categoryIcon = resolveIcon(product.category);
  const callToAction = resolveCallToAction(product);

  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <Tile padding="u-p-0" className="floating-tile-hover">
        <div
          className={classNames(
            'u-border-b-1 u-border-color-gray-lightest',
            'u-p-3 u-pos-relative'
          )}
        >
          <Flex>
            <Flex.Col padding="u-p-0" alignment="middle">
              <img
                src={product.logoSrc}
                alt={`${product.title} Logo`}
                style={{ maxWidth: '100%', maxHeight: 75 }}
                className={classNames(!!product.details && 'u-cursor-pointer')}
                onClick={
                  !!product.details
                    ? () => console.log(`clicked image, id:${product.id}`)
                    : null
                }
              />
            </Flex.Col>
            {!!categoryIcon && (
              <Flex.Col
                padding="u-pl-3 u-pr-0"
                alignment="middle"
                className="u-text-right"
                collapsed
              >
                <Icon icon={categoryIcon} color="gray" fw />
              </Flex.Col>
            )}
          </Flex>
        </div>
        <div
          className={classNames(
            'u-border-b-1 u-border-color-gray-lightest',
            'u-p-3 u-pos-relative'
          )}
        >
          <p
            className={classNames(
              'lead u-m-0 u-text-ellipsis',
              !!product.details && 'u-hover-color-primary u-cursor-pointer'
            )}
            title={product.title}
            onClick={
              !!product.details ? () => console.log('clicked title') : null
            }
          >
            {product.title}
          </p>
          <p
            className="u-mb-0 u-mt-2 small u-text-bold u-color-gray-dark u-line-clamp-2"
            title={product.description}
            style={{
              lineHeight: '1.2em',
              maxHeight: '2.3em',
              minHeight: '2.3em',
            }}
          >
            {product.description}
          </p>
        </div>
        <div style={{ minHeight: 80 }} className="u-p-3">
          <div className="row">
            <div className="col-xs-6">
              {!!product.details && (
                <Btn
                  variant="subtle"
                  text="Details"
                  block
                  className="u-pl-0 u-pr-0"
                  onClick={() => console.log('clicked details')}
                />
              )}
            </div>
            <div className="col-xs-6">
              <Btn {...callToAction} className="u-pl-0 u-pr-0" block />
            </div>
          </div>
        </div>
      </Tile>
    </div>
  );
};

function resolveIcon(category) {
  switch (category) {
    case 'career-development':
      return ['far', 'play-circle'];
    case 'ehs':
      return ['far', 'ticket-alt'];
    case 'schedule':
      return ['far', 'calendar-alt'];
    case 'asset-management':
      return ['far', 'clipboard-list-check'];
    default:
      return;
  }
}

function resolveCallToAction(product) {
  if (product.available) {
    if (product.sso) {
      return {
        variant: 'primary',
        icon: ['fal', 'rocket'],
        text: 'Launch',
        onClick: () => console.log('launch'),
      };
    } else {
      return {
        variant: 'primary-dark',
        icon: ['fal', 'sign-in'],
        text: 'Login',
        onClick: () => console.log('log in'),
      };
    }
  } else {
    if (product.freeTrial) {
      return {
        variant: 'tertiary',
        text: 'Free Trial',
        icon: ['fal', 'usd-circle'],
        onClick: () => console.log('free trial'),
      };
    } else {
      return {
        variant: 'default',
        text: 'Contact Us',
        onClick: () => console.log('contact'),
      };
    }
  }
}

export default ProductCard;

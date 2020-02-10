import React from 'react';
import { partition } from 'lodash-es';

import { withLayout } from 'components/layout';
import { ProductMap } from 'components/fragments';

import mockProductArray from './mock.js';

const HomePage = () => {
  const productGroups = partition(mockProductArray, product => {
    return product.available;
  });

  return (
    <>
      <ProductMap heading="My Apps" products={productGroups[0]} />
      <ProductMap heading="All Apps" products={productGroups[1]} />
    </>
  );
};

export default withLayout(HomePage);

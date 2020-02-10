import React from 'react';
import { Group } from 'uui_kit';
import { ProductCard } from 'components/fragments';

const ProductMap = ({ heading, products }) => {
  if (!products || !products.length) {
    return null;
  }
  return (
    <Group heading={heading} className="u-mb-6">
      <div className="row">
        {products.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
    </Group>
  );
};

export default ProductMap;

const mockProductArray = [
  {
    id: '1',
    title: 'IndustrySafe',
    description:
      'Lorem ipsum dolor sit amet consectatur adipsicing elit. Even more text to figure out what to do with to prevent odd wrapping',
    category: 'ehs',
    logoSrc:
      'https://cdn-assets-cloud.frontify.com/local/frontify/eyJwYXRoIjoiXC9wdWJsaWNcL3VwbG9hZFwvc2NyZWVuc1wvMTY4MDM5XC8xZGQwNDRkZDIwYzUxYTZkOGE5YTc4NWJkNGE3NzI5Ny0xNTY2MjIxODc0LnBuZyJ9:frontify:mdrndKhBwyYJFOOolLYCDYJhiE3urGiaqTOo7tGRfWk?width={width}',
    sso: true,
    details: true,
    available: true,
    freeTrial: true,
    mobileApp: true,
    hasMobileAccessory: true,
  },
  {
    id: '2',
    title: 'IndustrySafe',
    description:
      'Lorem ipsum dolor sit amet consectatur adipsicing elit. Even more text to figure out what to do with to prevent odd wrapping',
    category: 'ehs',
    logoSrc:
      'https://cdn-assets-cloud.frontify.com/local/frontify/eyJwYXRoIjoiXC9wdWJsaWNcL3VwbG9hZFwvc2NyZWVuc1wvMTY4MDM5XC8xZGQwNDRkZDIwYzUxYTZkOGE5YTc4NWJkNGE3NzI5Ny0xNTY2MjIxODc0LnBuZyJ9:frontify:mdrndKhBwyYJFOOolLYCDYJhiE3urGiaqTOo7tGRfWk?width={width}',
    sso: true,
    details: true,
    available: true,
    freeTrial: true,
    mobileApp: true,
    hasMobileAccessory: true,
  },
  {
    id: '3',
    title: 'IndustrySafe',
    description:
      'Lorem ipsum dolor sit amet consectatur adipsicing elit. Even more text to figure out what to do with to prevent odd wrapping',
    category: 'ehs',
    logoSrc:
      'https://cdn-assets-cloud.frontify.com/local/frontify/eyJwYXRoIjoiXC9wdWJsaWNcL3VwbG9hZFwvc2NyZWVuc1wvMTY4MDM5XC8xZGQwNDRkZDIwYzUxYTZkOGE5YTc4NWJkNGE3NzI5Ny0xNTY2MjIxODc0LnBuZyJ9:frontify:mdrndKhBwyYJFOOolLYCDYJhiE3urGiaqTOo7tGRfWk?width={width}',
    sso: true,
    details: true,
    available: true,
    freeTrial: true,
    mobileApp: true,
    hasMobileAccessory: true,
  },
  {
    id: '4',
    title: 'IndustrySafe',
    description: 'Lorem ipsum dolor sit amet consectatur adipsicing elit. ',
    category: 'ehs',
    logoSrc:
      'https://cdn-assets-cloud.frontify.com/local/frontify/eyJwYXRoIjoiXC9wdWJsaWNcL3VwbG9hZFwvc2NyZWVuc1wvMTY4MDM5XC8xZGQwNDRkZDIwYzUxYTZkOGE5YTc4NWJkNGE3NzI5Ny0xNTY2MjIxODc0LnBuZyJ9:frontify:mdrndKhBwyYJFOOolLYCDYJhiE3urGiaqTOo7tGRfWk?width={width}',
    sso: false,
    details: false,
    available: true,
    freeTrial: true,
    mobileApp: true,
    hasMobileAccessory: true,
  },
  {
    id: '5',
    title: 'IndustrySafe and a super long title that wraps',
    description:
      'Lorem ipsum dolor sit amet consectatur adipsicing elit. Even more text to figure out what to do with to prevent odd wrapping',
    category: 'ehs',
    logoSrc:
      'https://cdn-assets-cloud.frontify.com/local/frontify/eyJwYXRoIjoiXC9wdWJsaWNcL3VwbG9hZFwvc2NyZWVuc1wvMTY4MDM5XC8xZGQwNDRkZDIwYzUxYTZkOGE5YTc4NWJkNGE3NzI5Ny0xNTY2MjIxODc0LnBuZyJ9:frontify:mdrndKhBwyYJFOOolLYCDYJhiE3urGiaqTOo7tGRfWk?width={width}',
    sso: false,
    details: true,
    available: true,
    freeTrial: true,
    mobileApp: true,
    hasMobileAccessory: true,
  },
  {
    id: '6',
    title: 'IndustrySafe',
    description:
      'Lorem ipsum dolor sit amet consectatur adipsicing elit. Even more text to figure out what to do with to prevent odd wrapping',
    category: 'ehs',
    logoSrc:
      'https://cdn-assets-cloud.frontify.com/local/frontify/eyJwYXRoIjoiXC9wdWJsaWNcL3VwbG9hZFwvc2NyZWVuc1wvMTY4MDM5XC8xZGQwNDRkZDIwYzUxYTZkOGE5YTc4NWJkNGE3NzI5Ny0xNTY2MjIxODc0LnBuZyJ9:frontify:mdrndKhBwyYJFOOolLYCDYJhiE3urGiaqTOo7tGRfWk?width={width}',
    sso: false,
    details: false,
    available: false,
    freeTrial: true,
    mobileApp: true,
    hasMobileAccessory: true,
  },
  {
    id: '7',
    title: 'IndustrySafe',
    description:
      'Lorem ipsum dolor sit amet consectatur adipsicing elit. Even more text to figure out what to do with to prevent odd wrapping',
    category: 'ehs',
    logoSrc:
      'https://cdn-assets-cloud.frontify.com/local/frontify/eyJwYXRoIjoiXC9wdWJsaWNcL3VwbG9hZFwvc2NyZWVuc1wvMTY4MDM5XC8xZGQwNDRkZDIwYzUxYTZkOGE5YTc4NWJkNGE3NzI5Ny0xNTY2MjIxODc0LnBuZyJ9:frontify:mdrndKhBwyYJFOOolLYCDYJhiE3urGiaqTOo7tGRfWk?width={width}',
    sso: false,
    details: true,
    available: false,
    freeTrial: false,
    mobileApp: true,
    hasMobileAccessory: true,
  },
  {
    id: '8',
    title: 'IndustrySafe',
    description:
      'Lorem ipsum dolor sit amet consectatur adipsicing elit. Even more text to figure out what to do with to prevent odd wrapping',
    category: 'ehs',
    logoSrc:
      'https://cdn-assets-cloud.frontify.com/local/frontify/eyJwYXRoIjoiXC9wdWJsaWNcL3VwbG9hZFwvc2NyZWVuc1wvMTY4MDM5XC8xZGQwNDRkZDIwYzUxYTZkOGE5YTc4NWJkNGE3NzI5Ny0xNTY2MjIxODc0LnBuZyJ9:frontify:mdrndKhBwyYJFOOolLYCDYJhiE3urGiaqTOo7tGRfWk?width={width}',
    sso: false,
    details: false,
    available: false,
    freeTrial: false,
    mobileApp: true,
    hasMobileAccessory: true,
  },
  {
    id: '9',
    title: 'IndustrySafe',
    description:
      'Lorem ipsum dolor sit amet consectatur adipsicing elit. Even more text to figure out what to do with to prevent odd wrapping',
    category: 'ehs',
    logoSrc:
      'https://cdn-assets-cloud.frontify.com/local/frontify/eyJwYXRoIjoiXC9wdWJsaWNcL3VwbG9hZFwvc2NyZWVuc1wvMTY4MDM5XC8xZGQwNDRkZDIwYzUxYTZkOGE5YTc4NWJkNGE3NzI5Ny0xNTY2MjIxODc0LnBuZyJ9:frontify:mdrndKhBwyYJFOOolLYCDYJhiE3urGiaqTOo7tGRfWk?width={width}',
    sso: false,
    details: true,
    available: false,
    freeTrial: true,
    mobileApp: true,
    hasMobileAccessory: true,
  },
];

export default mockProductArray;

 import {babelLoader} from './useLoaderRuleItems';

 export const svgRule =  {
  test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
  oneOf: [
    {
      use: [
        'babel-loader',
        {
          loader: '@svgr/webpack',
          options: {
            babel: false,
            icon: true,
          },
        }
      ],
      issuer: {
        and: [/\.(js|jsx)$/],
      },
    },
  ],
};
 
 export const svgRules = [ svgRule];


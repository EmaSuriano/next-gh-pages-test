const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/next-gh-pages-test' : '',
  basePath: isProd ? '/next-gh-pages-test' : '',
};

'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('seo')
      .service('myService')
      .getWelcomeMessage();
  },
});

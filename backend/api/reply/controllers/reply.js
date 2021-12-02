'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async count(ctx) {
    const count = ctx.query._q
      ? await strapi.services.reply.countSearch(ctx.query)
      : await strapi.services.reply.count(ctx.query);
    return { count };
  },
};

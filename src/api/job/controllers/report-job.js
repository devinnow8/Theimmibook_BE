"use strict";
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::job.job", ({ strapi }) => ({
  async reportJob(ctx) {
    console.log(ctx.request.body, "fdfdsfd");

    const entries = await strapi.db.query("jobs_reported_by_links").create({
      job: 1,
      user: 3,
    });
    ctx.body = entries;
  },
}));

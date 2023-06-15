module.exports = ({ env }) => ({
  host: env('HOST', '192.168.1.36'),
  // debug:true,
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});

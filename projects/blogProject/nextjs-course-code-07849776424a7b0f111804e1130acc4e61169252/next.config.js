const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        API_URL: 'http://localhost:3000',
      },
    };
  }

  return {
    env: {
      API_URL: 'https://my-api.com',
    },
  };
};

// next.config.js
module.exports = {
  // Prefer loading of ES Modules over CommonJS
  experimental: { esmExternals: true },
};

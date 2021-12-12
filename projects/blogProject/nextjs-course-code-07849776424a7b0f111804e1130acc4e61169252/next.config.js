const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

// next.config.js
module.exports = {
  // Prefer loading of ES Modules over CommonJS
  experimental: { esmExternals: true },
};

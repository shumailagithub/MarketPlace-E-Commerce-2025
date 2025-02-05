// const { withSentryConfig } = require('@sentry/nextjs');

// const moduleExports = {
//     // your existing next.js config here
// };

// const sentryWebpackpluginOptions = {
//     silent: true,  //Suppresses all logs
// };

// module.exports = withSentryConfig(moduleExports, sentryWebpackpluginOptions);











import { withSentryConfig } from '@sentry/nextjs';

const moduleExports = {
    // your existing next.js config here
};

const sentryWebpackpluginOptions = {
    silent: true,  // Suppresses all logs
};

export default withSentryConfig(moduleExports, sentryWebpackpluginOptions);

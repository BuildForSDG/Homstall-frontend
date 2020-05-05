const environments = {};

const sharedData = {};
// Development environment
environments.development = {
  backend: process.env.REACT_APP_BACKEND_URL_DEV,
  ...sharedData
};

// Production environment
environments.production = {
  backend: process.env.REACT_APP_BACKEND_URL_PROD,
  ...sharedData
};

environments.test = {
  backend: process.env.REACT_APP_BACKEND_URL_DEV,
  ...sharedData
};

// Determine which environment was passed as a command-line argument
const currentEnvironment = typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV.toLowerCase() : '';

// Check that the current environment is one of the environments above, if not default to staging
const environmentToExport =
  typeof environments[currentEnvironment] === 'object' ? environments[currentEnvironment] : environments.development;

// Export the module
export default environmentToExport;

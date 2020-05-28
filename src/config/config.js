const environments = {};

const shared = {
  authorization: `Bearer ${localStorage.token}`,
};
// Development environment
environments.development = {
  backend: process.env.REACT_APP_BACKEND_URL_DEV,
  backend2: process.env.REACT_APP_BACKEND_URL_DEV2,
  ...shared,
};

// Production environment
environments.production = {
  backend: process.env.REACT_APP_BACKEND_URL_PROD,
  backend2: process.env.REACT_APP_BACKEND_URL_PROD2,
  ...shared,
};

environments.test = {
  backend: process.env.REACT_APP_BACKEND_URL_DEV,
  backend2: process.env.REACT_APP_BACKEND_URL_DEV2,
  ...shared,
};

// Determine which environment was passed as a command-line argument
const currentEnvironment =
  typeof process.env.NODE_ENV === 'string'
    ? process.env.NODE_ENV.toLowerCase()
    : '';

// Check that the current environment is one of the environments above, if not default to staging
const environmentToExport =
  typeof environments[currentEnvironment] === 'object'
    ? environments[currentEnvironment]
    : environments.development;

// Export the module
export default environmentToExport;

import environment from './environment';
import regeneratorRuntime from 'regenerator-runtime';
window.regeneratorRuntime = regeneratorRuntime;
import config from './auth-config';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin('aurelia-auth', (baseConfig) => {
      baseConfig.configure(config);
    })
    .feature('resources');

  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  return aurelia.start().then(() => aurelia.setRoot());
}

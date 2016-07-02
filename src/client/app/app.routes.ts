import { provideRouter, RouterConfig } from '@angular/router';

import { SearchRoutes } from './+search/index';
import { HomeRoutes } from './+home/index';

const routes: RouterConfig = [
  ...HomeRoutes,
  ...SearchRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];

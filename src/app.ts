import { Router, RouterConfiguration } from 'aurelia-router';

export class App {
  router: Router;
  
  configureRouter(config: RouterConfiguration, router: Router) {
    config.map([]);
    this.router = router;
  }
}

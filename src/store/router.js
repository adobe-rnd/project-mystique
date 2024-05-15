/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

/* eslint-disable no-restricted-globals */

import { observable } from 'mobx';
import { Router } from '@vaadin/router';

/**
 * @typedef {import('@AppStore').AppStore} AppStore
 */

export const routes = [
  {
    path: '/',
    name: 'Root',
    component: 'div',
  },
  {
    path: '/:org/:site',
    name: 'Content',
    component: 'content-view',
  },
  {
    path: '/:org/:site/editor',
    name: 'Editor',
    component: 'editor-view',
  },
  {
    path: '/:org/:site/experiences',
    name: 'Experiences',
    component: 'experiences-view',
  },
];

export class RouterStore {
  /**
   * The router
   * @type {Router}
   */
  @observable accessor router;

  /**
   * The router
   * @type {AppStore}
   */
  @observable accessor appStore;

  constructor(appStore) {
    this.appStore = appStore;
    this.router = new Router();
    this.router.setRoutes([
      {
        path: '(.*)/',
        action: (context, commands) => {
          const newPath = context.pathname.slice(0, -1);
          return commands.redirect(newPath);
        },
      },
      ...routes,
    ]);

    this.router.setOutlet(appStore.element.shadowRoot.querySelector('theme-wrapper'));
  }

  projectUpdated() {
    const { path } = this.router.location.route;
    this.navigateTo(path);
  }

  navigateTo(path) {
    const { selectedProject } = this.appStore;
    const newPath = path.replace(':org', selectedProject.org).replace(':site', selectedProject.site);

    if (newPath !== path) {
      Router.go(newPath);
    }
  }

  getActiveRoute() {
    return this.router.location?.route?.name;
  }

  routerReady() {
    return this.router.ready;
  }
}

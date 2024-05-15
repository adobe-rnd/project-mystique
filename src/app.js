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

/* eslint-disable wc/no-constructor-params */

import { LitElement, html } from 'lit';
import { provide } from '@lit/context';
import { customElement } from 'lit/decorators.js';
import { AppStore, appStoreContext } from './store/app.js';
import { style } from './app.css.js';
import { spectrum2 } from './spectrum-2.css.js';

@customElement('project-mystique')
export class Application extends LitElement {
  /**
   * @type {AppStore}
   */
  @provide({ context: appStoreContext })
  accessor appStore;

  static get styles() {
    return [spectrum2, style];
  }

  constructor(store) {
    super();
    this.appStore = store || new AppStore(this);
    this.appStore.initialize();
  }

  render() {
    return html`
      <theme-wrapper>
        <app-header></app-header>
      </theme-wrapper>
    `;
  }
}

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

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import { reaction } from 'mobx';
import { routes } from '../../store/router.js';
import { style } from './headers.css.js';
import logo from '../../assets/adobe-logo.svg';
import clockIcon from '../../assets/icon-clock.svg';
import addUserIcon from '../../assets/icon-add-user.svg';
import { ConnectedElement } from '../connected-element/connected-element.js';

/**
 * The application header
 * @element app-header
 * @extends {ConnectedElement}
 * @class Header
 */
@customElement('app-header')
export class Header extends ConnectedElement {
  static get styles() {
    return [style];
  }

  /**
   * Called after the element’s DOM has been updated the first time.
   */
  firstUpdated() {
    // Listen for the app to be initialized
    reaction(
      () => this.appStore.initialized,
      async () => {
        const { routerStore } = this.appStore;
        await routerStore.routerReady();
        this.requestUpdate();
      },
    );

    // Listen for changes to the selected project
    reaction(
      () => this.appStore.selectedProject,
      async () => {
        this.requestUpdate();
      },
    );
  }

  /**
   * Navigate to a new path
   * @param {string} path The path to navigate to
   */
  navigateTo(path) {
    const { routerStore } = this.appStore;
    routerStore.navigateTo(path);
  }

  render() {
    return html`
      <header>
        <nav>
          ${unsafeSVG(logo)}
          <sp-action-group
            selects="single"
            label="navigation items"
            .selected=${[this.appStore.routerStore?.router?.location.route.name]}
          >
            ${routes
                .filter((route) => route.name !== 'Root')
                .map((route) => html`
                  <sp-action-button 
                    value="${route.name}" 
                    @click=${() => this.navigateTo(route.path)}>
                    ${route.name}
                  </sp-action-button>
            `)}
          </sp-action-group>
        </nav>
        <project-switcher></project-switcher>
        <sp-action-group
          label="system actions"
          quiet
        >
          <sp-action-button>
            <sp-icon slot="icon">
              ${unsafeSVG(clockIcon)}
            </sp-icon>
          </sp-action-button>
          <sp-action-button>
            <sp-icon slot="icon">
              ${unsafeSVG(addUserIcon)}
            </sp-icon>
          </sp-action-button>
          <user-avatar></user-avatar>
        </sp-action-group>
      </header>
    `;
  }
}

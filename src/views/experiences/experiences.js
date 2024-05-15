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

import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { reaction } from 'mobx';
import { ConnectedElement } from '../../components/connected-element/connected-element.js';

@customElement('experiences-view')
export class ExperiencesView extends ConnectedElement {
  static styles = css`
    main {
      display: flex;
      flex-direction: row;
      height: 100%;
      gap: var(--spectrum2-spacing-default);
      padding-left: var(--spectrum2-spacing-default);
      padding-right: var(--spectrum2-spacing-default);
    }

    main app-panel {
      height: 100%;
    }

    main app-panel {
      width: 100%;
    }
  `;

  connectedCallback() {
    super.connectedCallback();

    reaction(
      () => this.appStore.selectedProject,
      () => {
        this.requestUpdate();
      },
    );
  }

  render() {
    return html`
      <main>
        <app-panel>      
          <h2 slot="left-header">Experiences</h2>
          <div slot="content">
            <h2>The current selected project is ${this.appStore.selectedProject?.name}</h2>
          </div>
        </app-panel>
      </main>
    `;
  }
}

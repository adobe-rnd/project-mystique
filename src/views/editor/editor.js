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
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import promptIcon from '../../assets/icon-prompt.svg';
import refreshIcon from '../../assets/icon-refresh.svg';
import { ConnectedElement } from '../../components/connected-element/connected-element.js';
import { MODALS } from '../../constants.js';

@customElement('editor-view')
export class Editor extends ConnectedElement {
  static styles = css`
    main {
      display: flex;
      flex-direction: row;
      height: 100%;
      gap: 16px;
      padding-left: 16px;
      padding-right: 16px;
    }

    main app-panel {
      height: 100%;
    }

    main app-panel:first-of-type {
      width: 70%;
    }

    main app-panel:last-of-type {
      width: 30%;
    }

    sp-action-group sp-action-button {
      color: var(--spectrum2-font-color);
    }
  `;

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <main>
        <app-panel>
          <h2 slot="left-header">Editor</h2>
          <sp-button slot="right-header">Save Experience</sp-button>
          <div slot="content">
            <sp-action-button @click=${() => this.appStore.showToast('This is positive', 'positive')}>Show Positive Toast</sp-action-button>
            <sp-action-button @click=${() => this.appStore.showModal({ type: MODALS.ERROR, data: { headline: 'Dialog title', message: 'message' } })}>Show Modal</sp-action-button>
          </div>
        </app-panel>
        <app-panel>      
          <h2 slot="left-header">Variations</h2>
          <sp-action-group
            label="system actions"
            quiet
            slot="right-header"
          >
            <sp-action-button>
              <sp-icon slot="icon">
                ${unsafeSVG(promptIcon)}
              </sp-icon>
            </sp-action-button>
            <sp-action-button>
              <sp-icon slot="icon">
                ${unsafeSVG(refreshIcon)}
              </sp-icon>
            </sp-action-button>
          </sp-action-group>
          <div slot="content">
            <p>Content</p>
          </div>
        </app-panel>
      </main>
    `;
  }
}

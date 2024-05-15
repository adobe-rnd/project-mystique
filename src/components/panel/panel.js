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

import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { style } from './panel.css.js';

/**
 * A panel element
 * @element app-panel
 * @class Panel
 */
@customElement('app-panel')
export class Panel extends LitElement {
  static get styles() {
    return [style];
  }

  render() {
    return html`
      <div>
        <header>
          <slot name="left-header"></slot>
          <slot name="right-header"></slot>
        </header>
        <div class="content">
          <slot name="content"></slot>
        </div>
      </div>
    `;
  }
}

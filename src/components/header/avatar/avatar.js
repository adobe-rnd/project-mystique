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

import {
  LitElement, html, css,
} from 'lit';
import { customElement } from 'lit/decorators.js';

const userPhoto = new URL('../../../assets/icon-user-photo.png', import.meta.url).href;

/**
 * A user avatar component
 * @element user-avatar
 * @extends {LitElement}
 * @class UserAvatar
 */
@customElement('user-avatar')
export class UserAvatar extends LitElement {
  static styles = css`
    div {
      margin-left: var(--spectrum2-spacing-small);
    }
  `;

  render() {
    return html`
      <div>
        <img src=${userPhoto} alt="user avatar" />
      </div>
    `;
  }
}

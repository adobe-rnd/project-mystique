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

// @ts-nocheck
/* eslint-disable lit-a11y/no-aria-slot */
/* istanbul ignore file */

import { html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { when } from 'lit/directives/when.js';
import { Picker as SPPicker } from '@spectrum-web-components/picker';

export class Picker extends SPPicker {
  get buttonContent() {
    const labelClasses = {
      'visually-hidden': this.icons === 'only' && !!this.value,
      placeholder: !this.value,
      label: true,
    };
    const appliedLabel = this.appliedLabel || this.label;
    return [
      html`
          <span id="icon" ?hidden=${this.icons === 'none'}>
            ${this.selectedItemContent.icon}
          </span>
          <span
            id=${ifDefined(
              this.value && this.selectedItem ? 'label' : undefined,
            )}
            class=${classMap(labelClasses)}
          >
            ${this.renderLabelContent(this.selectedItemContent.content)}
          </span>
          ${this.value && this.selectedItem
              ? html`
                  <span
                    aria-hidden="true"
                    class="visually-hidden"
                    id="applied-label"
                  >
                    ${appliedLabel}
                    <slot name="label"></slot>
                  </span>
                `
              : html`
                  <span hidden id="applied-label">${appliedLabel}</span>
                `}
          ${this.invalid && !this.pending
              ? html`
                  <sp-icon-alert
                    class="validation-icon"
                  ></sp-icon-alert>
                `
              : nothing}
          ${when(this.pending, () => {
            import(
              '@spectrum-web-components/progress-circle/sp-progress-circle.js'
            );
            return html`
              <sp-progress-circle
                id="loader"
                size="s"
                indeterminate
                aria-valuetext=${this.pendingLabel}
                class="progress-circle">
              </sp-progress-circle>
            `;
          })}
          <slot
            aria-hidden="true"
            name="tooltip"
            id="tooltip"
            @slotchange=${this.handleTooltipSlotchange}
          ></slot>
        `,
    ];
  }
}

customElements.define('sp-picker', Picker);

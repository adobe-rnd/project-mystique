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
import { map } from 'lit/directives/map.js';
import { reaction } from 'mobx';
import cloudIcon from '../../assets/icon-cloud.svg';
import '@spectrum-web-components/icons-ui/icons/sp-icon-chevron600.js';
import { ConnectedElement } from '../connected-element/connected-element.js';
import { projects } from '../../store/app.js';

/**
 * The project switcher component
 * @element project-switcher
 * @class ProjectSwitcher
 */
@customElement('project-switcher')
export class ProjectSwitcher extends ConnectedElement {
  static styles = css`
    :host {
      color: var(--spectrum2-font-color);
    }
    
    .picker {
      display: flex;
      flex-direction: row;
      gap: var(--spectrum2-spacing-small);
      justify-content: center;
      align-items: center;
    }

    .picker span {
      color: var(--spectrum-gray-700);
    }

    sp-icon-chevron600 {
      margin-top: 3px;
      width: 10px;
      height: 10px;
      color: var(--spectrum2-font-color);
    }

    sp-picker {
      margin-top: 10px;
      --highcontrast-picker-font-color-default: var(--spectrum2-font-color);
      --mod-picker-placeholder-font-weight: 700;
      --mod-picker-font-weight: 700;
      --highcontrast-picker-icon-color-default: var(--spectrum2-font-color);
      --highcontrast-picker-icon-color-default-open: var(--spectrum2-font-color);
      --highcontrast-picker-icon-color-hover: var(--spectrum2-font-color);
      --highcontrast-picker-icon-color-hover-open: var(--spectrum2-font-color);
    }

    sp-icon {
      margin-left: 10px;
      margin-top: 5px;
    }
  `;

  /**
   * Called after the element’s DOM has been updated the first time.
   */
  firstUpdated() {
    reaction(
      () => this.appStore.selectedProject,
      () => {
        this.requestUpdate();
      },
    );
  }

  /**
   * Handle the project change event
   * @param {*} event
   */
  onChange(event) {
    const selectedProject = projects.find((project) => project.name === event.target.value);
    this.appStore.setProject(selectedProject);
  }

  render() {
    return html`
      <div class="picker">
        <span>Projects</span>
        <sp-icon-chevron600 size="xs"></sp-icon-chevron600>
        <sp-picker quiet label="Select Project" value=${this.appStore.selectedProject?.name} placement="bottom-start" @change=${this.onChange}>
          ${map(projects, (project) => html`<sp-menu-item value=${project.name} .selected=${this.appStore.selectedProject?.name === project.name}>${project.name}</sp-menu-item>`)}
        </sp-picker>
        <sp-icon>
          ${unsafeSVG(cloudIcon)}
        </sp-icon>
      </div>
    `;
  }
}

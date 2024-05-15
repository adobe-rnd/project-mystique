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
import { css } from 'lit';

export const style = css`
  header {
    box-sizing: border-box;
    height: 64px;
    display: flex;
    flex-direction: row;
    padding: var(--spectrum2-spacing-default) var(--spectrum2-spacing-large);
    justify-content: space-between;
  }

  header nav {
    display: flex;
    flex-direction: row;
    gap: var(--spectrum2-spacing-medium);
  }

  header nav sp-action-group {
    --mod-actionbutton-background-color-default: transparent;
    --mod-actionbutton-content-color-default: var(--spectrum2-font-color);
  }

  header project-switcher {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  header > sp-action-group:last-of-type {
    min-width: 290px;
    justify-content: flex-end;
  }

  header > sp-action-group:last-of-type sp-action-button {
    color: var(--spectrum2-font-color);
  }
`;

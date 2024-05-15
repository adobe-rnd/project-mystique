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

  :host(.no-padding) section {
    padding: 0;
  }

  :host(.no-padding) section ::slotted(img) {
    height: 100%;
    object-fit: cover;
  }

  section {
    overflow: hidden;
    box-sizing: border-box;
    height: 100%;
    background-color: var(--spectrum2-background-layer-2);
    padding: 24px;
    border-radius: var(--spectrum2-medium-border-radius);
    box-shadow: var(--spectrum2-box-shadow);
  }

  section:hover {
    outline: 3px solid var(--spectrum2-border-hover-color);
  }

  ::slotted(img) {
    width: 100%;
    object-fit: contain;
    border-radius: var(--spectrum2-large-border-radius);
  }
`;

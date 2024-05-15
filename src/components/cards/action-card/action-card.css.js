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
  section {
    height: 100%;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: var(--spectrum2-box-shadow);
    padding: var(--spectrum2-spacing-medium);
    background-color: var(--spectrum2-background-layer-2);
    border-radius: var(--spectrum2-medium-border-radius);
  }

  section:hover {
    outline: 3px solid var(--spectrum2-border-hover-color);
  }

  ::slotted(img) {
    width: 100%;
    object-fit: contain;
    border-radius: var(--spectrum2-large-border-radius);
  }

  ::slotted(h3) {
    margin: 0;
  }

  ::slotted(p) {
    margin-top: 5px;
  }
`;

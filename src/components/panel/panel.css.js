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
  div {
    background-color: var(--spectrum2-background-layer-2);
    backdrop-filter: var(--spectrum2-backdrop-filter);
    height: 100%;
    border-top-left-radius: var(--spectrum2-medium-border-radius);
    border-top-right-radius: var(--spectrum2-medium-border-radius);
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 1px 0px #00000014;
    box-shadow: 0px 1px 3px 0px #00000014;
    box-shadow: 0px 3px 8px 0px #00000014;
  }

  div header {
    box-sizing: border-box;
    height: 72px;
    padding: var(--spectrum2-spacing-default);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: var(--spectrum2-border);
  }

  div header ::slotted(h2) {
    margin: 0;
    font-size: 18px;
  }

  div .content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

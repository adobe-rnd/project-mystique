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

export const spectrum2 = css`
  :host {
    --spectrum2-background-layer-1: #0f0f14;
    --spectrum2-background-layer-2: #15161BCC;
    --spectrum2-border: 1px solid #00000063;
    --spectrum2-font-color: #D4D6E6BF;
    --spectrum2-border-hover-color: #3B63FB;
    --spectrum2-backdrop-filter: blur(12px);

    --spectrum2-small-border-radius: 4px;
    --spectrum2-default-border-radius: 8px;
    --spectrum2-medium-border-radius: 10px;
    --spectrum2-large-border-radius: 12px;
    --spectrum2-xlarge-border-radius: 16px;

    --spectrum2-spacing-xtra-small: 4px;
    --spectrum2-spacing-small: 8px;
    --spectrum2-spacing-default: 16px;
    --spectrum2-spacing-medium: 24px;
    --spectrum2-spacing-large: 32px;

    --spectrum2-application-background-image: linear-gradient(
      335deg,
      hsl(240deg 14% 7%) 0%,
      hsl(263deg 11% 9%) 24%,
      hsl(286deg 9% 10%) 40%,
      hsl(314deg 10% 12%) 51%,
      hsl(332deg 12% 14%) 60%,
      hsl(345deg 13% 15%) 69%,
      hsl(356deg 14% 17%) 76%,
      hsl(6deg 15% 19%) 84%,
      hsl(14deg 17% 20%) 91%,
      hsl(22deg 17% 21%) 100%
    );

    --spectrum2-box-shadow:
      0px 0px 3px 0px rgba(0, 0, 0, 0.12),
      0px 3px 8px 0px rgba(0, 0, 0, 0.04),
      0px 4px 16px 0px rgba(0, 0, 0, 0.08);

    --mod-toast-corner-radius: var(--spectrum2-medium-border-radius);
    --mod-toast-divider-color: transparent;
    --mod-actionbutton-border-radius: var(--spectrum2-default-border-radius);
    --mod-actionbutton-background-color-default-selected: #fff2;
    --mod-actionbutton-background-color-hover-selected: #fff3;
    --mod-actionbutton-content-color-default-selected: #fff;
    --mod-actionbutton-content-color-hover-selected: #fff;
    --mod-popover-background-color: var(--spectrum2-background-layer-2);
    --mod-modal-background-color: var(--spectrum2-background-layer-2);
  }

  @media (prefers-color-scheme: light) {
    :host {
      --spectrum2-background-layer-1: #F3F3F3;
      --spectrum2-background-layer-2: #ffffff;
      --spectrum2-border: 1px solid #E1E1E1;
      --spectrum2-font-color: #292929;

      --spectrum2-application-background-image: linear-gradient(
        335deg,
        var(--spectrum2-background-layer-1) 0%,
        var(--spectrum2-background-layer-1) 100%
      );


    --mod-actionbutton-background-color-default-selected: #292929;
    --mod-actionbutton-background-color-hover-selected: #292929;
    }
  }
`;

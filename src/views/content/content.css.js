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
  main {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 16px;
    padding-left: 16px;
    padding-right: 16px;
  }

  main header {
    width: 100%;
    height: 155px;
    position: relative;
    overflow: hidden;
    border-radius: var(--spectrum2-medium-border-radius);
  }

  main header img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  main header div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
  }

  h2 {
    margin: 0;
    padding: 0;
    padding-bottom: 8px;
    font-size: 18px;
  }

  main div > article > image-card {
    height: 100%;
  }

  main div.row-1 {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    gap: 16px;
    margin-bottom: 16px;
  }

  main div.row-1 article {
    width: 50%;
    display: flex;
    flex-direction: column;
  }

  main div.row-1 article:not(:first-of-type) {
    width: 25%;
  }

  main div.row-2 article {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 16px;
  }

  main div.row-2 article action-card {
    width: 100%;
  }
`;

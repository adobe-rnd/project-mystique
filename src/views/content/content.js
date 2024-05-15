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

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ConnectedElement } from '../../components/connected-element/connected-element.js';
import { style } from './content.css.js';
import '../../components/cards/image-card/image-card.js';
import '../../components/cards/action-card/action-card.js';

const heroBackground = new URL('../../assets/image-hero.jpg', import.meta.url).href;
const inspirationImage = new URL('../../assets/image-inspiration.jpg', import.meta.url).href;
const contentInsightsImage = new URL('../../assets/image-content-insights.png', import.meta.url).href;
const referenceContentImage = new URL('../../assets/image-reference-content.png', import.meta.url).href;

const landingPageImage = new URL('../../assets/image-landing-page.jpg', import.meta.url).href;
const blogPostImage = new URL('../../assets/image-blog-post.jpg', import.meta.url).href;
const servicePageImage = new URL('../../assets/image-service-page.jpg', import.meta.url).href;

@customElement('content-view')
export class ContentView extends ConnectedElement {
  static get styles() {
    return [style];
  }

  render() {
    return html`
      <main>
        <header>
          <img src=${heroBackground} alt="hero background" />
          <div>
            <h1>${this.appStore.i18n('home-hero-title')}</h1>
            <p>${this.appStore.i18n('home-hero-subtitle')}</p>
          </div>
        </header>
        <div class="row-1">
          <article>
            <h2>${this.appStore.i18n('brand-content-heading')}</h2>
            <image-card class="no-padding">
              <img slot="image" src=${inspirationImage} alt="inspiration" />
            </image-card>
          </article>
          <article>
            <h2>${this.appStore.i18n('reference-content-heading')}</h2>
            <image-card>
              <img slot="image" src=${referenceContentImage} alt="reference content" />
            </image-card>
          </article>
          <article>
            <h2>${this.appStore.i18n('content-insights')}</h2>
            <image-card>
              <img slot="image" src=${contentInsightsImage} alt="content insights" />
            </image-card>
          </article>
        </div>
        <div class="row-2">
          <h2>${this.appStore.i18n('create-heading')}</h2>
          <article>
            <action-card>
              <h3 slot="title">${this.appStore.i18n('create-landing-page-title')}</h3>
              <p slot="subtitle">${this.appStore.i18n('create-landing-page-subtitle')}</p>
              <img slot="image" src=${landingPageImage} alt="generate landing page" />
            </action-card>
            <action-card>
              <h3 slot="title">${this.appStore.i18n('create-blog-page-title')}</h3>
              <p slot="subtitle">${this.appStore.i18n('create-blog-page-subtitle')}</p>
              <img slot="image" src=${blogPostImage} alt="generate blog post" />
            </action-card>
            <action-card>
              <h3 slot="title">${this.appStore.i18n('create-service-page-title')}</h3>
              <p slot="subtitle">${this.appStore.i18n('create-service-page-subtitle')}</p>
              <img slot="image" src=${servicePageImage} alt="generate service page" />
            </action-card>
          </article>
        </div>
      </main>
    `;
  }
}

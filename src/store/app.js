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

/* eslint-disable no-restricted-globals */

import { observable, action } from 'mobx';
import { createContext } from '@lit/context';
import { Router } from '@vaadin/router';
import { RouterStore } from './router.js';
import { ToastContainer } from '../components/toast/toast-container.js';
import { fetchLanguageDict, i18n } from '../utils/i18n.js';
import { ModalContainer } from '../components/modal/modal-container.js';

/**
 * @typedef {import('../types/typdefs.js').Modal} Modal
 */

/**
 * @typedef {import('../types/typdefs.js').Project} Project
 */

/**
 * Temporary projects
 */
export const projects = [
  {
    name: 'Trustwell',
    org: 'hlxsites',
    site: 'trustwell',
  },
  {
    name: 'WKND',
    org: 'hlxsites',
    site: 'wknd',
  },
];

export class AppStore {
  /**
   * Is the application ready?
   * @type {boolean}
   */
  @observable accessor initialized;

  /**
   * The router
   * @type {RouterStore}
   */
  @observable accessor routerStore;

  /**
   * The selected project
   * @type {Project}
   */
  @observable accessor selectedProject;

  /**
   * The application element
   * @type {HTMLElement}
   */
  element;

  /**
   * Dictionary of language keys
   * @type {Object}
   */
  languageDict;

  constructor(element) {
    this.setLanguage();

    this.element = element;
  }

  async initialize() {
    await this.setLanguage();
    this.routerStore = new RouterStore(this);

    // Temp.. default to wknd
    await this.routerStore.routerReady();
    if (this.routerStore.router.location.pathname === '/') {
      this.setProject({
        name: 'WKND',
        org: 'hlxsites',
        site: 'wknd',
      });
      Router.go('/hlxsites/wknd');
    } else {
      const selectedProject = projects.find(
        (project) => project.org === this.routerStore.router.location.params.org
        && project.site === this.routerStore.router.location.params.site);

      this.setProject(selectedProject);
    }

    this.setInitialized();
  }

  async setLanguage() {
    this.languageDict = await fetchLanguageDict('en');
  }

  /**
   * Sets the initialized flag.
   */
  @action
  setInitialized() {
    this.initialized = true;
  }

  /**
   * Sets the project
   * @param {Project} project The project to set
   */
  @action
  setProject(project) {
    this.selectedProject = project;

    this.routerStore.projectUpdated();
  }

  /**
   * Helper i18n function
   * @param {string} key Dictionary key
   * @returns {string} The translated string
   */
  i18n(key) {
    return i18n(this.languageDict, key);
  }

  /**
   * Displays a toast message
   * @param {string} message The message to display
   * @param {string} [variant] The variant of the toast (optional)
   * @param {number} [timeout] The timeout in milliseconds (optional)
   */
  showToast(message, variant = 'info', timeout = 6000) {
    const existingToast = this.element?.shadowRoot?.querySelector('theme-wrapper').querySelector('toast-container');
    if (existingToast) {
      existingToast.remove();
    }

    const toastContainer = new ToastContainer({
      message,
      variant,
      timeout,
    });
    this.element?.shadowRoot?.querySelector('theme-wrapper').appendChild(toastContainer);

    return toastContainer;
  }

  /**
   * Creates a modal and appends it to the sidekick.
   * If a modal is already open, it will be replaced.
   * @param {Modal} modal The modal to display
   */
  showModal(modal) {
    const existingModal = this.element?.shadowRoot?.querySelector('theme-wrapper').querySelector('modal-container');
    if (existingModal) {
      existingModal.remove();
    }

    const modalContainer = new ModalContainer(modal, this);
    this.element?.shadowRoot?.querySelector('theme-wrapper').appendChild(modalContainer);

    return modalContainer;
  }
}

export const appStoreContext = createContext('appStore');

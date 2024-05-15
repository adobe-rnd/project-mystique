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

/* eslint-disable wc/no-constructor-params */

import { customElement, property } from 'lit/decorators.js';
import { LitElement, html } from 'lit';
import { style } from './modal-container.css.js';
import { MODALS, MODAL_EVENTS } from '../../constants.js';

/**
 * The modal type
 * @typedef {import('../../types/typdefs.js').Modal} Modal
 */

/**
 * The lit template result type
 * @typedef {import('lit').TemplateResult} TemplateResult
 */

/**
 * Modal container component
 * @element modal-container
 * @class ModalContainer
 */
@customElement('modal-container')
export class ModalContainer extends LitElement {
  /**
   * Active modal object
   * @type {Modal}
   */
  @property({ type: Object })
  accessor modal;

  /**
   * The key handler
   * @type {EventListener}
   */
  keyHandler;

  /**
   * The modal Action
   * @type {string}
   */
  @property({ type: String })
  accessor action;

  static get styles() {
    return [style];
  }

  /**
   * Constructor
   * @param {Modal} modal the modal details
   */
  constructor(modal, appStore) {
    super();
    this.modal = modal;
    this.appStore = appStore;
  }

  async connectedCallback() {
    super.connectedCallback();

    // Listen for ESC or Enter key presses
    this.keyHandler = this.createKeyHandler();
    document.addEventListener('keyup', this.keyHandler);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('keyup', this.keyHandler);
  }

  /**
   * Creates an key press handler.
   * @returns {EventListener} The key handler
   */
  createKeyHandler() {
    /**
     * @param {KeyboardEvent} e The keyboard event
     */
    return ({ key }) => {
      if (key === 'Escape') {
        this.onCancel();
      } else if (key === 'Enter') {
        this.onConfirm();
      }
    };
  }

  /**
   * Called when the modal is canceled
   */
  onCancel() {
    this.dispatchEvent(new CustomEvent(MODAL_EVENTS.CANCEL));
    this.cleanup();
  }

  /**
   * Called when the confirm button is clicked
   */
  onConfirm() {
    if (this.modal.type === MODALS.DELETE) {
      /**
       * @type {HTMLInputElement}
       */
      const deleteConfirmation = this.shadowRoot.querySelector('#delete-confirmation');
      if (deleteConfirmation.value !== this.action.toUpperCase()) {
        const deleteInput = this.shadowRoot.querySelector('.delete-input');
        deleteInput.classList.add('invalid');
        return;
      }
    }
    // Announces that the "confirm" button has been clicked.
    this.dispatchEvent(new CustomEvent(MODAL_EVENTS.CONFIRM));
    this.cleanup();
  }

  /**
   * Cleanup the modal
   */
  cleanup() {
    this.modal = undefined;
    this.remove();
  }

  /**
   * Render a modal
   * @param {Modal | undefined} modal Modal object
   * @returns {TemplateResult | undefined} The modal element
   */
  renderModal(modal) {
    if (!modal || !modal.type) {
      return undefined;
    }

    const { type, data } = modal;
    const options = {};
    switch (type) {
      case MODALS.WAIT:
        options.dismissable = false;
        options.noDivider = true;
        options.content = html`
          <div class="wait-dialog">
            <sp-progress-circle label=${data.message} indeterminate></sp-progress-circle>
            <span>${data.message}</span>
          </div>
        `;
        break;
      case MODALS.ERROR:
        options.underlay = true;
        options.noDivider = true;
        options.dismissable = true;
        options.headline = data?.headline ?? this.appStore.i18n('error');
        options.confirmLabel = data?.confirmLabel ?? this.appStore.i18n('ok');
        options.content = html`
          ${data.message}
        `;
        break;
      default:
        // eslint-disable-next-line no-console
        console.error(`Unknown modal type: ${type}`);
        this.cleanup();
        return html``;
    }

    return html`
        <sp-dialog-wrapper
            open
            headline=${options.headline}
            confirm-label=${options.confirmLabel}
            cancel-label=${options.cancelLabel}
            secondary-label=${options.secondaryLabel}
            no-divider=${options.noDivider}
            .dismissable=${options.dismissable}
            .negative=${options.negative}
            .underlay=${options.underlay}
            .error=${options.error}
            @confirm=${this.onConfirm}
            @cancel=${this.onCancel}>
            ${options.content}
        </sp-dialog-wrapper>
      `;
  }

  render() {
    return this.renderModal(this.modal);
  }
}

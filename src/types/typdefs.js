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

/**
 * @typedef {Object} Toast
 * @prop {string} message The toast message
 * @prop {string} variant The toast variant
 * @prop {number} timeout The time the toast is shown (default: 6000)
 */

/**
 * @typedef {Object} Modal
 * @prop {string} type The modal type
 * @prop {ModalData} [data] The modal data
 */

/**
 * @typedef {Object} ModalData
 * @prop {string} [headline] The modal headline
 * @prop {string} [message] The modal message
 * @prop {string} [confirmLabel] The confirm button label
 * @prop {string} [action] The action type (delete or unpublish)
 */

/**
 * @typedef {Object} Project
 * @prop {string} name The project name
 * @prop {string} org The project organization
 * @prop {string} site The site
 */

export const Types = {};

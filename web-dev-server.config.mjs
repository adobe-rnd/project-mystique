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

// @ts-nocheck
/* eslint-disable import/no-extraneous-dependencies, consistent-return */

import { readFileSync } from 'fs';
import { fromRollup } from '@web/dev-server-rollup';
import { esbuildPlugin } from '@web/dev-server-esbuild';
import { babel } from '@rollup/plugin-babel';
import InlineSvg from 'rollup-plugin-inline-svg';
import copy from 'rollup-plugin-copy';
import { replacePlugin } from './rollup.config.js';

function svgPlugin() {
  return {
    name: 'svg-plugin',
    resolveMimeType(context) {
      if (context.path.endsWith('.svg')) {
        return 'application/javascript';
      }
    },
    serve(context) {
      if (context.path.endsWith('.svg')) {
        const svgContent = readFileSync(`./${context.path}`, 'utf-8');
        return `export default \`${svgContent}\``;
      }
    },
  };
}

export default /** @type {import('@web/dev-server').DevServerConfig} */ ({
  port: 8004,
  appIndex: 'index.html',
  /** Resolve bare module imports */
  nodeResolve: {
    exportConditions: ['browser', 'development'],
  },
  plugins: [
    esbuildPlugin({ js: true }),
    fromRollup(babel)({
      babelHelpers: 'bundled',
    }),
    svgPlugin(),
    // @ts-ignore
    fromRollup(InlineSvg)(),
    fromRollup(copy)({
      targets: [
        { src: 'src/_locales/*', dest: 'dist/_locales/' },
      ],
    }),
    fromRollup(replacePlugin)(),
  ],
});

/*
 * Copyright (C) 2024 by Fonoster Inc (https://fonoster.com)
 * http://github.com/fonoster/fonoster
 *
 * This file is part of Fonoster
 *
 * Licensed under the MIT License (the "License");
 * you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 *    https://opensource.org/licenses/MIT
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
interface PromiseWithResetTimer<T> extends Promise<T> {
  cancelGlobalTimer?: () => void;
}

function getTimeoutPromise(timeout: number) {
  const effectiveTimeout = timeout || 5000;

  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  const timeoutPromise = new Promise<string>((resolve) => {
    timeoutId = setTimeout(() => {
      resolve("");
    }, effectiveTimeout);
  }) as PromiseWithResetTimer<string>;

  timeoutPromise.cancelGlobalTimer = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  return { timeoutPromise, effectiveTimeout };
}

export { getTimeoutPromise };
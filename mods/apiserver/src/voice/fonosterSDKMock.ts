/* eslint-disable @typescript-eslint/no-unused-vars */
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
import {
  EXPERIMENTAL_GOOGLE_TTS_CLIENT_EMAIL,
  EXPERIMENTAL_GOOGLE_TTS_PRIVATE_KEY
} from "../envs";

const fonosterSDKMock = {
  getApp: async (_appRef: string) => {
    return {
      ref: "fakeRef",
      accessKeyId: "WO00000000000000000000000000000000",
      endpoint: "localhost:50061",
      ttsConfig: {
        engine: "google",
        options: {
          voice: "en-US-Wavenet-D"
        },
        credentials: {
          client_email: EXPERIMENTAL_GOOGLE_TTS_CLIENT_EMAIL,
          private_key: EXPERIMENTAL_GOOGLE_TTS_PRIVATE_KEY
        }
      }
    };
  }
};

export { fonosterSDKMock };

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
import { Stream } from "stream";
import { VoiceLanguage } from "@fonoster/common";
import { SpeechClient } from "@google-cloud/speech";
import * as z from "zod";
import { AbstractSpeechToText } from "./AbstractSpeechToText";
import { GoogleSttConfig, SpeechResult, StreamSpeech } from "./types";
import { SpeechToText } from "../types";

const ENGINE_NAME = "stt.google";

class Google
  extends AbstractSpeechToText<typeof ENGINE_NAME>
  implements SpeechToText
{
  client: SpeechClient;
  engineConfig: GoogleSttConfig;
  readonly engineName = ENGINE_NAME;

  constructor(config: GoogleSttConfig) {
    super(config);
    this.client = new SpeechClient(config);
    this.engineConfig = config;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  streamTranscribe(_: Stream): StreamSpeech {
    // Not implemented
    throw new Error("Stream Transcribe not implemented for Google Engine");
  }

  async transcribe(stream: Stream): Promise<SpeechResult> {
    const languageCode =
      this.engineConfig.config.languageCode || VoiceLanguage.EN_US;

    const audioConfig = {
      interimResults: false,
      config: {
        encoding: "LINEAR16" as const,
        sampleRateHertz: 16000,
        languageCode
      }
    };

    return new Promise((resolve, reject) => {
      const recognizeStream = this.client
        .streamingRecognize(audioConfig)
        .on("error", (e: Error) => reject(e))
        .on("data", (data: Record<string, unknown>) => {
          if (data.results[0]?.alternatives[0]) {
            const result = {
              speech: data.results[0].alternatives[0].transcript,
              isFinal: true
            };
            resolve(result);
          } else {
            resolve({ speech: "", isFinal: true });
          }
          recognizeStream.destroy();
        });
      stream.pipe(recognizeStream);
    });
  }

  static getConfigValidationSchema(): z.Schema {
    return z.object({
      languageCode: z.nativeEnum(VoiceLanguage).optional().nullable()
    });
  }

  static getCredentialsValidationSchema(): z.Schema {
    return z.object({
      client_email: z.string(),
      private_key: z.string()
    });
  }
}

export { Google, ENGINE_NAME };
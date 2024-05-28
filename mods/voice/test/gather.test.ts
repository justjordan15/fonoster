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
import chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import { createSandbox, match } from "sinon";
import sinonChai from "sinon-chai";
import { getVoiceObject, sessionRef, voiceRequest } from "./helpers";
import { GatherSource } from "../src/verbs";

chai.use(chaiAsPromised);
chai.use(sinonChai);
const sandbox = createSandbox();

describe("@voice/verbs/gather", function () {
  afterEach(function () {
    return sandbox.restore();
  });

  it("should gather speech or dtmf", async function () {
    // Arrange
    const { Gather } = await import("../src/verbs");

    const voice = getVoiceObject(sandbox);

    const gather = new Gather(voiceRequest, voice);

    // Act
    await gather.run({
      sessionRef,
      timeout: 10,
      maxDigits: 1,
      source: GatherSource.SPEECH_AND_DTMF
    });

    // Assert
    expect(voice.removeListener).to.have.been.calledOnce;
    expect(voice.on).to.have.been.calledOnce;
    expect(voice.on).to.have.been.calledWith("data", match.func);
    expect(voice.write).to.have.been.calledOnce;
    expect(voice.write).to.have.been.calledWith({
      gatherRequest: {
        sessionRef,
        timeout: 10,
        maxDigits: 1,
        source: "SPEECH_AND_DTMF"
      }
    });
  });
});
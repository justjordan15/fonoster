/* eslint-disable prettier/prettier */
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
import { Metadata } from "@grpc/grpc-js";
import chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import { createSandbox } from "sinon";
import sinonChai from "sinon-chai";
import { TEST_TOKEN } from "../testToken";

chai.use(chaiAsPromised);
chai.use(sinonChai);
const sandbox = createSandbox();

describe("@calls/createCall", function () {
  afterEach(function () {
    return sandbox.restore();
  });

  it("should create a call", async function () {
    // Arrange
    const { createCall } = await import("../../src/calls/createCall");
    const metadata = new Metadata();
    metadata.set("token", TEST_TOKEN);
    const publisher = {
      publishCall: sandbox.stub()
    };
    const call = {
      metadata,
      request: {
        from: "+1234567890",
        to: "+1234567891",
        appRef: "app-ref",
      }
    };

    // Act
    await createCall(publisher)(call, sandbox.stub());

    // Assert
    expect(publisher.publishCall).to.have.been.calledOnce;
    expect(publisher.publishCall).to.have.been.calledWithMatch({
      from: "+1234567890",
      to: "+1234567891",
      appRef: "app-ref",
    });
  });
});
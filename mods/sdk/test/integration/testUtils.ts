/* eslint-disable import/namespace */
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
import { expect } from "chai";
import { FonosterClient } from "../../src/client/types";
import * as SDK from "../../src/node";

type TestCase = {
  id: string;
  name: string;
  method: string;
  request: unknown;
  grpcCode: number;
  needsResultFrom?: string;
};

async function runTestCase(
  client: FonosterClient,
  api: string,
  testCase: TestCase
) {
  const { method, request, grpcCode } = testCase;

  const apiInstance = new SDK[api](client);
  const clientMethod = apiInstance[method].bind(apiInstance);

  try {
    const response = await clientMethod(request);
    expect(response).to.not.be.undefined;
    return response;
  } catch (error) {
    expect(error.code).to.be.equal(grpcCode);
  }
}

export { TestCase, runTestCase };

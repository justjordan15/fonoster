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
import { GRPCErrors, handleError } from "@fonoster/common";
import { getAccessKeyIdFromCall } from "@fonoster/identity";
import { getLogger } from "@fonoster/logger";
import { ServerInterceptingCall } from "@grpc/grpc-js";
import { createFetchCalls } from "./createFetchCalls";
import { InfluxDBClient, ListCallsRequest, ListCallsResponse } from "./types";

const logger = getLogger({ service: "apiserver", filePath: __filename });

function listCalls(influx: InfluxDBClient) {
  const fetchCalls = createFetchCalls(influx);

  return async (
    call: {
      request: ListCallsRequest;
    },
    callback: (error: GRPCErrors, response?: ListCallsResponse) => void
  ) => {
    const accessKeyId = getAccessKeyIdFromCall(
      call as unknown as ServerInterceptingCall
    );

    logger.verbose("call to listCalls", { ...call.request, accessKeyId });

    try {
      const result = await fetchCalls(accessKeyId, call.request);

      callback(null, result);
    } catch (error) {
      handleError(error, callback);
    }
  };
}

export { listCalls };

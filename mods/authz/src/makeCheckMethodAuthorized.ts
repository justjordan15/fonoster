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
import { createInterceptingCall } from "@fonoster/common";
import { getLogger } from "@fonoster/logger";
import { ServerInterceptingCall, status } from "@grpc/grpc-js";
import { AuthzClient } from "./client/AuthzClient";
import { CheckMethodAuthorizedRequest } from "./types";
import { getAccessKeyIdFromCall } from "@fonoster/identity";

const logger = getLogger({ service: "authz", filePath: __filename });

/**
 * This function is a gRPC interceptor that checks if the request a method is authorized
 * to be called by the user.
 *
 * @param {string} authzServer - The public key to validate the token
 * @return {Function} - The gRPC interceptor
 */
function makeCheckMethodAuthorized(authzServer: string, methods: string[]) {
  logger.verbose("creating check method authorized interceptor", {
    authzServer,
    methods
  });
  const authz = new AuthzClient(authzServer);

  /**
   * Inner function that will be called by the gRPC server.
   *
   * @param {object} methodDefinition - The method definition
   * @param {string} methodDefinition.path - The path of the gRPC method
   * @param {ServerInterceptingCall} call - The call object
   * @return {ServerInterceptingCall} - The modified call object
   */
  return (methodDefinition: { path: string }, call: ServerInterceptingCall) => {
    const { path: method } = methodDefinition;

    if (!methods.includes(method)) {
      // Ignore the check if the method is not in the list
      logger.silly("method is not in the list", { method });
      return call;
    }

    logger.silly("checking if method is authorized", { method });

    const accessKeyId = getAccessKeyIdFromCall(call);

    return new ServerInterceptingCall(call, {
      start: async (next) => {
        try {
          await authz.checkMethodAuthorized({
            accessKeyId,
            method
          } as CheckMethodAuthorizedRequest);

          logger.verbose("method authorized by external service", {
            method,
            accessKeyId
          });

          next();
        } catch (error) {
          logger.verbose("method unauthorized by external service", {
            method,
            accessKeyId
          });
          createInterceptingCall({
            call,
            code: status.PERMISSION_DENIED,
            details: `Method '${method}' unauthorized by external service - accessKeyId ${accessKeyId}`
          });
        }
      }
    });
  };
}

export { makeCheckMethodAuthorized };

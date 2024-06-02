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
import { GRPCError } from "@fonoster/common";
import { getLogger } from "@fonoster/logger";
import { ServerInterceptingCall } from "@grpc/grpc-js";
import { ApiRoleEnum } from "./ApiRoleEnum";
import { Prisma } from "../db";
import { getAccessKeyIdFromCall } from "../utils";

const logger = getLogger({ service: "identity", filePath: __filename });

type ListApiKeysRequest = {
  pageSize: number;
  pageToken: string;
};

type ApiKey = {
  ref: string;
  accessKeyId: string;
  role: ApiRoleEnum;
  expiresAt: Date;
  createdAt: Date;
  updatedAt: Date;
};

type ListApiKeysResponse = {
  items: ApiKey[];
  nextPageToken?: string;
};

function listApiKeys(prisma: Prisma) {
  return async (
    call: { request: ListApiKeysRequest },
    callback: (error: GRPCError, response?: ListApiKeysResponse) => void
  ) => {
    const { pageSize, pageToken } = call.request;

    const accessKeyId = getAccessKeyIdFromCall(
      call as unknown as ServerInterceptingCall
    );

    logger.verbose("list keys for workspace", { accessKeyId });

    const workspace = await prisma.workspace.findUnique({
      where: {
        accessKeyId
      }
    });

    const keys = await prisma.apiKey.findMany({
      where: {
        workspaceRef: workspace.ref
      },
      take: pageSize,
      skip: pageToken ? 1 : 0,
      cursor: pageToken ? { ref: pageToken } : undefined
    });

    const items = keys.map((key) => ({
      ref: key.ref,
      accessKeyId: key.accessKeyId,
      role: key.role as ApiRoleEnum,
      expiresAt: key.expiresAt,
      createdAt: key.createdAt,
      updatedAt: key.updatedAt
    }));

    const response: ListApiKeysResponse = {
      items,
      nextPageToken: items[items.length - 1]?.ref
    };

    callback(null, response);
  };
}

export { listApiKeys };
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
import { Metadata } from "grpc-web";
import {
  CreateApplicationRequest,
  CreateApplicationResponse
} from "../generated/node/applications_pb";
import {
  ExchangeApiKeyRequest,
  ExchangeApiKeyResponse,
  ExchangeCredentialsRequest,
  ExchangeCredentialsResponse,
  ExchangeRefreshTokenRequest,
  ExchangeRefreshTokenResponse
} from "../generated/node/identity_pb";

type EnumMapping<T> = Array<[string, T]>;

type ClientFunction<T, U> = (
  request: T,
  metadata: Metadata | unknown | null,
  callback: (err: Error | null, response: U | null) => void
) => void;

type IdentityClient = {
  exchangeApiKey: ClientFunction<ExchangeApiKeyRequest, ExchangeApiKeyResponse>;
  exchangeCredentials: ClientFunction<
    ExchangeCredentialsRequest,
    ExchangeCredentialsResponse
  >;
  exchangeRefreshToken: ClientFunction<
    ExchangeRefreshTokenRequest,
    ExchangeRefreshTokenResponse
  >;
};

type ApplicationsClient = {
  createApplication: ClientFunction<
    CreateApplicationRequest,
    CreateApplicationResponse
  >;
};

interface FonosterClient {
  getAccessToken(): string;
  getAccessKeyId(): string;
  getApplicationsClient(): ApplicationsClient;
  getMetadata(): Metadata | unknown | null;
}

export {
  FonosterClient,
  EnumMapping,
  ClientFunction,
  IdentityClient,
  ApplicationsClient
};
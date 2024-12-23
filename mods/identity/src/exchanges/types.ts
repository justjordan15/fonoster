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
import { Validators as V } from "@fonoster/common";
import { WorkspaceRoleEnum } from "@fonoster/types";
import { z } from "zod";
import { TokenUseEnum } from "./TokenUseEnum";

type Role = {
  name: string;
  description: string;
  access: string[];
};

type Access = {
  accessKeyId: string;
  role: WorkspaceRoleEnum;
};

type BaseToken = {
  iss: string;
  sub: string;
  aud: string;
  exp: number;
  iat: number;
  tokenUse: TokenUseEnum;
  accessKeyId: string;
};

type IdToken = BaseToken & {
  emailVerified: boolean;
  phoneNumberVerified: boolean;
  phoneNumber: string;
  email: string;
  tokenUse: TokenUseEnum.ID;
};

type AccessToken = BaseToken & {
  access: Access[];
  tokenUse: TokenUseEnum.ACCESS;
};

type RefreshToken = BaseToken & {
  tokenUse: TokenUseEnum.REFRESH;
};

type IdentityConfig = {
  issuer: string;
  audience: string;
  privateKey: string;
  publicKey: string;
  encryptionKey: string;
  accessTokenExpiresIn: number | string;
  refreshTokenExpiresIn: number | string;
  idTokenExpiresIn: number | string;
  smtpConfig: {
    sender: string;
    host: string;
    port: number;
    secure: boolean;
    auth: {
      user: string;
      pass: string;
    };
  };
  twilioSmsConfig?: {
    accountSid: string;
    authToken: string;
    sender: string;
  };
  githubOauth2Config?: {
    clientId: string;
    clientSecret: string;
  };
};

type DecodedToken<T extends TokenUseEnum> = T extends TokenUseEnum.ID
  ? IdToken
  : T extends TokenUseEnum.ACCESS
    ? AccessToken
    : T extends TokenUseEnum.REFRESH
      ? TokenUseEnum
      : never;

type ExchangeApiKeysRequest = z.infer<typeof V.exchangeApiKeysRequestSchema>;

type ExchangeOauth2CodeRequest = z.infer<typeof V.exchangeOauth2RequestSchema>;

type ExchangeCredentialsRequest = z.infer<
  typeof V.exchangeCredentialsRequestSchema
>;

type ExchangeResponse = {
  idToken: string;
  accessToken: string;
  refreshToken: string;
};

type ExchangeRefreshTokenRequest = z.infer<
  typeof V.exchangeRefreshTokenRequestSchema
>;

export {
  Access,
  AccessToken,
  DecodedToken,
  ExchangeApiKeysRequest,
  ExchangeCredentialsRequest,
  ExchangeOauth2CodeRequest,
  ExchangeRefreshTokenRequest,
  ExchangeResponse,
  IdToken,
  IdentityConfig,
  RefreshToken,
  Role
};

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
import NotificationsIcon from "@mui/icons-material/NotificationsActiveOutlined";
import { Badge, IconButton, styled } from "@mui/material";

const StyledIconButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "isActive"
})<{
  isActive: boolean;
}>(({ theme, isActive }) => ({
  backgroundColor: isActive
    ? theme.palette.primary[800]
    : theme.palette.primary[100],
  width: "33px",
  height: "33px",
  color: isActive ? "#FFF" : theme.palette.primary[800],
  "&:hover": {
    backgroundColor: isActive
      ? theme.palette.primary[900]
      : theme.palette.primary[200]
  },
  position: "relative"
}));

const StyledBadge = styled(Badge)<{
  label: number;
}>(({ theme, label }) => ({
  "& .MuiBadge-badge": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flexShrink: 0,
    width: "10px",
    height: "10px",
    fontSize: label > 9 ? "6px" : "8px",
    fontWeight: 600,
    fontFamily: "Poppins",
    fontFeatureSettings: "'liga' off, 'clig' off",
    fontStyle: "normal",
    lineHeight: "16px",
    borderRadius: "50%",
    textAlign: "center",
    minWidth: "10px",
    padding: "0px",
    paddingTop: label > 9 ? "2px" : "1px",
    top: "-5px",
    right: "-5px",
    color: theme.palette.warning[50]
  }
}));

const StyledNotificationsIcon = styled(NotificationsIcon)(() => ({
  fontSize: 16
}));

export { StyledBadge, StyledIconButton, StyledNotificationsIcon };

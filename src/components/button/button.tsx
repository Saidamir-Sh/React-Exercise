import React from "react";
import styled from "styled-components";

import { ButtonProps } from "./button.props";

export const StyledBtn = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 24px 10px;
  background: #004fc1;
  border-radius: 6px;
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  line-height: 16px;
  cursor: pointer;
`;

export const ButtonConditionOne = styled(
  ({ children, value, ...rest }: ButtonProps) => (
    <StyledBtn {...rest}>{children}</StyledBtn>
  ),
)`
  position: absolute;
  width: 300px;
  height: 40px;
  left: 810px;
  top: 755px;
  border-radius: 6px;
`;
export const ButtonConditionTwo = styled(
  ({ children, value, ...rest }: ButtonProps) => (
    <StyledBtn {...rest}>{children}</StyledBtn>
  ),
)`
  position: absolute;
  width: 300px;
  height: 40px;
  left: 810px;
  top: 850px;
  border-radius: 6px;
`;

export const ButtonDurationOne = styled(
  ({ children, value, ...rest }: ButtonProps) => (
    <StyledBtn {...rest}>{children}</StyledBtn>
  ),
)`
  position: absolute;
  width: 145px;
  height: 40px;
  left: 750px;
  top: 815px;
`;

export const ButtonDurationTwo = styled(
  ({ children, value, ...rest }: ButtonProps) => (
    <StyledBtn {...rest}>{children}</StyledBtn>
  ),
)`
  position: absolute;
  width: 145px;
  height: 40px;
  left: 965px;
  top: 815px;
`;

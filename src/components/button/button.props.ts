import React from "react";

export interface ButtonProps extends React.HTMLAttributes<HTMLAnchorElement> {
  /* The value will be setted to condition state */
  value?: string;
  children?: React.ReactNode | string;
}

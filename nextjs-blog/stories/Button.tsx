import React from "react";
import "./button.css";
import applyStyleModifiers from "../modifiers/applyStyleModifiers";
import styled, { StyledComponent } from "styled-components";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large" | "xlarge";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const TEXT_MODIFIERS = {
  success: () => `
  color: #118D4E;
  font-size: 30px;
 `,
  warning: () => `
 color: #DBC72A;
 `,
  blueLarge: () => `
  font-size: 70px;
  color: blue;`,
  error: () => `
 color: #DB2A30;
 `,
};

const BTN: any = styled.button`
  ${applyStyleModifiers(TEXT_MODIFIERS)}
`;
/**
 * Primary UI component for user interaction
 */

export const Buttn = () => {
  return (
    <BTN onClick={() => alert("Get btn")} modifiers={["error"]}>
      Inside button
    </BTN>
  );
};
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

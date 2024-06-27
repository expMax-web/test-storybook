import { styled } from "@linaria/react";
import { FC, ReactNode } from "react";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant: "primary" | "secondary";
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * How large should the button be?
   */
  children: ReactNode;

  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const StyledButton = styled.button<ButtonProps>`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  background-color: ${({ variant }) =>
    variant === "primary" ? "#1ea7fd" : "transparent"};

  color: ${({ variant }) => (variant === "primary" ? "white" : "#333")};

  box-shadow: ${({ variant }) =>
    variant === "primary"
      ? "none"
      : "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset"};

  font-size: ${({ size }) => {
    switch (size) {
      case "small":
        return "12px";
      case "medium":
        return "14px";
      default:
        return "16px";
    }
  }};

  padding: ${({ size }) => {
    switch (size) {
      case "small":
        return "10px 16px";
      case "medium":
        return "11px 20px";
      default:
        return "12px 24px";
    }
  }};
`;

/**
 * Primary UI component for user interaction
 */
export const Button: FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  backgroundColor,
  children,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      variant={variant}
      style={{ backgroundColor }}
      size={size}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

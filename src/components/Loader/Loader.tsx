import { FC } from "react";
import { styled } from "@linaria/react";

type LoaderSize = 16 | 20 | 32 | 48 | 80;

export type LoaderProps = {
  size: LoaderSize;
  className?: string;
};

const LoaderContainer = styled.div<LoaderProps>`
  position: relative;

  width: ${({ size }) => `${size}px`};
  &:before {
    content: "";
    display: block;
    padding-top: 100%;
  }
`;

const Svg = styled.svg`
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  animation: rotate 2s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const Circle = styled.circle`
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35px;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124px;
    }
  }
  stroke-dasharray: 1, 100;
  stroke-dashoffset: 1;
  animation: dash 1.5s ease-in-out infinite;
  stroke-linecap: round;
`;

export const Loader: FC<LoaderProps> = ({ size, className }) => (
  <LoaderContainer size={size} className={className}>
    <Svg viewBox="25 25 50 50">
      <Circle
        cx="50"
        cy="50"
        r="20"
        fill="none"
        strokeWidth="4"
        stroke="#0E71EB"
      />
    </Svg>
  </LoaderContainer>
);

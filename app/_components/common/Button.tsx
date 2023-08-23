import palette from '@styles/palette';
import type { ComponentPropsWithoutRef, CSSProperties, PropsWithChildren } from 'react';
import { styled } from 'styled-components';

const SIZE_STYLE = {
  medium: '9.6rem',
  full: '100%',
} as const;

type Size = keyof typeof SIZE_STYLE;

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  size?: Size;
  color?: CSSProperties['color'];
  $backgroundColor?: CSSProperties['backgroundColor'];
}

const Button = ({
  children,
  size = 'full',
  color = palette.white,
  $backgroundColor = palette.orange_30,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <Wrapper size={SIZE_STYLE[size]} color={color} $backgroundColor={$backgroundColor} {...props}>
      {children}
    </Wrapper>
  );
};

export default Button;

const Wrapper = styled.button<
  Omit<ButtonProps, 'size'> & { size: (typeof SIZE_STYLE)[keyof typeof SIZE_STYLE] }
>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size};
  padding: 0.62rem 0;
  background: ${({ $backgroundColor }) => $backgroundColor};
  color: ${({ color }) => color};
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.008rem;
  transition: all 100ms ease-in-out;
  cursor: pointer;

  &:disabled {
    background: ${palette.grey_60};
    cursor: not-allowed;
  }
`;

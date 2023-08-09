import React from 'react';
import styled from 'styled-components';

type ButtonProps = {};

const Button: React.FC<ButtonProps> = () => {
  return (
    <ButtonBlock>
      <p>button</p>
    </ButtonBlock>
  );
};

const ButtonBlock = styled.div``;

export default Button;

'use client';

import React from 'react';
import styled from 'styled-components';

type TestProps = {};

const Test: React.FC<TestProps> = () => {
  return (
    <TestBlock>
      <p>test component</p>
    </TestBlock>
  );
};

const TestBlock = styled.div`
  p {
    color: red;
  }
`;

export default Test;

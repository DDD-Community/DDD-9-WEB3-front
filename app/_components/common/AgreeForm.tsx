import { Button, CheckBox, TopNavigation } from '@components/common';
import { ROUTES } from '@constants/routes';
import palette from '@styles/palette';
import type { FormEvent, PropsWithChildren } from 'react';
import { styled } from 'styled-components';

interface AgreeFormProps {
  isAllAgreed: boolean;
  title: string;
  buttonContent: string;
  onClickAllAgree: () => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const AgreeForm = ({
  children,
  isAllAgreed,
  title,
  buttonContent,
  onClickAllAgree,
  onSubmit,
}: PropsWithChildren<AgreeFormProps>) => {
  return (
    <Form onSubmit={onSubmit}>
      <TopNavigation version="CLOSE" path={ROUTES.HOME} />
      <div>
        <Title>{title}</Title>
        <CheckBox label="모두동의" isChecked={isAllAgreed} onChange={onClickAllAgree} />
        <Terms>{children}</Terms>
      </div>
      <Button type="submit" disabled={!isAllAgreed}>
        {buttonContent}
      </Button>
    </Form>
  );
};

export default AgreeForm;

const Form = styled.form`
  position: relative;
  min-height: calc(100vh - 10.8rem);
  padding: 8.1rem 1.2rem 2.7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h1`
  margin-bottom: 2.5rem;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.01rem;
  white-space: pre-line;
`;

const Terms = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 16px;
  margin-top: 16px;
  border-top: 1px solid ${palette.grey_60};
`;

import { Button, CheckBox, TopNavigation } from '@components/common';
import { ROUTES } from '@constants/routes';
import palette from '@styles/palette';
import type { FormEvent, PropsWithChildren } from 'react';
import { styled } from 'styled-components';

interface AgreeFormProps {
  isAllAgreed: boolean;
  title: string;
  buttonContent: string;
  navigationPath?: (typeof ROUTES)[keyof typeof ROUTES];
  onClickAllAgree: () => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const AgreeForm = ({
  children,
  isAllAgreed,
  title,
  buttonContent,
  navigationPath = ROUTES.HOME,
  onClickAllAgree,
  onSubmit,
}: PropsWithChildren<AgreeFormProps>) => {
  return (
    <Form onSubmit={onSubmit}>
      <TopNavigation version="CLOSE" $isXMargin={false} path={navigationPath} />
      <FormBody>
        <div>
          <Title>{title}</Title>
          <CheckBox label="모두동의" isChecked={isAllAgreed} onChange={onClickAllAgree} />
          <Terms>{children}</Terms>
        </div>
        <Button type="submit" disabled={!isAllAgreed}>
          {buttonContent}
        </Button>
      </FormBody>
    </Form>
  );
};

export default AgreeForm;

const Form = styled.form`
  padding: 2.8rem 1.25rem 2.7rem;
`;

const FormBody = styled.div`
  min-height: calc(100vh - 9.5rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h1`
  margin-top: 1.25rem;
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
  gap: 0.75rem;
  padding-top: 1rem;
  margin-top: 1rem;
  border-top: 1px solid ${palette.grey_60};
`;

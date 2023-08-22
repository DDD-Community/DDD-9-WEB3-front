'use client';

import { Button, CheckBox } from '@components/common';
import { ROUTES } from '@constants/routes';
import palette from '@styles/palette';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { type ChangeEvent, type FormEvent, useState } from 'react';
import { styled } from 'styled-components';

type TermType = 'service' | 'data' | 'location';

const TERM_LIST = [
  { id: 'service', label: '서비스 이용약관', link: ROUTES.TERM },
  { id: 'data', label: '개인정보 수집 및 이용동의', link: ROUTES.TERM },
  { id: 'location', label: '위치기반 서비스 이용약관', link: ROUTES.TERM },
];

const DEFAULT_AGREEDTERMS = {
  service: false,
  data: false,
  location: false,
};

export default function SignupPage() {
  const router = useRouter();
  const [isAllAgreed, setIsAllAgreed] = useState(false);
  const [agreedTerms, setAgreedTerms] = useState(DEFAULT_AGREEDTERMS);

  const handleAllAgreeClick = () => {
    setIsAllAgreed(prev => !prev);
    setAgreedTerms({ service: !isAllAgreed, data: !isAllAgreed, location: !isAllAgreed });
  };

  const handleTermClick = (e: ChangeEvent<HTMLInputElement>) => {
    const checkedTermId = e.target.id as TermType;
    const isCheckedTerm = e.target.checked;

    const isAllChecked =
      Object.entries(agreedTerms)
        .filter(agreeItem => agreeItem[0] !== checkedTermId)
        .every(el => el[1]) && isCheckedTerm;

    if (isAllChecked) {
      setIsAllAgreed(true);
    } else {
      setIsAllAgreed(false);
    }

    setAgreedTerms(prev => ({ ...prev, [checkedTermId]: !prev[checkedTermId] }));
  };

  const handleSubmitClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isAllAgreed) {
      return;
    }

    router.push(ROUTES.HOME);
  };

  return (
    <>
      <AgreeForm onSubmit={handleSubmitClick}>
        <div>
          <Title>
            서비스 이용약관에
            <br />
            동의해주세요.
          </Title>
          <CheckBox label="모두동의" isChecked={isAllAgreed} onChange={handleAllAgreeClick} />
          <Terms>
            {TERM_LIST.map(termItem => (
              <CheckBoxList key={termItem.id}>
                <CheckBox
                  id={termItem.id}
                  label={termItem.label}
                  isChecked={agreedTerms[termItem.id as TermType]}
                  onChange={handleTermClick}
                />
                <Link href={termItem.link}>
                  <TermInfo>[전문보기]</TermInfo>
                </Link>
              </CheckBoxList>
            ))}
          </Terms>
        </div>
        <Button type="submit" disabled={!isAllAgreed}>
          회원가입 완료
        </Button>
      </AgreeForm>
    </>
  );
}

const AgreeForm = styled.form`
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
`;

const Terms = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 16px;
  margin-top: 16px;
  border-top: 1px solid ${palette.grey_60};
`;

const CheckBoxList = styled.li`
  display: flex;
  justify-content: space-between;
`;

const TermInfo = styled.span`
  font-weight: 700;
  font-size: 14px;
  color: ${palette.grey_50};
`;

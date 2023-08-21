'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import { styled } from 'styled-components';
import palette from '@styles/palette';
import CheckBox from '@components/common/CheckBox';
import Button from '@components/common/Button';
import Link from 'next/link';

type TermType = 'service' | 'data' | 'location';

const TERM_LIST = [
  { id: 'service', label: '서비스 이용약관', link: '/' },
  { id: 'data', label: '개인정보 수집 및 이용동의', link: '/' },
  { id: 'location', label: '위치기반 서비스 이용약관', link: '/' },
];

export default function SignupPage() {
  const [isAllAgreed, setIsAllAgreed] = useState(false);
  const [agreedTermList, setAgreedTermList] = useState({
    service: false,
    data: false,
    location: false,
  });

  const handleAllAgreeClick = () => {
    setIsAllAgreed(prev => !prev);
    setAgreedTermList({ service: !isAllAgreed, data: !isAllAgreed, location: !isAllAgreed });
  };

  const handleTermClick = (e: ChangeEvent<HTMLInputElement>) => {
    const clickedTermId = e.target.id as TermType;

    const isAllChecked =
      Object.entries(agreedTermList)
        .filter(agreeItem => agreeItem[0] !== clickedTermId)
        .every(el => el[1]) && e.target.checked;

    if (isAllChecked) {
      setIsAllAgreed(true);
    } else {
      setIsAllAgreed(false);
    }

    setAgreedTermList(prev => ({ ...prev, [clickedTermId]: !prev[clickedTermId] }));
  };

  const handleSubmitClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isAllAgreed) {
      return;
    }
  };

  return (
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
                isChecked={agreedTermList[termItem.id as TermType]}
                onChange={handleTermClick}
              />
              <Link href={termItem.link}>
                <TermInfo>[전문보기]</TermInfo>
              </Link>
            </CheckBoxList>
          ))}
        </Terms>
      </div>
      <Button type="submit">회원가입</Button>
    </AgreeForm>
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

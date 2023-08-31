'use client';

import { memberApi } from '@apis/member';
import { AgreeForm, CheckBox } from '@components/common';
import { ROUTES } from '@constants/routes';
import { storage } from '@lib/util/storage';
import { useAuthActions } from '@store/auth';
import { useMemeberInfo } from '@store/member';
import palette from '@styles/palette';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { type ChangeEvent, type FormEvent, useState } from 'react';
import { styled } from 'styled-components';

type AgreeType = 'service' | 'data' | 'location';

const AGREE_LIST = [
  { id: 'service', label: '서비스 이용약관', link: ROUTES.TERM },
  { id: 'data', label: '개인정보 수집 및 이용동의', link: ROUTES.TERM },
  { id: 'location', label: '위치기반 서비스 이용약관', link: ROUTES.TERM },
];

const INITIAL_AGREELIST = {
  service: false,
  data: false,
  location: false,
};

export default function SignupPage() {
  const router = useRouter();
  const [isAllAgreed, setIsAllAgreed] = useState(false);
  const [isAgreedList, setIsAgreedList] = useState(INITIAL_AGREELIST);
  const memberInfo = useMemeberInfo();
  const { setIsLoggedIn } = useAuthActions();

  const handleAllAgreeClick = () => {
    setIsAllAgreed(prev => !prev);
    setIsAgreedList({ service: !isAllAgreed, data: !isAllAgreed, location: !isAllAgreed });
  };

  const handleTermClick = (e: ChangeEvent<HTMLInputElement>) => {
    const checkedTermId = e.target.id as AgreeType;
    const isCheckedTerm = e.target.checked;

    const isAllChecked =
      Object.entries(isAgreedList)
        .filter(agreeItem => agreeItem[0] !== checkedTermId)
        .every(el => el[1]) && isCheckedTerm;

    if (isAllChecked) {
      setIsAllAgreed(true);
    } else {
      setIsAllAgreed(false);
    }

    setIsAgreedList(prev => ({ ...prev, [checkedTermId]: !prev[checkedTermId] }));
  };

  const handleSubmitClick = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isAllAgreed) {
      return;
    }

    const { user_id } = await memberApi.registerMember(memberInfo);

    storage.setUserId(user_id);
    setIsLoggedIn(true);

    router.push(ROUTES.HOME);
  };

  return (
    <AgreeForm
      isAllAgreed={isAllAgreed}
      title={'서비스 이용약관에\n동의해주세요.'}
      buttonContent="회원가입 완료"
      onClickAllAgree={handleAllAgreeClick}
      onSubmit={handleSubmitClick}
    >
      {AGREE_LIST.map(termItem => (
        <CheckBoxList key={termItem.id}>
          <CheckBox
            id={termItem.id}
            label={termItem.label}
            isChecked={isAgreedList[termItem.id as AgreeType]}
            onChange={handleTermClick}
          />
          <Link href={termItem.link}>
            <TermInfo>[전문보기]</TermInfo>
          </Link>
        </CheckBoxList>
      ))}
    </AgreeForm>
  );
}

const CheckBoxList = styled.li`
  display: flex;
  justify-content: space-between;
`;

const TermInfo = styled.span`
  font-weight: 700;
  font-size: 14px;
  color: ${palette.grey_50};
`;

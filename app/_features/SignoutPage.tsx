'use client';

import { memberApi } from '@apis/member';
import { AgreeForm, CheckBox } from '@components/common';
import { ROUTES } from '@constants/routes';
import { storage } from '@lib/util/storage';
import { useAuthActions } from '@store/auth';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';
import { styled } from 'styled-components';

type AgreeType = 'warn' | 'data' | 'location';

const AGREE_LIST = [
  { id: 'warn', label: '스크랩한 내용 복구가 어려워요.' },
  { id: 'data', label: '개인정보 수집 및 이용동의' },
  { id: 'location', label: '위치기반 서비스 이용약관' },
];

const INITIAL_AGREELIST = {
  warn: false,
  data: false,
  location: false,
};

const SignoutPage = () => {
  const router = useRouter();
  const [isAllAgreed, setIsAllAgreed] = useState(false);
  const [isAgreedList, setIsAgreedList] = useState(INITIAL_AGREELIST);
  const { setIsLoggedIn } = useAuthActions();

  const handleAllAgreeClick = () => {
    setIsAllAgreed(prev => !prev);
    setIsAgreedList({ warn: !isAllAgreed, data: !isAllAgreed, location: !isAllAgreed });
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

    await memberApi.deleteMember();

    storage.deleteAccessToken();
    storage.deleteRefreshToken();
    storage.deleteUserId();

    setIsLoggedIn(false);

    router.push(ROUTES.HOME);
  };

  return (
    <AgreeForm
      isAllAgreed={isAllAgreed}
      title={'회원탈퇴 신청 전\n아래의 안내사항을 확인해주세요.'}
      buttonContent="회원탈퇴"
      navigationPath={ROUTES.MYPAGE}
      onClickAllAgree={handleAllAgreeClick}
      onSubmit={handleSubmitClick}
    >
      {AGREE_LIST.map(agreeItem => (
        <CheckBoxList key={agreeItem.id}>
          <CheckBox
            id={agreeItem.id}
            label={agreeItem.label}
            isChecked={isAgreedList[agreeItem.id as AgreeType]}
            onChange={handleTermClick}
          />
        </CheckBoxList>
      ))}
    </AgreeForm>
  );
};

export default SignoutPage;

const CheckBoxList = styled.li`
  display: flex;
  justify-content: space-between;
`;

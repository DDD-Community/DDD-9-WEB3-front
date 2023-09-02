import { useGetMember } from '@hooks/queries/useMember';
import { Skeleton } from '@mui/material';
import { useIsLoggedIn } from '@store/auth';
import palette from '@styles/palette';
import { styled } from 'styled-components';

const Profile = () => {
  const isLoggedIn = useIsLoggedIn();
  const { data: memberInfo } = useGetMember({ enabled: isLoggedIn });

  return (
    <Wrapper>
      <Message>
        안녕하세요,&nbsp;
        {memberInfo?.nickname ? (
          <NickName>{memberInfo?.nickname}</NickName>
        ) : (
          <Skeleton variant="rectangular" width={50} height={28} sx={{ borderRadius: '8px' }} />
        )}
        님!
      </Message>
      {memberInfo?.email ? (
        <Email>{memberInfo?.email}</Email>
      ) : (
        <Skeleton
          variant="rectangular"
          width={180}
          height={12}
          sx={{ borderRadius: '4px', marginTop: '0.8rem' }}
        />
      )}
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled.header`
  padding: 1.5rem 0;
  border-bottom: 0.6rem solid ${palette.grey_80};
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.05rem;
  margin-bottom: 0.25rem;
`;

const Message = styled.h1`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.05rem;
  margin-bottom: 0.25rem;
`;

const NickName = styled.strong`
  font-weight: 700;
`;

const Email = styled.span`
  color: ${palette.grey_30};
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 157%;
  letter-spacing: -0.03rem;
`;

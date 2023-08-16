import LottoBall1 from '@assets/images/LottoBall1.png';
import LottoBall2 from '@assets/images/LottoBall2.png';
import LottoBall3 from '@assets/images/LottoBall3.png';
import Image from 'next/image';
import { keyframes, styled } from 'styled-components';

const LottoBalls = () => {
  return (
    <>
      <SlideAnimation>
        <Image src={LottoBall1} width={125} alt="lotto" />
      </SlideAnimation>
      <SlideAnimation>
        <Image src={LottoBall2} width={147} alt="lotto" />
      </SlideAnimation>
      <SlideAnimation>
        <Image
          src={LottoBall3}
          style={{ marginLeft: '-1.6rem', marginRight: '-0.8rem', marginBottom: '-0.39rem' }}
          width={171}
          alt="lotto"
        />
      </SlideAnimation>
    </>
  );
};

const LottoBallSlider = () => {
  return (
    <Wrapper>
      <LottoBalls />
      <LottoBalls />
    </Wrapper>
  );
};

export default LottoBallSlider;

const slide = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-28.2rem));
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: end;
  width: 23.4rem;
  margin: 0 -1.8rem;
  padding-bottom: 2.1rem;
  overflow: hidden;
`;

const SlideAnimation = styled.div`
  display: inline-block;
  margin: 0 0.5rem;
  animation: ${slide} 10s linear infinite;
`;

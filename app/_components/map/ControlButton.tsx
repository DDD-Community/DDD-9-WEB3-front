import MinusIcon from '@assets/svg/minusIcon.svg';
import PlusIcon from '@assets/svg/plusIcon.svg';
import palette from '@styles/palette';
import { styled } from 'styled-components';

const ControlButton = () => {
  return (
    <Wrapper>
      <Button>
        <PlusIcon />
      </Button>
      <Button>
        <MinusIcon />
      </Button>
    </Wrapper>
  );
};

export default ControlButton;

const Wrapper = styled.div`
  display: flex;
  border-radius: 8px;
  border: 1px solid ${palette.grey_70};
  box-shadow:
    0 0 2px 0 rgba(0, 0, 0, 0.25),
    0 0 6px 0 rgba(117, 127, 143, 0.3);
`;

const Button = styled.div`
  width: 40px;
  height: 40px;
  padding: 10px;
  color: ${palette.white};
`;

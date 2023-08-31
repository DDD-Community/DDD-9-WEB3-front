import GPSIcon from '@assets/svg/gpsIcon.svg';
import styled from '@emotion/styled';
import palette from '@styles/palette';

interface PositionProps {
  isActivated: boolean;
  onClick?: () => void;
}

const GPSButton = ({ isActivated }: PositionProps) => {
  return (
    <Wrapper state={isActivated}>
      <GPSIcon color={isActivated ? palette.blue_30 : palette.grey_20} />
    </Wrapper>
  );
};

export default GPSButton;

const Wrapper = styled.button<{ state: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${palette.white};
  border: ${(props) => props.state ? `1px solid ${palette.blue_30}` : `1px solid ${palette.grey_70}`};
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.25), 0 0 6px 0 rgba(117, 127, 143, 0.30);
`;

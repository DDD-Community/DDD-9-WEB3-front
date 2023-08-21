import IconMapType from '@components/icons/IconMapType';
import palette from '@styles/palette';
import { styled } from 'styled-components';

const MapTypeButton = ({ placeType }: string) => {
  return (
    <Wrapper>
      <IconMapType placeType={placeType} />
      <Text>{placeType}</Text>
    </Wrapper>
  );
};

export default MapTypeButton;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 32px;
  background-color: ${palette.white};
  border-radius: 100px;
  padding: 2px 14px 2px 12px;
  font-size: 0.95rem;
  font-weight: 400;
  box-shadow:
    0 0 2px 0 rgba(0, 0, 0, 0.25),
    0 0 6px 0 rgba(117, 127, 143, 0.3);
`;

const Text = styled.p`
  display: inline-block;
  width: max-content;
  margin-left: 0.2rem;
`;

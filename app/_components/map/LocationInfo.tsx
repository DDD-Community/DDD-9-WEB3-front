import styled from 'styled-components';
import palette from '@styles/palette';
import NearMe from '@assets/svg/nearMe.svg';
// import {LocationType} from "@types/map/index.d.ts";

type Address = string;

const LocationInfo = ({ address }: Address) => {
  return (
    <Wrap>
      <NearMe />
      <Text>{address}</Text>
    </Wrap>
  );
};

export default LocationInfo;

const Wrap = styled.div`
  position: absolute;
  left: 50px;
  bottom: 50px;
  width: fit-content;
  height: 36px;
  background-color: ${palette.grey_20};
  padding: 8px 16px;
`;

const Text = styled.span`
  color: ${palette.white};
  padding-left: 6px;
`;

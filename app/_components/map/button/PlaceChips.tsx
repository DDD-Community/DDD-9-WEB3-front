import Stack from '@mui/material/Stack';
import PlaceTypeChip from '@components/map/button/PlaceTypeChip';
import palette from '@styles/palette';
import { styled } from 'styled-components';
import { PLACE_TYPE } from '@constants/map';

const PlaceChips = () => {
  return (
    <Stack direction="row" spacing={1}>
      <PlaceTypeChip placeType={PLACE_TYPE.LOTTO} isSelected={false} />
      <PlaceTypeChip placeType={PLACE_TYPE.SHOP} isSelected={false} />
      <PlaceTypeChip placeType={PLACE_TYPE.BOOKMARK} isSelected={false} />
    </Stack>
  );
};

export default PlaceChips;

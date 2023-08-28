import Chip from '@mui/material/Chip';
import palette from '@styles/palette';
import BookmarkIcon from '@assets/svg/bookmarkIcon.svg';
import LottoIcon from '@assets/svg/lottoIcon.svg';
import ShopIcon from '@assets/svg/shopIcon.svg';
import { PLACE_TYPE } from '@constants/map';
import { generateUUID } from '@lib/util';

interface ChipProps {
  placeType: keyof typeof PLACE_TYPE;
  isSelected: boolean;
}

let onStyles = {};
const offStyles = { borderColor: palette.grey_70 };

const PlaceTypeChip = ({placeType, isSelected}: ChipProps) => {
  const uniqueId = generateUUID();
  const getClassFactory = () => `button_${placeType}--${uniqueId}`;

  let placeIcon: JSX.Element;
  let placeLabel: string;

  if (placeType === PLACE_TYPE.LOTTO) {
    placeIcon = <LottoIcon />;
    placeLabel = PLACE_TYPE.LOTTO;
    onStyles = { color: palette.orange_30, borderColor: palette.orange_30, backgroundColor: palette.orange_light };
  } else if (placeType === PLACE_TYPE.BOOKMARK) {
    placeIcon = <BookmarkIcon />;
    placeLabel = PLACE_TYPE.BOOKMARK;
    onStyles = { color: palette.green_30, borderColor: palette.green_30, backgroundColor: palette.green_light };
  } else {
    placeIcon = <ShopIcon />;
    placeLabel = PLACE_TYPE.SHOP;
    onStyles = { color: palette.blue_30, borderColor: palette.blue_30, backgroundColor: palette.blue_light };
  }

  const customStyles = isSelected ? onStyles : offStyles;

  return (
    <Chip icon={placeIcon} label={placeLabel} variant="outlined" sx={{ ...customStyles, boxShadow: 3 }} className={getClassFactory()} />
  );
};

export default PlaceTypeChip;

import BookmarkIcon from '@assets/svg/bookmarkIcon.svg';
import LottoIcon from '@assets/svg/lottoIcon.svg';
import ShopIcon from '@assets/svg/shopIcon.svg';
import { PLACE_TYPE } from '@constants/map';

const IconMapType = (placeType: string) => {
  switch (placeType) {
    default:
      return <ShopIcon />;
    case PLACE_TYPE.LOTTO:
      return <LottoIcon />;
    case PLACE_TYPE.BOOKMARK:
      return <BookmarkIcon />;
  }
};

export default IconMapType;

import BookmarkIcon from '@assets/svg/bookmarkIcon.svg';
import palette from "@styles/palette";

interface BookmarkProps {
  isLiked: boolean;
}

const BookmarkBtn = ({ isLiked }: BookmarkProps) => {
  return <BookmarkIcon color={isLiked ? palette.green : palette.grey_60} />;
};

export default BookmarkBtn;
import BookmarkOn from '@assets/svg/bookmarkIcon.svg';
import BookmarkOff from '@assets/svg/bookmarkOff.svg';

interface BookmarkProps {
  isLiked: boolean;
}

const BookmarkBtn = ({ isLiked }: BookmarkProps) => {
  return isLiked ? <BookmarkOn /> : <BookmarkOff />;
};

export default BookmarkBtn;
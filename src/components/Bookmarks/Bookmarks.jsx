import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
//   console.log(readingTime)
  return (
    <div className="md:w-1/3">
      <div className="bg-[#111111] bg-opacity-5 p-8 mb-6 rounded-xl">
        <p className="text-center text-[#6047EC] font-bold text-2xl">Spent time on read: {readingTime} min</p>
      </div>
      <div className=" bg-[#111111] bg-opacity-5 p-8 rounded-xl">
        <h3 className="text-2xl font-bold mb-4">
          Bookmarked blogs: {bookmarks.length}
        </h3>
        {bookmarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};

export default Bookmarks;
